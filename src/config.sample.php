<?php
/** ==============================================================================
 * File: Config Setting (config.php)
 * Date: 2018-07-27 오후 2:34
 * Created by @CSL.DevGroup
 * Copyright 2018, event.cuckoo.co.kr(Group IDD). All rights are reserved
 * ==============================================================================*/
use \Groupidd\Common\Setting;
use \Groupidd\Common\CommonFunc;
use \Groupidd\Library\Mobile_Detect;
use \Groupidd\Library\Debugbar;

header('Content-Type:text/html; charset=UTF-8');
header('Cache-control:no-cache,must-revalidate');
header('Pragma:no-cache');
header('X-Frame-Options: SAMEORIGIN');
//header("Access-Control-Allow-Origin: *");       // json 때문에 잠시 허용(운영반영시 주석 처리)

// error log
ini_set('error_reporting', E_ALL | E_STRICT);
ini_set('display_errors', 'Off');
ini_set('log_errors', 'On');
//ini_set('error_log', '/home/groupidd/whynot.uplus.com/logs/error_log');
ini_set('error_log', 'D:\myProject\2023\whynot.uplus.com/logs/error_log');

ini_set('max_execution_time', 300);

// session
ini_set("session.cookie_httponly", 1);      // session http only for xss
ini_set("session.cache_expire", 3600 );
ini_set("session.gc_maxlifetime", 3600 );  // 세션 만료시간을 30분으로 설정
@session_cache_limiter('nocache,must-revalidate');
session_start();

global $SITE_NAME_;
global $HOST_HTTP_, $HOST_SSL_, $HOST_HTTP_M_, $COOKIE_HOST_, $COOKIE_SECURE_;
global $DB_HOST_, $DB_USER_, $DB_PASSWORD_, $DB_NAME_, $DB_ENCODING_;
global $OG_KEYWORDS_, $OG_TITLE_, $OG_DESCRIPTION_, $OG_IMAGE_, $OG_URL_;
global $API_FACEBOOK_, $API_NAVER_, $API_KAKAO_;
global $SNS_ID_, $SNS_TYPE_, $ADMIN_ID_, $ADMIN_NM_, $ADMIN_LV_, $USER_IP_;
global $ROOT_PATH_, $PHP_SELF_, $REQUEST_URI_, $ARR_REQUEST_URI_, $QUERY_STRING_, $DATE_;
global $ENCRYPT_KEY_;
global $DEVICE_TYPE_, $MOBILE_DETECT_, $DEBUGBAR_;
global $SCODE_, $TRAVEL_TYPE_;
global $KCP_SITE_CODE_, $KCP_ENC_KEY_, $KCP_SITE_ID;


// property setting
$setting            = Setting::getInstance();     // property_sample.php 참고
$ENVIRONMENT_       = $setting->ENV['ENVIRONMENT'];
$SITE_NAME_         = $setting->SITE['SITE_NAME'];

$HOST_HTTP_         = $setting->DOMAIN['HOST_HTTP'];
$HOST_SSL_          = $setting->DOMAIN['HOST_SSL'];
$HOST_HTTP_M_       = $setting->DOMAIN['HOST_HTTP_M'];

$COOKIE_HOST_       = $setting->COOKIE['COOKIE_HOST'];
$COOKIE_SECURE_		= $setting->COOKIE['COOKIE_SECURE'];

$DB_HOST_           = $setting->DB['DB_HOST'];
$DB_USER_           = $setting->DB['DB_USER'];
$DB_PASSWORD_       = $setting->DB['DB_PASSWORD'];
$DB_NAME_           = $setting->DB['DB_NAME'];
$DB_ENCODING_       = $setting->DB['DB_ENCODING'];

$OG_KEYWORDS_       = $setting->SITE['OG_KEYWORDS'];
$OG_TITLE_          = $setting->SITE['OG_TITLE'];
$OG_DESCRIPTION_    = $setting->SITE['OG_DESCRIPTION'];
$OG_IMAGE_          = $HOST_HTTP_ . $setting->SITE['OG_IMAGE'];
$OG_URL_            = $HOST_HTTP_;

