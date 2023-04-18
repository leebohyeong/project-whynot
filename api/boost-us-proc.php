<?php
/** ==============================================================================
 * File: 부스터즈 > 지원하기 (boost-us-proc.php)
 * Date: 2023-04-11 오후 4:05
 * Created by @FAMILY10.DevGroup
 * Copyright 2023, whynot.uplus.com(GroupIDD). All rights are reserved
 * ==============================================================================*/

require_once $_SERVER['DOCUMENT_ROOT'] . "/vendor/autoload.php";

use \Groupidd\Model\ModelBase;
use \Groupidd\Common\CommonFunc;
use \Groupidd\Library\Validator;

header("Content-Type: application/json");

$today_date = date("Y-m-d");

if ($today_date > '2023-05-01') {
    $response['message'] = '지원하기가 종료되었습니다.';
    $response['result'] = false;
    echo json_encode($response);
    exit;
}

// 결과값 리턴
$response = array();
$response['result'] = false;
$response['message'] = '지원하기에 참여하실 수 없습니다.';

$requestInfo = array(
    'channel' => $_POST['channel'] ?? '',
    'url' => $_POST['url'] ?? '',
    'concept' => $_POST['concept'] ?? '',
    'reason' => $_POST['reason'] ?? '',
    'agree1' => $_POST['agree1'] ?? '',
    'agree1_ver' => $_POST['agree1_ver'] ?? '1.0',
    'agree2' => $_POST['agree2'] ?? '',
    'agree2_ver' => $_POST['agree2_ver'] ?? '1.0',
    'device' => $DEVICE_TYPE_
);

$kcpCertInfo = array(
    'ordr_idxx' => $_POST['ordr_idxx'] ?? '',
    'cert_no' => $_POST['cert_no'] ?? '',
    'dn_hash' => $_POST['dn_hash'] ?? '',
    'enc_cert_data2' => $_POST['enc_cert_data2'] ?? '',
);

include "../kcp/cfg/cert_conf.php";
require "../kcp/lib/ct_cli_lib.php";

$validator = new Validator($kcpCertInfo);
$validator->rule('required', 'ordr_idxx')->message('본인인증을 진행해주시기 바랍니다.');
$validator->rule('required', 'cert_no')->message('본인인증을 진행해주시기 바랍니다.');
$validator->rule('required', 'dn_hash')->message('본인인증을 진행해주시기 바랍니다.');
$validator->rule('required', 'enc_cert_data2')->message('본인인증을 진행해주시기 바랍니다.');
if ($validator->validate()) {
    $ct_cert = new C_CT_CLI;
    $ct_cert->mf_clear();

    $site_cd        = $g_conf_site_cd;
    $ordr_idxx      = $kcpCertInfo['ordr_idxx'];
    $cert_no	    = $kcpCertInfo['cert_no'];
    $dn_hash	    = $kcpCertInfo['dn_hash'];
    $enc_cert_data2	= $kcpCertInfo['enc_cert_data2'];

    // dn_hash 검증
    // KCP 가 리턴해 드리는 dn_hash 와 사이트 코드, 요청번호 , 인증번호를 검증하여
    // 해당 데이터의 위변조를 방지합니다
    $veri_str = $site_cd.$ordr_idxx.$cert_no; // 사이트 코드 + 요청번호 + 인증거래번호

    if ( $ct_cert->check_valid_hash ( $g_conf_home_dir , $g_conf_ENC_KEY , $dn_hash , $veri_str ) != "1" )
    {
        $response['message']    = "dn_hash 변조 위험있으므로 다시 시도해주시기 바랍니다.";
        $response['result']     = false;
        echo json_encode($response);
        exit;
        // 오류 처리 ( dn_hash 변조 위험있음)
    }

    // 인증데이터 복호화 함수
    // 해당 함수는 암호화된 enc_cert_data2 를
    // site_cd 와 cert_no 를 가지고 복화화 하는 함수 입니다.
    // 정상적으로 복호화 된경우에만 인증데이터를 가져올수 있습니다.
    $opt = "1" ; // 복호화 인코딩 옵션 ( UTF - 8 사용시 "1" )
    $ct_cert->decrypt_enc_cert( $g_conf_home_dir , $g_conf_ENC_KEY , $site_cd , $cert_no , $enc_cert_data2 , $opt );

    $requestInfo['name']        = $ct_cert->mf_get_key_value("user_name"  );        // 이름
    $requestInfo['hphone']      = $ct_cert->mf_get_key_value("phone_no"   );        // 전화번호
    $requestInfo['comm_id']     = $ct_cert->mf_get_key_value("comm_id"   );         // 이동통신사 코드
    $requestInfo['birthday']    = $ct_cert->mf_get_key_value("birth_day"  );        // 생년월일

    $ct_cert->mf_clear();
} else {
    foreach ($validator->errors() as $key => $message) {
        $response['message'] = $message[0];
        $response['result'] = false;
        break;
    }

    echo json_encode($response);
    exit();
}

$validator = new Validator($requestInfo);
$validator->rule('required', 'name')->message('이름 정보가 올바르지 않습니다.');
$validator->rule('required', 'comm_id')->message('연락처 정보가 올바르지 않습니다.');
$validator->rule('required', 'hphone')->message('연락처 정보가 올바르지 않습니다.');
$validator->rule('required', 'birthday')->message('생년월일 정보가 올바르지 않습니다.');
$validator->rule('length', 'birthday', 8)->message('생년월일 정보가 올바르지 않습니다.');
$validator->rule('required', 'channel')->message('채널 정보가 올바르지 않습니다.');
$validator->rule('in', 'channel', array('youtube', 'instagram'))->message('채널 정보가 올바르지 않습니다.');
$validator->rule('required', 'url')->message('url 정보가 올바르지 않습니다.');
$validator->rule('required', 'agree1')->message('개인정보 수집 및 활용동의를 해주시기 바랍니다.');
$validator->rule('in', 'agree1', array('Y'))->message('개인정보 수집 및 활용동의를 해주시기 바랍니다.');
$validator->rule('required', 'agree2')->message('지원/참여자 유의사항에 동의를 해주시기 바랍니다.');
$validator->rule('in', 'agree2', array('Y'))->message('개인정보 수집 및 활용동의를 해주시기 바랍니다.');


if ($validator->validate()) {
    $requestInfo = $validator->data();
} else {
    foreach ($validator->errors() as $key => $message) {
        $response['message'] = $message[0];
        $response['result'] = false;
        break;
    }

    echo json_encode($response);
    exit();
}

// 암호화 처리
$requestInfo['name']        = CommonFunc::stringEncrypt($requestInfo['name'], $ENCRYPT_KEY_);
$requestInfo['hphone']      = CommonFunc::stringEncrypt($requestInfo['hphone'], $ENCRYPT_KEY_);
$requestInfo['birthday']    = CommonFunc::stringEncrypt($requestInfo['birthday'], $ENCRYPT_KEY_);



$db = new ModelBase();
$db->beginTransaction();
$db->from("BOOSTUS_APPLY");
if ($db->insert($requestInfo)) {
    $db->executeTransaction();

    $event_seq = $db->lastInsertId();

    $response['result'] = true;
    $response['message'] = '모집에 정상적으로 지원되었습니다.';

    echo json_encode($response);
    exit();

}else{
    $db->rollBack();
    $db->close();

    echo json_encode($response);
    exit();
}