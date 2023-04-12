<?php
require_once $_SERVER['DOCUMENT_ROOT'] . "/vendor/autoload.php";

    /* ============================================================================== */
    /* =   PAGE : 인증 요청 PAGE                                                    = */
    /* = -------------------------------------------------------------------------- = */
    /* =   Copyright (c)  2012.01   KCP Inc.   All Rights Reserved.                 = */
    /* ============================================================================== */

    /* ============================================================================== */
    /* =   환경 설정 파일 Include                                                   = */
    /* = -------------------------------------------------------------------------- = */
    include "./cfg/cert_conf.php";       // 환경설정 파일 include
    
    /* = -------------------------------------------------------------------------- = */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, target-densitydpi=medium-dpi" >
        <title>*** KCP Online Certification System [PHP Version] ***</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                padding: 30px;
            }

            div {
                display: flex;
                align-items: center;
                padding: 10px 0;
            }

            [type="text"] {
                width: 320px;
                height: 28px;
            }

            textarea {
                width: 320px;
            }

            select {
                width: 320px;
                height: 28px;
            }

            form > div > span {
                width: 100px;
            }

            form > div div span + input {
                margin-left: 20px;
            }
        </style>
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
                    
				document.form_auth.comm_id.value = frm.comm_id.value;
				document.form_auth.name.value = frm.res_username.value;
				document.form_auth.hphone.value = frm.res_hphone.value;
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

                    auth_form.action = "./proc_req.php"; // 인증창 호출 및 결과값 리턴 페이지 주소
                    
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

        </script>
    </head>
    <body oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;">
            <form name="form_auth" method="post" action="/api/boost-us-proc.php">
                <input type="text" name="ordr_idxx" class="frminput" value="" size="40" readonly="readonly" maxlength="40"/>
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


                <div>
                    <span>이름</span>
                    <input type="text" name="name">
                </div>
                <div>
                    <span>통신사</span>
                    <!--
                    <select name="comm_id">
                        <option value="SKM">SKM</option>
                        <option value="LGM">LGM</option>
                        <option value="KTM">KTM</option>
                    </select>
                    -->
                    <input type="text" name="comm_id"  value=""/>

                    <button onclick="return auth_type_check();" width="108" height="37" alt="본인인증">본인인증</button>
                </div>
                <div>
                    <span>휴대전화</span>
                    <input type="text" name="hphone">
                </div>
                <div>
                    <span>생년월일</span>
                    <input type="text" name="birthday">
                </div>
                <div>
                    <span>채널</span>
                    <div>
                        <input type="radio" name="channel" value="youtube">
                        <span>유튜브</span>
                        <input type="radio" name="channel" value="instagram">
                        <span>인스타</span>
                    </div>
                </div>
                <div>
                    <span>URL</span>
                    <input type="text" name="url">
                </div>
                <div>
                    <span>컨셉</span>
                    <textarea rows="5" name="concept"></textarea>
                </div>
                <div>
                    <span>지원동기</span>
                    <textarea rows="5" name="reason"></textarea>
                </div>
                <div>
                    <input type="hidden" name="agree1" value="Y" checked>
                    <input type="hidden" name="agree2" value="Y" checked>
                    <input type="hidden" name="agree1_ver" value="1.0">
                    <input type="hidden" name="agree2_ver" value="1.0">
                </div>

                <button type="submit">지원하기</button>

				
            </form>
        </div>
        <iframe id="kcp_cert" name="kcp_cert" width="100%" height="700" frameborder="0" scrolling="no" style="display:none"></iframe>





            <script>
                // document.querySelector('[name="name"]').value = '가나다라마바사아자차카타파하'.split('').sort(() => Math.random() - 0.5).slice(0, 3).join('');
                // document.querySelector('[name="comm_id"]').selectedIndex = ~~(Math.random() * 3);
                // document.querySelector('[name="hphone"]').value = `010${(~~(Math.random() * 9999) + '').padEnd(4, '0')}${(~~(Math.random() * 9999) + '').padEnd(4, '0')}`;
                // document.querySelector('[name="birthday"]').value = `19${(~~(Math.random() * 100) + '').padEnd(2, '0')}${(~~(Math.random() * 12) + 1 + '').padStart(2, '0')}${(~~(Math.random() * 31) + 1 + '').padStart(2, '0')}`;
                // document.querySelectorAll('[name="channel"]')[~~(Math.random() * 2)].checked = true;
                // document.querySelector('[name="url"]').value = `${'abcdefghijklmnopqrstuvwxyz'.split('').sort(() => Math.random() - 0.5).slice(0, ~~(Math.random() * 15) + 1).join('')}@${'abcdefghijklmnopqrstuvwxyz'.split('').sort(() => Math.random() - 0.5).slice(0, ~~(Math.random() * 10) + 1).join('')}.com`;
                // document.querySelector('[name="concept"]').value = [...'가나다라마바사아자차카타파하abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ          '.split(''), '\n', '\n', '\n', '\n', '\n', '\n', '\n'].sort(() => Math.random() - 0.5).slice(0, ~~(Math.random() * 20) + 10).join('');
                // document.querySelector('[name="reason"]').value = [...'가나다라마바사아자차카타파하abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ          '.split(''), '\n', '\n', '\n', '\n', '\n', '\n', '\n'].sort(() => Math.random() - 0.5).slice(0, ~~(Math.random() * 40) + 10).join('');
                //
                // const form = document.querySelector('form');
                // form.addEventListener('submit', (event) => {
                //     event.preventDefault();
                //
                //     const formData = new FormData(form);
                //
                //     fetch(form.action, {
                //         method: form.method,
                //         body: formData
                //     })
                //         .then(response => response.json())
                //         .then(data => {
                //             alert(data.message);
                //             location.reload();
                //         });
                // });
            </script>
    </body>
</html>