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
    'name' => $_POST['name'] ?? '',
    'comm_id' => $_POST['comm_id'] ?? '',
    'hphone' => $_POST['hphone'] ?? '',
    'channel' => $_POST['channel'] ?? '',
    'url' => $_POST['url'] ?? '',
    'concept' => $_POST['concept'] ?? '',
    'reason' => $_POST['reason'] ?? '',
    'agree1' => $_POST['agree1'] ?? '',
    'agree1_ver' => $_POST['agree1_ver'] ?? '',
    'agree2' => $_POST['agree2'] ?? '',
    'agree2_ver' => $_POST['agree2_ver'] ?? '',
    'user_ip' => $USER_IP_                                                   // 사용자 아이피
);

$validator = new Validator($requestInfo);
$validator->rule('required', 'name')->message('이름 정보가 올바르지 않습니다.');
$validator->rule('required', 'hphone')->message('연락처 정보가 올바르지 않습니다.');
//$validator->rule('length', 'event_key', 15)->message('로그인 정보가 올바르지 않습니다.');


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
$db->from("EVENT_APPLY");
if ($db->insert($requestInfo)) {
    $event_seq = $db->lastInsertId();

    $response['result'] = true;
    $response['message'] = '이벤트에 정상적으로 참여되었습니다.';
    $response['prize']    = 'N';
    $response['prize_name']   = '';

    echo json_encode($response);
    exit();

}else{
    $db->rollBack();
    $db->close();

    echo json_encode($response);
    exit();
}