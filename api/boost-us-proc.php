<?php
/** ==============================================================================
 * File: 부스터즈 > 지원하기 (boost-us-proc.php)
 * Date: 2023-04-11 오후 4:05
 * Created by @FAMILY10.DevGroup
 * Copyright 2023, whynot.uplus.com(GroupIDD). All rights are reserved
 * ==============================================================================*/

require_once $_SERVER['DOCUMENT_ROOT'] . "/vendor/autoload.php";

use \Groupidd\Model\ModelBase;
use \Groupidd\Library\Validator;

header("Content-Type: application/json");

$today_date = date("Y-m-d");

if ($today_date > '2023-04-28') {
    $response['message'] = '지원하기가 종료되었습니다.';
    $response['result'] = false;
    echo json_encode($response);
    exit;
}

// 결과값 리턴
$response = array();
$response['result'] = false;
$response['message'] = '이벤트에 참여하실 수 없습니다.';

$requestInfo = array(
    /*
    'ordr_idxx' => $_POST['ordr_idxx'] ?? '',
    'cert_no' => $_POST['cert_no'] ?? '',
    'dn_hash' => $_POST['dn_hash'] ?? '',
    'enc_cert_data2' => $_POST['enc_cert_data2'] ?? '',
    */
    'name' => $_POST['name'] ?? '',
    'comm_id' => $_POST['comm_id'] ?? '',
    'hphone' => $_POST['hphone'] ?? '',
    'birthday' => $_POST['birthday'] ?? '',
    'channel' => $_POST['channel'] ?? '',
    'url' => $_POST['url'] ?? '',
    'concept' => $_POST['concept'] ?? '',
    'reason' => $_POST['reason'] ?? '',
    'agree1' => $_POST['agree1'] ?? '',
    'agree1_ver' => $_POST['agree1_ver'] ?? '1.0',
    'agree2' => $_POST['agree2'] ?? '',
    'agree2_ver' => $_POST['agree2_ver'] ?? '1.0',
    'device' => $DEVICE_TYPE_,
    'user_ip' => $USER_IP_                                                   // 사용자 아이피
);

/*
$requestInfo['name']    = '김동임';
$requestInfo['comm_id']    = 'KTF';     // SKT, LGT, KTF, 알뜰폰 : SKM, LGM, KTM
$requestInfo['hphone']    = '01027897151';
$requestInfo['birthday']    = '19810518';
$requestInfo['channel']    = 'youtube';
$requestInfo['url']    = 'http://www.naver.com';
$requestInfo['concept']    = '컨셉';
$requestInfo['reason']    = '지원이유';
$requestInfo['agree1']    = 'Y';
$requestInfo['agree1_ver']    = '1.0';
$requestInfo['agree2']    = 'Y';
$requestInfo['agree1_ver']    = '1.0';
*/

