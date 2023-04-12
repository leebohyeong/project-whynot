<?php
require_once $_SERVER['DOCUMENT_ROOT'] . "/vendor/autoload.php";

$mobile_agent = "/(iPod|iPhone|Android|BlackBerry|SymbianOS|SCH-M\d+|Opera Mini|Windows CE|Nokia|SonyEricsson|webOS|PalmOS)/";
if(preg_match($mobile_agent, $_SERVER['HTTP_USER_AGENT'])){
    ?>
    <script>
        location.href = "/m/index.html";
    </script>
    <?php
}


/* ============================================================================== */
/* =   본인인증 환경 설정 파일 Include                                                   = */
/* = -------------------------------------------------------------------------- = */
include "./kcp/cfg/cert_conf.php";       // 환경설정 파일 include
/* = -------------------------------------------------------------------------- = */
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LG U+</title>


    <script type="text/javascript">

        // 인증창 종료후 인증데이터 리턴 함수
        function auth_data( frm )
        {
            var auth_form     = document.form_auth;
            var nField        = frm.elements.length;
            var response_data = "";

            // up_hash 검증
            if( frm.up_hash.value != auth_form.veri_up_hash.value )
            {
                alert("up_hash 변조 위험있음");

            }


            //스마트폰 처리
            for ( i = 0; i < nField; i++ )
            {
                if( frm.elements[i].value != "" )
                {
                    response_data += frm.elements[i].name + " : " + frm.elements[i].value + "\n";

                    frm.elements[i].name.value = frm.elements[i].value;

                }
            }

            if( navigator.userAgent.indexOf("Android") > - 1 || navigator.userAgent.indexOf("iPhone") > - 1 )
            {
                document.getElementById( "cert_info" ).style.display = "";
                document.getElementById( "kcp_cert"  ).style.display = "none";
            }


            if(isChild(frm.res_birthday.value) === true){
                alert('만14세미만은 지원하실수 없습니다');
                location.reload();
                return;
            }

            document.form_auth.comm_id.value = frm.comm_id.value;
            document.form_auth.name.value = frm.res_username.value;
            document.form_auth.hphone.value = frm.res_hphone.value;
            document.form_auth.birthday.value = frm.res_birthday.value;
            document.form_auth.enc_cert_data2.value	= frm.enc_cert_data2.value;
            document.form_auth.cert_no.value = frm.cert_no.value;
            document.form_auth.dn_hash.value = frm.dn_hash.value;
        }

        // 인증창 호출 함수
        function auth_type_check()
        {
            var auth_form = document.form_auth;

            if( auth_form.ordr_idxx.value == "" )
            {
                alert( "요청번호는 필수 입니다." );

                return false;
            }
            else
            {
                if( navigator.userAgent.indexOf("Android") > - 1 || navigator.userAgent.indexOf("iPhone") > - 1 )
                {
                    auth_form.target = "kcp_cert";

                    document.getElementById( "cert_info" ).style.display = "none";
                    document.getElementById( "kcp_cert"  ).style.display = "";
                }
                else
                {
                    var return_gubun;
                    var width  = 410;
                    var height = 500;

                    var leftpos = screen.width  / 2 - ( width  / 2 );
                    var toppos  = screen.height / 2 - ( height / 2 );

                    var winopts  = "width=" + width   + ", height=" + height + ", toolbar=no,status=no,statusbar=no,menubar=no,scrollbars=no,resizable=no";
                    var position = ",left=" + leftpos + ", top="    + toppos;
                    var AUTH_POP = window.open('','auth_popup', winopts + position);

                    auth_form.target = "auth_popup";
                }

                auth_form.action = "/kcp/SMART_ENC/proc_req.php"; // 인증창 호출 및 결과값 리턴 페이지 주소

                return true;
            }
        }

        /* 예제 */
        window.onload=function()
        {
            var today            = new Date();
            var year             = today.getFullYear();
            var month            = today.getMonth() + 1;
            var date             = today.getDate();
            var time             = today.getTime();


            init_orderid(); // 요청번호 샘플 생성
        }

        // 요청번호 생성 예제 ( up_hash 생성시 필요 )
        function init_orderid()
        {
            var today = new Date();
            var year  = today.getFullYear();
            var month = today.getMonth()+ 1;
            var date  = today.getDate();
            var time  = today.getTime();

            if(parseInt(month) < 10)
            {
                month = "0" + month;
            }

            var vOrderID = year + "" + month + "" + date + "" + time;

            document.form_auth.ordr_idxx.value = vOrderID;
        }



        /**
         * 만 14세 미만인지 체크
         * @param birthDate yyyyMMdd
         * @returns true:만14세미만 어린이
         */
        function isChild(birthDate) {
            var today = new Date();
            var yyyy = today.getFullYear();
            var mm = today.getMonth() < 9 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1); // getMonth()
            var dd  = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

            return parseInt(yyyy+mm+dd) - parseInt(birthDate) - 140000 < 0;
        }

    </script>