$API_FACEBOOK_      = $setting->API['API_FACEBOOK'];
$API_NAVER_         = $setting->API['API_NAVER'];
$API_KAKAO_         = $setting->API['API_KAKAO'];

$KCP_SITE_CODE_     = $setting->KCP['KCP_SITE_CODE'];
$KCP_ENC_KEY_       = $setting->KCP['KCP_ENC_KEY'];
$KCP_SITE_ID_       = $setting->KCP['KCP_SITE_ID'];

// $_SERVER['SERVER_ADDR']
// basic path
$ROOT_PATH_         = $_SERVER['DOCUMENT_ROOT'];

// session & userip
$SNS_ID_            = isset($_SESSION['SNS_ID']) ? $_SESSION['SNS_ID'] : 'dongim';
$SNS_TYPE_          = isset($_SESSION['SNS_TYPE']) ? $_SESSION['SNS_TYPE'] : 'kakao';
$ADMIN_ID_          = isset($_SESSION['ADMIN_ID']) ? $_SESSION['ADMIN_ID'] : '';
$ADMIN_NM_          = isset($_SESSION['ADMIN_NM']) ? $_SESSION['ADMIN_NM'] : '';
$ADMIN_LV_          = isset($_SESSION['ADMIN_LV']) ? $_SESSION['ADMIN_LV'] : '';
$USER_IP_           = $_SERVER['REMOTE_ADDR'];

// folder path
$PHP_SELF_          = $_SERVER['PHP_SELF'];
$REQUEST_URI_       = $_SERVER['REQUEST_URI'];
$QUERY_STRING_      = isset($_SERVER['QUERY_STRING']) ? $_SERVER['QUERY_STRING'] : '';
$ARR_REQUEST_URI_   = explode('/',$REQUEST_URI_);
array_shift($ARR_REQUEST_URI_);

// encrypt&decrypt KEY
$ENCRYPT_KEY_       = $setting->ENCRYPT['ENCRYPT_KEY'];

$DATE_              = date('YmdH', time());


// base class call ----------------------

$MOBILE_DETECT_     = new Mobile_Detect;
// base class call ----------------------


// device check
$DEVICE_TYPE_   = "W";
if ($MOBILE_DETECT_->isMobile() || $MOBILE_DETECT_->isTablet()) {
    $DEVICE_TYPE_ = "M";
}


// 관리자 권한 체크(sitemanager 폴더내 login.php 제외하고 모두 강제로 로그인 체크하도록..)
if ($ARR_REQUEST_URI_[0] == 'sitemanager' && ($ARR_REQUEST_URI_[1] != 'login.php' && $ARR_REQUEST_URI_[1] != 'login-proc.php' && $ARR_REQUEST_URI_[1] != 'logout.php' && $ARR_REQUEST_URI_[1] != 'password-change-proc.php' )){
    if(empty($ADMIN_ID_)){
        CommonFunc::jsAlert('로그인 후 이용 가능합니다.','location.href=\'/sitemanager/login.php\'');
        exit();
    }
}

// mobile url redirect
if ($DEVICE_TYPE_ == "M" && $ARR_REQUEST_URI_[0] != "sitemanager" && $ARR_REQUEST_URI_[0] != "api" && $ARR_REQUEST_URI_[0] != "m" ){	// sitemanager(어드민), 모바일 폴더 제외
    // echo "<script>location.href='".$HOST_HTTP_M_.$REQUEST_URI_."';</script>";
    // exit();
}

if ($DEVICE_TYPE_ == "W" && $ARR_REQUEST_URI_[0] == "m" ){      // 웹에서는 모바일페이지 접근안되게...
    //echo "<script>location.href='".$HOST_SSL_."';</script>";
    //exit();
}


// 개발환경일때는 관리자페이지가 허용아이피에서만 접속되게..
if ($ENVIRONMENT_ == 'development' && $ARR_REQUEST_URI_[0] == 'sitemanager'){
    //if ($USER_IP_ != '211.40.240.10' && $USER_IP_ != '211.40.240.2') exit();
}

//if ($USER_IP_ != '125.131.114.58') exit();