/*
$requestInfo['ordr_idxx']       = "202304121681290006161";
$requestInfo['cert_no']         = "23732000946920";
$requestInfo['dn_hash']         = "C87D49B930BB902782E64D9318A7715808E24564";
$requestInfo['enc_cert_data2']  = ".1.E67EE66607E5EAE263F9D395C7919D7E491EE0A74783E4117C440591CFD8699ABC4A2B57BD2795B3B430A30FD8A928A379CE6FC38AB7445E2BC742EF4423AD55C738EC053E243AFFFA46A1D6C87E4F733D7EEBEFD231A862766B1B8787A992EF8C9AC3D57184CB05E315D731628ABD8F0A7C4AC766F57324851B9E6D6A151BE67E8C922D491AD085E3ABF168DDF52C269B76DFF0DDE7DA54652A4B3EB5608D5E28E91D82830804D834EDCFF68C537A37306EC226FC38097576DC75A7A89246771183E6EC3A1734CD36EECE61124BB34C2653AE683B4BF3C3A703914BF411F6D2501AE4021D050F2383EBA4260AC144B615FD8A94886368FF82D9D07A3D75FF52764511BBE6C4DABC714AE289AC8644FB9CD4F5A217EF9305C24C7D8F916D94BB460D76E94C0BBE95814E21B8EC5B3CF2044B5852CF663C1C225DB5B2F1A48CFE0C89ECC62A0DFA036DC9A957571D207CC929F3B7FEE613F1D75661ED5BC75F4965ABBE265884D4277AC94C77EC8C869F.fbny4y5H3tPWg-MkiQfT0MxoUCnbwRfKCHruD7Ndb3V_glVPQItpNySfIdKYeO3NYqH72TfXrroA_3lttgerqcakDR3IeqPl1xx8_vvMuTKgygIHVpDN6sv4ic7vCZFSQBOWuvnkejpWpT2n0XEF9-JEQbvmYbBa3YmktwkhAH24XXTM6_j3-bq_Oj-7POlWAsacHy4qr87h6u6jY7iRHhHnB06SmiwmovNOmFVtiFOHWL13EXh1AYQ4PFt0UCt15o_n4XxSr2OENHhk7-AQM-jW3qiFOpQIJXs_VVUxOHm39faeYGNDH7X1YccjlSxuLCNhlF7B_YogoZh1f8rjdA.MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmO92ZYkJNYMn80Q982_psNFMIS3Zm_oCtEQMfKbap7y3YE9TxCxGWiTlCpsMmmy0WdiJQVJoMLec2Z7O436hSN2praZAQzXVNYq50Y4bhrVZhNlN3KPyM4YjLIldqTuyvgY1xxfrpLLwk1KuDufm5jJf05UcRGsnkWRM6GxhyAqZjTdDYkaP1XXlkMHKi39fPqCoyyF6tlW4byS_mjeVopbFXoCH4DcrVJiO7j9V8oE4ZQiztNPRYr5SoCDOzhGK9zlD4Cz2DMl-XRqrSrvY0-8wLr9bL6UfS9yJPoexXDzcWfrQXIruvCZghg7uwicEqeE6koz2ZXJd62JfbmaQKQIDAQAB.IhVIw0p_EkCVgzeylzNPEk_snuYYaX5CeOzaCKmjFZqD9D_jOVOM1qI7bhZSARhpwf8ORls7HTJ2za4Xek-fm2DqhqOBrJZSIdasM-K0n0kuu9r_S4-oLs0GS66CP27iqKK92gUs1nQ7KxI1CYP4k-B5qiim3h9OY2Zt0pAS3dBNWSYYdkaGE_YHq2C0RokEEn1RKunqng7aAH21Yr0XOtWPgtYNG3CSIFFPBsvIOO5brqy7H8LUECHqdhF7e20Xbw_O8XceMsPvzcpOzTBh1IfTOWAkJ2lX7uBieA8rcD8db3Xezw-gT6gAvYwZvXE88Xh5cEtXq1UJdubQbaA4vg";
*/

$validator = new Validator($requestInfo);

/*$validator->rule('required', 'ordr_idxx')->message('본인인증을 진행해주시기 바랍니다.');
$validator->rule('required', 'cert_no')->message('본인인증을 진행해주시기 바랍니다.');
$validator->rule('required', 'dn_hash')->message('본인인증을 진행해주시기 바랍니다.');
$validator->rule('required', 'enc_cert_data2')->message('본인인증을 진행해주시기 바랍니다.');
*/
$validator->rule('required', 'name')->message('이름 정보가 올바르지 않습니다.');
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


$db = new ModelBase();
$db->beginTransaction();
$db->from("BOOSTUS_APPLY");
if ($db->insert($requestInfo)) {
    $db->executeTransaction();

    $event_seq = $db->lastInsertId();

    $response['result'] = true;
    $response['message'] = '이벤트에 정상적으로 참여되었습니다.';

    echo json_encode($response);
    exit();

}else{
    $db->rollBack();
    $db->close();

    echo json_encode($response);
    exit();
}