</head>
<body>
<form name="form_auth" method="post" action="/api/boost-us-proc.php" class="modal-boost-us__form">
    <input type="hidden" name="ordr_idxx" value="" readonly="readonly"/>
    <input type="hidden" name="enc_cert_data2"  value=""/>
    <input type="hidden" name="cert_no"  value=""/>
    <input type="hidden" name="dn_hash"  value=""/>
    <!-- 요청종류 -->
    <input type="hidden" name="req_tx"       value="cert"/>
    <!-- 요청구분 -->
    <input type="hidden" name="cert_method"  value="01"/>
    <!-- 웹사이트아이디 : ../cfg/cert_conf.php 파일에서 설정해주세요 -->
    <input type="hidden" name="web_siteid"   value="<?= $g_conf_web_siteid ?>"/>
    <!-- 노출 통신사 default 처리시 아래의 주석을 해제하고 사용하십시요
         SKT : SKT , KT : KTF , LGU+ : LGT
    <input type="hidden" name="fix_commid"      value="KTF"/>
    -->
    <!-- 사이트코드 : ../cfg/cert_conf.php 파일에서 설정해주세요 -->
    <input type="hidden" name="site_cd"      value="<?= $g_conf_site_cd ?>" />
    <!-- Ret_URL : ../cfg/cert_conf.php 파일에서 설정해주세요 -->
    <input type="hidden" name="Ret_URL"      value="<?= $g_conf_Ret_URL ?>" />
    <!-- cert_otp_use 필수 ( 메뉴얼 참고)
         Y : 실명 확인 + OTP 점유 확인 , N : 실명 확인 only
    -->
    <input type="hidden" name="cert_otp_use" value="Y"/>
    <!-- 리턴 암호화 고도화 -->
    <input type="hidden" name="cert_enc_use_ext" value="Y"/>

    <!-- cert_able_yn input 비활성화 설정 -->
    <input type="hidden" name="cert_able_yn" value=""/>

    <input type="hidden" name="res_cd"       value=""/><br>
    <input type="hidden" name="res_msg"      value=""/>

    <!-- up_hash 검증 을 위한 필드 -->
    <input type="hidden" name="veri_up_hash" value=""/>

    <!-- web_siteid 을 위한 필드 -->
    <input type="hidden" name="web_siteid_hashYN" value="Y"/>
    <input type="text" name="birthday">




    <div class="modal-boost-us__box modal-boost-us__name">
        <span>이름</span>
        <input type="text" name="name" readonly>
    </div>
    <div class="modal-boost-us__box">
        <span>휴대전화</span>
        <div>
            <input type="text" name="comm_id">
            <input type="text" name="hphone" readonly>
            <button type="button" onclick="return auth_type_check();">인증하기</button>
            <button onclick="return auth_type_check();" width="108" height="37" alt="본인인증">본인인증</button>
        </div>
    </div>
    <div class="modal-boost-us__box modal-boost-us__channel">
        <span>활동채널</span>
        <div>
            <label for="youtube">
                <input type="radio" name="channel" value="youtube" id="youtube">
                <span>유튜브</span>
            </label>
            <label for="instagram">
                <input type="radio" name="channel" value="instagram" id="instagram">
                <span>인스타</span>
            </label>
            <p class="modal-boost-us__form-text">(구독자/팔로워 500명 이상이면 누구나 지원 가능)</p>
        </div>
    </div>
    <div class="modal-boost-us__box modal-boost-us__url">
        <span>URL</span>
        <input type="text" name="url">
    </div>
    <div class="modal-boost-us__box modal-boost-us__concept">
        <span>채널컨셉</span>
        <textarea rows="5" name="concept" placeholder="최대 30자 이내" maxlength="30"></textarea>
    </div>
    <div class="modal-boost-us__box modal-boost-us__reason">
        <span>지원동기</span>
        <textarea rows="5" name="reason" placeholder="최대 50자 이내" maxlength="50"></textarea>
    </div>

    <button type="submit">지원하기</button>
</form>
</div>

<iframe id="kcp_cert" name="kcp_cert" width="100%" height="700" frameborder="0" scrolling="no" style="display:none"></iframe>
</body>
</html>