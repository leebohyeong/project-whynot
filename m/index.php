<?php
require_once $_SERVER['DOCUMENT_ROOT'] . "/vendor/autoload.php";

$ordr_idxx = date('Ymd').number_format(microtime(true)*1000,0,'.','').sprintf('%04d',rand(0000,9999));

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
    <meta name="author" content="Group IDD 개발그룹">
    <meta name="description" content="와이낫크루가 추천하는 대한민국 핫플과 혜택을 만나보세요">
    <meta name="keywords" content="LG U+, 와이낫 로드">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="address=no">
    <meta name="author" content="">
    <meta property="og:type" content="website">
    <meta property="og:title" content="[LG유플러스 WHY NOT?]">
    <meta property="og:url" content="https://와이낫로드.com">
    <meta property="og:description" content="선넘는 즐거움, 이런게 유플러스만의 WHY NOT">
    <meta property="og:image" content="https://와이낫로드.com/assets/images/og_image.jpg">
    <meta property="og:site_name" content="와이낫 로드">
    <meta property="og:locale" content="ko_KR">
    <meta property="article:author" content="LG U+">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico">
    <link rel="stylesheet" href="/m/assets/css/vendors.css">
    <link rel="stylesheet" href="/m/assets/css/app.css">
    <script src="/m/assets/js/vendors.js"></script>
    <script src="/m/assets/js/app.js"></script>
    <script src="https://www.googletagmanager.com/gtag/js?id=UA-233743431-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-233743431-1');

    </script>


    <script>
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
                //document.getElementById( "cert_info" ).style.display = "";
                document.getElementById( "kcp_cert"  ).style.display = "none";
            }

            // TODO : 만 14세 미만 다시 봐주세요. 년도에서 14만 빼서 2000년도 이하는 이상하게 동작 하는것 같네용~
            if (isChild(frm.res_birthday.value)) {
                alert('만14세미만은 지원하실수 없습니다');
                alert(frm.res_birthday.value);
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

            document.form_boost_us.comm_id.value = frm.comm_id.value;
            document.form_boost_us.name.value = frm.res_username.value;
            document.form_boost_us.hphone.value = frm.res_hphone.value;
            document.form_boost_us.birthday.value = frm.res_birthday.value;
            document.form_boost_us.enc_cert_data2.value	= frm.enc_cert_data2.value;
            document.form_boost_us.cert_no.value = frm.cert_no.value;
            document.form_boost_us.dn_hash.value = frm.dn_hash.value;
        }

        // 인증창 호출 함수
        const auth_type_check = () => {
            const auth_form = document.form_auth;

            if (!auth_form.ordr_idxx.value.trim()) {
                alert('요청번호는 필수 입니다.');
                return false;
            } else {
                if (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
                    auth_form.target = 'kcp_cert';

                    //document.getElementById('cert_info').style.display = 'none';
                    document.getElementById('kcp_cert').style.display = "";
                } else {
                    // let return_gubun;
                    const width = 410;
                    const height = 500;
                    const top = (screen.height - height) / 2;
                    const left = (screen.width - width) / 2;

                    const winopts = 'width=' + width + ',height=' + height + ',toolbar=no,status=no,statusbar=no,menubar=no,scrollbars=no,resizable=no';
                    const position = ',left=' + left + ',top=' + top;
                    const AUTH_POP = window.open('', 'auth_popup', winopts + position);

                    auth_form.target = 'auth_popup';
                }

                auth_form.action = '/kcp/SMART_ENC/proc_req.php'; // 인증창 호출 및 결과값 리턴 페이지 주소

                return true;
            }
        };

        /**
         * 만 14세 미만인지 체크
         * @param birthDay yyyyMMdd
         * @returns true:만14세미만 어린이
         */
        const isChild = (birthDay) => {
            const today = new Date();
            const year = today.getFullYear() - 14;
            const month = today.getMonth();
            const date = today.getDate();
            const newDate = new Date(year, month, date).getTime();

            const birthDayYear = (birthDay + '').substring(0, 4) * 1;
            const birthDayMonth = (birthDay + '').substring(4, 6) - 1;
            const birthDayDate = (birthDay + '').substring(6, 8) * 1;
            const newBirthDay = new Date(birthDayYear, birthDayMonth, birthDayDate).getTime() + (24 * 60 * 60 * 1000);

            return newDate < newBirthDay;
        }
    </script>
</head>
<body>
<header class="header">
    <div class="header__container">
        <h1 class="header__logo"><a class="header__logo-link" href="/m"><span class="header__logo-text">WHY NOT?</span></a></h1>
        <nav class="header-menu"><a class="header-menu__button" href="#"><span class="header-menu__button-bar"></span><span class="header-menu__button-bar"></span><span class="header-menu__button-bar"></span><span class="header-menu__button-text">menu</span></a>
            <div class="header-menu__container">
                <ul class="header-menu__list">
                    <li class="header-menu__item"><a class="header-menu__link" href="#why-not" onclick="gtag('event','GNB',{'event_category' : '와이낫페이지' ,'event_label' : 'WHY NOT?'})">WHY NOT?</a></li>
                    <li class="header-menu__item"><a class="header-menu__link" href="#brand-film" onclick="gtag('event','GNB',{'event_category' : '와이낫페이지' ,'event_label' : 'Brand Flim'})">BRAND FILM</a></li>
                    <li class="header-menu__item"><a class="header-menu__link" href="#experience" onclick="gtag('event','GNB',{'event_category' : '와이낫페이지' ,'event_label' : 'EXPERIENCE'})">EXPERIENCE</a></li>
                    <li class="header-menu__item"><a class="header-menu__link" href="#road" onclick="gtag('event','GNB',{'event_category' : '와이낫페이지' ,'event_label' : 'ROAD'})">ROAD</a></li>
                    <li class="header-menu__item"><a class="header-menu__link" href="#contents" onclick="gtag('event','GNB',{'event_category' : '와이낫페이지' ,'event_label' : 'CONTENTS'})">CONTENTS</a></li>
                    <li class="header-menu__item"><a class="header-menu__link" href="#collaboration" onclick="gtag('event','GNB',{'event_category' : '와이낫페이지' ,'event_label' : 'COLLABORATION'})">COLLABORATION</a></li>
                </ul>
            </div>
        </nav>
    </div>
</header>
<section class="why-not" id="why-not">
    <div class="why-not__wrap">
        <div class="why-not__text why-not__text01">
            <h2 data-aos="fade-up">
                유플러스의 <br>
                WHY NOT?
            </h2>
            <p data-aos="fade-up" data-aos-delay="150">
                일상의 편견을 깨는 과감한 생각과 도전, <br>
                고객의 <strong>일상에 즐거운 변화</strong>를 만들어 가는 <br>
                LG유플러스만의 실천 캠페인 <strong>WHY NOT</strong>을 소개합니다.

            </p>
        </div>
        <div class="why-not__text why-not__text02">
            <!--                    <p data-aos="fade-right" data-aos-delay="250" data-aos-duration="1000">-->
            <!--                        선 넘는 즐거움 <br>-->
            <!--                        이런 게 유플러스만의-->
            <!--                    </p>-->
            <div data-aos="fade-left" data-aos-delay="350" data-aos-duration="1000" style="background-image: url('/m/assets/images/img_why_not.png')"></div>
        </div>
    </div>
</section>
<section class="brand-film" id="brand-film">
    <header>
        <h2 data-aos="fade-up" data-aos-offset="300">
            <div class="section-logo section-logo--black">
                <span>why not</span>
            </div>
            Brand Film
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" data-aos-offset="300">남다른 생각과 도전으로 선 넘는 즐거움을 제공하는 <br> 유플러스의 스토리를 소개합니다.</p>
    </header>
    <div class="tab">
        <ul class="tab__nav" role="tablist">
            <li class="tab__item">
                <button class="tab__menu" type="button" id="tab-brand-film-1" role="tab" aria-controls="tab-panel-brand-film-1" aria-selected="true" data-api="tab" onclick="gtag('event','WHY NOT Brand Film',{'event_category' : '와이낫페이지' ,'event_label' : 'Why Not 런칭 편'})">WHY NOT 런칭 편</button>
            </li>
            <li class="tab__item">
                <button class="tab__menu" type="button" id="tab-brand-film-2" role="tab" aria-controls="tab-panel-brand-film-2" aria-selected="false" data-api="tab" onclick="gtag('event','WHY NOT Brand Film',{'event_category' : '와이낫페이지' ,'event_label' : 'WHY NOT 디즈니플러스 편'})">WHY NOT 디즈니플러스 편</button>
            </li>
            <li class="tab__item">
                <button class="tab__menu" type="button" id="tab-brand-film-3" role="tab" aria-controls="tab-panel-brand-film-3" aria-selected="false" data-api="tab" onclick="gtag('event','WHY NOT Brand Film',{'event_category' : '와이낫페이지' ,'event_label' : 'WHY NOT 유독 편'})">WHY NOT 유독 편</button>
            </li>
        </ul>
        <div class="tab__content">
            <div class="tab__panel" id="tab-panel-brand-film-1" role="tabpanel" aria-labelledby="tab--brand-film-1">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div>
                                <h3>[처음을 이끄는 과감한 도전, Why Not ?]</h3>
                                <p>
                                    “할 수 있겠어?” “그게 될까?” <br>
                                    일상의 즐거운 변화를 위해 편견을 깨고 과감한 도전들을 먼저 시도하는 <br>
                                    유플러스만의 실천 캠페인, “Why Not?”
                                </p>
                                <iframe src="https://www.youtube.com/embed/CWOgnaDjzcs?controls=0" title="와이낫 런칭편"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab__panel" id="tab-panel-brand-film-2" role="tabpanel" aria-labelledby="tab--brand-film-2">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div>
                                <h3>[WHY NOT? 아빠와 아들 편]</h3>
                                <p>
                                    “같이 보니까 좋지?” “완전!” <br>
                                    어린시절 내가 좋아했던 콘텐츠를,우리 아이와 함께 즐길 수 있다면? <br>
                                    이런 게 유플러스만의 WHY NOT!
                                </p>
                                <iframe src="https://www.youtube.com/embed/HK0YHM1a-_w?controls=0" title="아빠와 아들 편"></iframe>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div>
                                <h3>[WHY NOT? 칠공주 편]</h3>
                                <p>
                                    “우리 진짜 언제 보냐~” <br>
                                    멀리 떨어져있어도 같이 있는것 같은 생생한 즐거움!✨ <br>
                                    이런 게 유플러스만의 WHY NOT!
                                </p>
                                <iframe src="https://www.youtube.com/embed/Gh4fA2SYlgM?controls=0" title="칠공주 편"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab__panel" id="tab-panel-brand-film-3" role="tabpanel" aria-labelledby="tab--brand-film-3">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div>
                                <h3>[WHY NOT] 손석구도 춤추게 만든 맞춤 구독 관리 유독!</h3>
                                <p>
                                    유독으로 내 일상에 맞춤! <br>
                                    매달 원하는 구독으로 바꾸고 할인까지 받는, <br>
                                    선 넘는 구독 관리 유독
                                </p>
                                <iframe src="https://www.youtube.com/embed/h7wK6fhQKAc?controls=0" title="손석구도 춤추게 만든 맞춤 구독 관리 유독"></iframe>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div>
                                <h3>[WHY NOT] 이석구와 함께 유독할래요?  feat.이상준</h3>
                                <p>
                                    이제는 통신사 상관없이 누구나! <br>
                                    매달 원하는 구독으로 바꾸고 할인까지 받는 <br>
                                    선 넘는 구독생활, 유독
                                </p>
                                <iframe src="https://www.youtube.com/embed/XhMpaOLWWXQ?controls=0" title="이석구와 함께 유독할래요? 편"></iframe>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div>
                                <h3>[WHY NOT? 자유할인 편]</h3>
                                <p>
                                    “유독 하고싶은 것 다 하는 사람 있어“ <br>
                                    조건 없이, 부담 없이 할수록 더 할인 받을 수 있다면? <br>
                                    이런 게 유플러스만의 WHY NOT!
                                </p>
                                <iframe src="https://www.youtube.com/embed/lhVcEIhND0M?controls=0" title="자유할인 편"></iframe>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div>
                                <h3>[WHY NOT? 편리 편]</h3>
                                <p>
                                    “유독 편한 것만 찾는 사람 있어 ” <br>
                                    가입할 때도, 해지할 때도 쉽고 편하게 관리할 수 있다면? <br>
                                    이런 게 유플러스만의 WHY NOT!
                                </p>
                                <iframe src="https://www.youtube.com/embed/4ZWmDljpgNY?controls=0" title="편리 편"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="experience" id="experience">
    <header>
        <h2 data-aos="fade-up" data-aos-offset="300">
            <div class="section-logo section-logo--white">
                <span>why not</span>
            </div>
            EXPERIENCE
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" data-aos-offset="300">WHY NOT 관점으로 고객의 PAIN POINT를 <br> 개선해 나가는 유플러스의 서비스들을 소개합니다.</p>
    </header>
    <div class="experience__wrap">
        <div class="experience__img">
            <p data-aos="fade-up" data-aos-delay="150" data-aos-offset="300"><img src="/assets/images/img_experience_01.png" alt="티빙"></p>
            <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="300"><img src="/assets/images/img_experience_02.png" alt="요기요"></p>
            <p data-aos="fade-up" data-aos-delay="250" data-aos-offset="300"><img src="/assets/images/img_experience_03.png" alt="넷플릭스"></p>
            <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="300"><img src="/assets/images/img_experience_04.png" alt="윌라"></p>
            <p data-aos="fade-up" data-aos-delay="320" data-aos-offset="300"><img src="/assets/images/img_experience_05.png" alt="일리"></p>
        </div>
        <div class="experience__text">
            <p data-aos="fade-up" data-aos-delay="350" data-aos-offset="300">
                일상에 필요한 구독 서비스를 담아 추가 할인까지 <br>
                받는 나를 위한 구독 서비스 ‘유독’을 소개합니다. <br>
                <strong>평범한 일상의 순간도 더 특별하게</strong> <br>
                <span>내 일상에 필요한 서비스를 구독!</span>
            </p>
            <p data-aos="fade-up" data-aos-delay="350" data-aos-offset="300"><a href="https://www.lguplus.com/pogg" target="_blank" onclick="gtag('event','WHY NOT EXPERIENCE',{'event_category' : '와이낫페이지' ,'event_label' : '나만의 구독 시작하기'})">나만의 구독 시작하기</a></p>
        </div>
    </div>
</section>
<section class="road" id="road">
    <header>
        <h2 data-aos="fade-up" data-aos-offset="300">
            <div class="section-logo section-logo--white2">
                <span>why not</span>
            </div>
            ROAD
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" data-aos-offset="300">
            유플러스의  선 넘는 지역활성화 프로젝트 WHY NOT ROAD ! <br>
            지자체와 함께 대한민국 전국 8도를 소개합니다. <br>
            <strong>유플러스의 혜택이 담긴 대한민국 핫플을 클릭해 보세요!</strong>
        </p>
    </header>
    <div>
        <div class="road__tab">
            <div class="swiper-pagination"></div>
        </div>
        <div class="road__list">
            <div class="road__carousel_1">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><a class="road__link" href="#road-v1" style="background-image: url('/m/assets/images/img_road_1.jpg')" onclick="gtag('event','WHY NOT ROAD',{'event_category' : '와이낫페이지' ,'event_label' : '춘천'})">
                                <p>춘천</p></a></div>
                        <div class="swiper-slide"><a class="road__link" href="#road-v2" style="background-image: url('/m/assets/images/img_road_2.jpg')" onclick="gtag('event','WHY NOT ROAD',{'event_category' : '와이낫페이지' ,'event_label' : '부산'})">
                                <p>부산</p></a></div>
                        <div class="swiper-slide"><a class="road__link" href="#road-v3" style="background-image: url('/m/assets/images/img_road_3.jpg')" onclick="gtag('event','WHY NOT ROAD',{'event_category' : '와이낫페이지' ,'event_label' : '인천'})">
                                <p>인천</p></a></div>
                        <div class="swiper-slide"><a class="road__link" href="#road-v4" style="background-image: url('/m/assets/images/img_road_4.jpg')" onclick="gtag('event','WHY NOT ROAD',{'event_category' : '와이낫페이지' ,'event_label' : '울산'})">
                                <p>울산</p></a></div>
                        <div class="swiper-slide"><a class="road__link" href="#road-v5" style="background-image: url('/m/assets/images/img_road_5.jpg')" onclick="gtag('event','WHY NOT ROAD',{'event_category' : '와이낫페이지' ,'event_label' : '서울'})">
                                <p>서울</p></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="road__video">
        <h3 data-aos="fade-up" data-aos-delay="100" data-aos-offset="300">
            선넘는 즐거움과 혜택이 가득한 <br>
            지역을 소개합니다.

        </h3>
        <div class="road__carousel_2">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <iframe src="https://www.youtube.com/embed/lxN-pHTiKnA?controls=0" title="춘천"></iframe>
                    </div>
                    <div class="swiper-slide">
                        <iframe src="https://www.youtube.com/embed/c3c_KNatUbc?controls=0" title="부산"></iframe>
                    </div>
                    <div class="swiper-slide">
                        <iframe src="https://www.youtube.com/embed/U6WU-Z7gCI0?controls=0" title="울산"></iframe>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"><span>prev</span></div>
            <div class="swiper-button-next"><span>next</span></div>
        </div>
    </div>
</section>
<section class="contents" id="contents">
    <header>
        <h2 data-aos="fade-up" data-aos-offset="300">
            <div class="section-logo section-logo--black">
                <span>why not</span>
            </div>
            CONTENTS
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" data-aos-offset="300">고객의 일상에 즐거운 변화를 만드는 <br> 유플러스의 활동을 소개합니다.</p>
    </header>
    <div>
        <div class="contents__tab">
            <div class="swiper-pagination"></div>
        </div>
        <div class="contents__list">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="contents__content" style="background-image:url('/assets/images/img_contents_1.jpg')">
                            <div>
                                <p>뻔하지 않은 생각으로 일상의 즐거움을 <br> 만들어가는 사람들의 STORY</p>
                                <h3 data-pagination-name="브랜드화보">WHY NOT 브랜드화보 !</h3>
                                <p><a href="https://www.instagram.com/magazine_whynot" target="_blank" onclick="gtag('event','WHY NOT CONTENTS',{'event_category' : '와이낫페이지' ,'event_label' : '브랜드 화보_화보 보러가기'})">화보 보러가기</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="contents__content" style="background-image:url('/assets/images/img_contents_2.jpg')">
                            <div>
                                <p>대한민국 숨겨진 명소를 찾아 <br> 선넘는 즐거움을 제시하다!</p>
                                <h3 data-pagination-name="와이낫크루">와이낫크루</h3>
                                <p><a href="https://www.youtube.com/watch?v=y_XMQBYcCtk&amp;list=PLrpBDj0lFe8gQuLfpR54BARC0g5-YTHCr" target="_blank" onclick="gtag('event','WHY NOT CONTENTS',{'event_category' : '와이낫페이지' ,'event_label' : '와이낫 크루_영상 보러가기'})">영상 보러가기</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="contents__content" style="background-image:url('/assets/images/img_contents_3.jpg')">
                            <div>
                                <p>선 넘는 도전을 응원하는 <br> 본업천재 와이낫크루의 HOT한 신곡!</p>
                                <h3 data-pagination-name="와이낫송">와이낫송</h3>
                                <p><a href="https://youtu.be/CXLuNiVMNlc" target="_blank" onclick="gtag('event','WHY NOT CONTENTS',{'event_category' : '와이낫페이지' ,'event_label' : '와이낫송_영상 보러가기'})">영상 보러가기</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="contents__content" style="background-image:url('/assets/images/img_contents_4.jpg')">
                            <div>
                                <p>유독 ~ 끌리는 <br>유플러스 모델 손석구의 Behind 화보 대공개</p>
                                <h3 data-pagination-name="유독 Behind 화보">유독 Behind 화보</h3>
                                <!--                                        <p><a href="https://udokgallery.lguplus.com" target="_blank" onclick="gtag('event','WHY NOT CONTENTS',{'event_category' : '와이낫페이지' ,'event_label' : '유독 Behind 화보_화보 보러가기'})">화보 보러가기</a></p>-->
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="contents__content" style="background-image:url('/assets/images/img_contents_5.jpg')">
                            <div>
                                <p>유플러스 고객들의 <br> 솔직한 찐소리를 찾아서!</p>
                                <h3 data-pagination-name="캐치유">웹예능 캐치유</h3>
                                <p><a href="https://www.youtube.com/watch?v=gSEWgbrAgfg&amp;list=PLrpBDj0lFe8hKcV6xlVmS2qY0CuP7lsvP" target="_blank" onclick="gtag('event','WHY NOT CONTENTS',{'event_category' : '와이낫페이지' ,'event_label' : '캐치유_영상 보러가기'})">영상 보러가기</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="contents__content" style="background-image:url('/assets/images/img_contents_6.jpg')">
                            <div>
                                <p>나의 도전이 <br> 세상이 자산이 되는</p>
                                <h3 data-pagination-name="도전은행">유플러스 도전은행 !</h3>
                                <p><a href="https://www.youtube.com/watch?v=O02bX3vPXE8" target="_blank" onclick="gtag('event','WHY NOT CONTENTS',{'event_category' : '와이낫페이지' ,'event_label' : '도전은행_영상 보러가기'})">영상 보러가기</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="collaboration" id="collaboration">
    <header>
        <h2 data-aos="fade-up">
            <div class="section-logo section-logo--white">
                <span>why not</span>
            </div>
            COLLABORATION
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">일상의 변화를 가져올 선 넘는 즐거운 콜라보</p>
    </header>
    <ul>
        <li>
            <a href="https://youtu.be/V-Q9SucX1wI" target="_blank" onclick="gtag('event','선 넘는 COLLABORATION',{'event_category' : '와이낫페이지' ,'event_label' : '유플러스 X 떼껄룩'})">
                <h3>유플러스 × 때껄룩</h3>
                <p>일상의 즐거움을 위한 <br> 통신사의 <br> 선 넘는콜라보</p>
            </a>
        </li>
        <li>
            <div>
                <h3>유플러스 × 프릳츠</h3>
                <p>가장 한국적인 <br> 커피 브랜드 프릳츠와 <br> 선 넘는 콜라보</p>
            </div>
        </li>
        <li>
            <a href="https://smartstore.naver.com/holemancrew/products/7464891590" target="_blank" onclick="gtag('event','선 넘는 COLLABORATION',{'event_category' : '와이낫페이지' ,'event_label' : '유플러스 × 모나미'})">
                <h3>유플러스 × 모나미</h3>
                <p>필기구의 대명사 <br> 국민 브랜드 모나미와 <br> 선 넘는 콜라보</p>
            </a>
        </li>
        <li>
            <div>
                <h3>유플러스 × 복순도가</h3>
                <p>일상의 즐거움을 위한 <br> 통신사의 선 넘는콜라보</p>
            </div>
        </li>
        <li>
            <div>
                <h3>유플러스 × 단하</h3>
                <p>전통과 현대를 <br> 넘나드는 한복 브랜드와  <br> 선 넘는 콜라보!</p>
            </div>
        </li>
        <li>
            <a href="https://smartstore.naver.com/holemancrew/products/7284116862" target="_blank" onclick="gtag('event','선 넘는 COLLABORATION',{'event_category' : '와이낫페이지' ,'event_label' : '유플러스 × 곤지암 디퓨저'})">
                <h3>유플러스 × 곤지암 디퓨저</h3>
                <p>자연의 향을 담은 <br> 선 넘는 콜라보!</p>
            </a>
        </li>
    </ul>
</section>
<section class="modal modal-road" id="road-v1">
    <div class="modal__backdrop"></div>
    <div class="modal__dialog">
        <div class="modal__container">
            <div class="modal-road__title">
                <h2>
                    와이낫 크루가 추천하는
                    <span>와이낫 로드 <em>춘천</em></span>
                </h2>
            </div>
            <div class="modal-road__content">
                <div class="modal-road__item">
                    <h3>레고랜드 코리아 리조트</h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_1_item_1.jpg')"></li>
                        <li style="background-image: url('/assets/images/img_modal_1_item_2.jpg')"></li>
                    </ul>
                    <h4><span>춘천 1편</span> 레고랜드</h4>
                    <p><strong>주소지</strong> 강원 춘천시 하중도길 128  레고랜드 코리아 리조트 <br><br>
                        어린이와 가족들을 위한 최고의 LEGO 국내 첫 글로벌 <br> 테마파크
                    </p>
                </div>
                <div class="modal-road__benefit-box">
                    <p><strong>유플러스 멤버십 혜택 <br> <span>레고랜드 코리아 1일 이용권 20% 상시 할인</span></strong><br>
                        주중 20% 주말 10% 할인 본인 포함 <br>
                        동반 4인까지 최대 48,000원 할인

                    </p>
                </div>
                <div class="modal-road__item">
                    <h3>평양 막국수 & 혜정 닭갈비</h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_1_item_3.jpg')">
                            <h4><span>춘천 2편</span> 평양 막국수</h4>
                            <p><strong>주소지</strong> 강원 춘천시 <br> 명주길5번길 13-1</p>
                            <p><strong>인기메뉴</strong> 막국수, 감자전 <br><br>
                                안 먹어보면 후회하는 <br>
                                감칠맛이 좋은 막국수
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_1_item_4.jpg')">
                            <h4><span>춘천 2편</span> 혜정 닭갈비</h4>
                            <p><strong>주소지</strong> 강원 춘천시 금강로 <br> 62번길 11-1</p>
                            <p>
                                안 먹어본 사람은 있어도 한번 <br>
                                만 먹어본 적 없다는 그 맛! <br>
                                착한 가격에 푸짐한 양을 <br>
                                혜정 닭갈비
                            </p>
                            <div class="modal-road__benefit-box">
                                <p><strong>유플러스 멤버십 혜택</strong> <br>
                                    유플러스 멤버십 회원 <br>
                                    1,000원 당 100원 할인 <br>
                                    (최대 2만원 할인)

                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <section class="modal-road__benefit">
                    <h3>유플러스 고객을 위한 선 넘는 <span>춘천 멤버십 혜택</span></h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_1_list_1.jpg')">
                            <h4>레고랜드 코리아</h4>
                            <p><strong><span>1일 이용권 20% 상시 할인</span> <br> *주중 20%,주말 10%할인 <br>  본인포함동반 4인까지</strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_1_list_2.jpg')">
                            <h4>혜정 닭갈비</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_1_list_3.jpg')">
                            <h4>수플레</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_1_list_4.jpg')">
                            <h4>처방전</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_1_list_5.jpg')">
                            <h4>불란서 홍차</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_1_list_6.jpg')">
                            <h4>오가는정과</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                    </ul>
                </section>
                <div class="modal-road__benefit-box modal-road__benefit-box2">
                    <p><strong>멤버십 혜택 이용 방법</strong> <br>
                        1. 와이낫로드 유플러스 멤버십 zone에서 <br> 제휴 매장 확인하기 <br>
                        2. 와이낫로드 제휴 매장 방문하기 <br>
                        3. 결제 시 멤버스앱 > 바코드 제시하고 할인받기

                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal__close">
        <button class="modal__close-button" type="button"><span class="modal__close-text">닫기</span></button>
    </div>
</section>
<section class="modal modal-road" id="road-v2">
    <div class="modal__backdrop"></div>
    <div class="modal__dialog">
        <div class="modal__container">
            <div class="modal-road__title">
                <h2>
                    와이낫 크루가 추천하는
                    <span>와이낫 로드 <em>부산</em></span>
                </h2>
            </div>
            <div class="modal-road__content">
                <div class="modal-road__item">
                    <h3>부산 해운대</h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_2_item_1.jpg')">
                            <h4><span>부산 1편</span> 해운대 해수욕장</h4>
                            <p>
                                주변의 빼어난 자연 경관과 <br>
                                어우러진 전국 제일의 <br>
                                해수욕
                            </p>
                            <p>
                                2020, 2021년의 경우 <br>
                                코로나로 인해 축제가 취소 <br>
                                되었으나 2022년에 다시 <br>
                                개최됨
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_2_item_2.jpg')">
                            <h4><span>부산 1편</span> 투어지</h4>
                            <p><strong>주소지</strong> 부산 해운대구 <br>
                                APEC로 30 벡스코 제2전시장 <br>
                                1층 108호 투어지
                            </p>
                            <p>
                                타는 순간 여행이 되는, <br>
                                좋은 친환경 퍼스널 모빌리티 <br>
                                투어지!
                            </p>
                            <div class="modal-road__benefit-box">
                                <p><strong>유플러스 멤버십 혜택</strong> <br>
                                    유플러스 멤버십 회원 <br>
                                    20% 할인

                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="modal-road__item">
                    <h3>부산 엑스 더 스카이</h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_2_item_3.jpg')"></li>
                        <li style="background-image: url('/assets/images/img_modal_2_item_4.jpg')"></li>
                    </ul>
                    <h4><span>부산 2편</span> 부산 엑스 더 스카이</h4>
                    <p><strong>주소지</strong> 부산 해운대구 달맞이길 30 <br>
                        부산 최고의 랜드마크이자 부산 전경을 <br>
                        한눈에 담을 수 있는 하늘 위의 바다
                    </p>
                </div>
                <div class="modal-road__benefit-box">
                    <p><strong>유플러스 멤버십 혜택</strong> <br>
                        유플러스 멤버십 회원 전망대 입장료 25% 할인 <br>
                        동반 1인까지 현장 할인

                    </p>
                </div>
                <section class="modal-road__benefit">
                    <h3>유플러스 고객을 위한 선 넘는 <span>부산 멤버십 혜택</span></h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_2_list_1.jpg')">
                            <h4>엑스 더 스카이 전망대</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>전망대 입장료 25% 할인</span></strong> <br>
                                (동반 1인까지 현장 할인 가능)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_2_list_2.jpg')">
                            <h4>투어지</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>20% 할인</span></strong></p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_2_list_3.jpg')">
                            <h4>수백진국</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_2_list_4.jpg')">
                            <h4>해운대시장산곰장어</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_2_list_5.jpg')">
                            <h4>마산 이모집</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_2_list_6.jpg')">
                            <h4>바다횟집</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                    </ul>
                </section>
                <div class="modal-road__benefit-box modal-road__benefit-box2">
                    <p><strong>멤버십 혜택 이용 방법</strong> <br>
                        1. 와이낫로드 유플러스 멤버십 zone에서 <br> 제휴 매장 확인하기 <br>
                        2. 와이낫로드 제휴 매장 방문하기 <br>
                        3. 결제 시 멤버스앱 > 바코드 제시하고 할인받기

                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal__close">
        <button class="modal__close-button" type="button"><span class="modal__close-text">닫기</span></button>
    </div>
</section>
<section class="modal modal-road" id="road-v3">
    <div class="modal__backdrop"></div>
    <div class="modal__dialog">
        <div class="modal__container">
            <div class="modal-road__title">
                <h2>
                    와이낫 크루가 추천하는
                    <span>와이낫 로드 <em>인천</em></span>
                </h2>
            </div>
            <div class="modal-road__content">
                <div class="modal-road__item">
                    <h3>개항로 통닭</h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_3_item_1.jpg')"></li>
                    </ul>
                    <h4><span>인천 1편</span> 개항로 통닭</h4>
                    <p><strong>주소지</strong> 인천 중구 참외전로 164</p>
                    <p><strong>인기메뉴</strong> 오리지날 통닭, 치즈 통닭, 이태리 통닭, <br>
                        반반 통닭 등 <br><br>
                        레트로 감성이 물씬 풍기는 세대 구별 없이 어울려 즐기는 <br>
                        전기 구이 통닭집
                    </p>
                </div>
                <div class="modal-road__item">
                    <h3>국제 롤러스케이트장</h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_3_item_2.jpg')"></li>
                    </ul>
                    <h4><span>인천 2편</span> 국제 롤러스케이트장</h4>
                    <p><strong>주소지</strong> 인천 서구 청라에메랄드로 99 <br><br>
                        아이들도 어른들도 노래에 맞춰 롤러타기를 즐길 수 있는 <br>
                        레트로 롤러장

                    </p>
                </div>
                <section class="modal-road__benefit">
                    <h3>유플러스 고객을 위한 선 넘는 <span>인천 멤버십 혜택</span></h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_3_list_1.jpg')">
                            <h4>꽁커피</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_3_list_2.jpg')">
                            <h4>다락</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_3_list_3.jpg')">
                            <h4>서니구락부</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_3_list_4.jpg')">
                            <h4>스푼빌</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)

                            </p>
                        </li>
                    </ul>
                </section>
                <div class="modal-road__benefit-box modal-road__benefit-box2">
                    <p><strong>멤버십 혜택 이용 방법</strong> <br>
                        1. 와이낫로드 유플러스 멤버십 zone에서 <br> 제휴 매장 확인하기 <br>
                        2. 와이낫로드 제휴 매장 방문하기 <br>
                        3. 결제 시 멤버스앱 > 바코드 제시하고 할인받기

                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal__close">
        <button class="modal__close-button" type="button"><span class="modal__close-text">닫기</span></button>
    </div>
</section>
<section class="modal modal-road" id="road-v4">
    <div class="modal__backdrop"></div>
    <div class="modal__dialog">
        <div class="modal__container">
            <div class="modal-road__title">
                <h2>
                    와이낫 크루가 추천하는
                    <span>와이낫 로드 <em>울산</em></span>
                </h2>
            </div>
            <div class="modal-road__content">
                <div class="modal-road__item">
                    <h3>장생포 고래문화마을</h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_4_item_1.jpg')"></li>
                    </ul>
                    <h4><span>울산 1편</span> 장생포 고래문화마을</h4>
                    <p><strong>주소지</strong> 울산 남구 장생포고래로 244</p>
                    <p>
                        장생포 고래잡이어촌의 모습을 그대로 재현했으며 고래 광장, <br>
                        장생포 옛마을, 선사시대 고래마당, 고래 조각 정원, <br>
                        수생 식물원 등 다양한 테마와 이야기를 담은 <br>
                        공원을 둘러볼 수 있는 공간
                    </p>
                </div>
                <div class="modal-road__item">
                    <h3>언양불고기한마당한우촌 & 복순도가</h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_4_item_2.jpg')">
                            <h4><span>울산 2편</span> 언양불고기한마당한우촌</h4>
                            <p><strong>주소지</strong> 울산 울주군 언양읍 <br> 웃방천5길 10</p>
                            <p><strong>인기메뉴</strong> 갈비살 육회, <br>
                                언양원조 참숯불고기 <br><br>
                                두말이 필요 없는 울산 최고의 <br>
                                언양 불고기를 즐길 수 있는 <br>
                                한우 암소 전문점
                            </p>
                            <div class="modal-road__benefit-box">
                                <p><strong>유플러스 멤버십 혜택</strong> <br>
                                    유플러스 멤버십 회원 <br>
                                    1,000원 당 100원 할인 <br>
                                    (최대 2만원 할인)

                                </p>
                            </div>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_4_item_3.jpg')">
                            <h4><span>울산 2편</span> 복순도가</h4>
                            <p><strong>주소지</strong> 울산 울주군 상북면 <br> 향산동길 48</p>
                            <p>
                                울산을 대표하는 천연 탄산 <br>
                                손막걸리 양조장, 복순도가

                            </p>
                        </li>
                    </ul>
                </div>
                <section class="modal-road__benefit">
                    <h3>유플러스 고객을 위한 선 넘는 <span>울산 멤버십 혜택</span></h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_4_list_1.jpg')">
                            <h4>강변수구레국밥</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_4_list_2.jpg')">
                            <h4>소소원</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_4_list_3.jpg')">
                            <h4>수산물직판장태화점</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_4_list_4.jpg')">
                            <h4>이조참숯불갈비</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_4_list_5.jpg')">
                            <h4>할머니의 순두부</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_4_list_6.jpg')">
                            <h4>한마당한우촌</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                    </ul>
                </section>
                <div class="modal-road__benefit-box modal-road__benefit-box2">
                    <p><strong>멤버십 혜택 이용 방법</strong> <br>
                        1. 와이낫로드 유플러스 멤버십 zone에서 <br> 제휴 매장 확인하기 <br>
                        2. 와이낫로드 제휴 매장 방문하기 <br>
                        3. 결제 시 멤버스앱 > 바코드 제시하고 할인받기

                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal__close">
        <button class="modal__close-button" type="button"><span class="modal__close-text">닫기</span></button>
    </div>
</section>
<section class="modal modal-road" id="road-v5">
    <div class="modal__backdrop"></div>
    <div class="modal__dialog">
        <div class="modal__container">
            <div class="modal-road__title">
                <h2>
                    와이낫 크루가 추천하는
                    <span>와이낫 로드 <em>서울</em></span>
                </h2>
            </div>
            <div class="modal-road__content">
                <div class="modal-road__item">
                    <h3>LG 유플러스 마곡 사옥</h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_5_item_1.jpg')">
                            <h4>LG 유플러스 마곡 사옥</h4>
                            <p>
                                <strong>주소지</strong> 서울 강서구 마곡중앙8로 71
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_5_item_2.jpg')">
                            <h4>LG 아트센터</h4>
                            <p>
                                <strong>주소지</strong> 서울 강서구 마곡중앙로 136 LG아트센터
                            </p>
                        </li>
                    </ul>
                </div>
                <section class="modal-road__benefit">
                    <h3>유플러스 고객을 위한 선 넘는 <span>서울 멤버십 혜택</span></h3>
                    <ul>
                        <li style="background-image: url('/assets/images/img_modal_5_list_1.jpg')">
                            <h4>공병득 쉐프</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_5_list_2.jpg')">
                            <h4>보나세라 오가닉</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)
                            </p>
                        </li>
                        <li style="background-image: url('/assets/images/img_modal_5_list_3.jpg')">
                            <h4>일빠네</h4>
                            <p><strong>LG U+ 멤버십 회원 결제 시 <br> <span>1,000원당 100원할인</span></strong> <br>
                                (최대 2만원까지 할인)

                            </p>
                        </li>
                    </ul>
                </section>
                <div class="modal-road__benefit-box modal-road__benefit-box2">
                    <p><strong>멤버십 혜택 이용 방법</strong> <br>
                        1. 와이낫로드 유플러스 멤버십 zone에서 <br> 제휴 매장 확인하기 <br>
                        2. 와이낫로드 제휴 매장 방문하기 <br>
                        3. 결제 시 멤버스앱 > 바코드 제시하고 할인받기
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal__close">
        <button class="modal__close-button" type="button"><span class="modal__close-text">닫기</span></button>
    </div>
</section>
<section class="modal modal-footer-privacy" id="privacy-modal">
    <div class="modal__backdrop"></div>
    <div class="modal__dialog">
        <div class="modal__container modal-footer-privacy__container">
            <div class="modal-footer-privacy__title">
                <h2>
                    개인정보 처리방침
                </h2>
            </div>
            <div class="modal-footer-privacy__content">
                <section>
                    <section>
                        <div>
                            <p>㈜엘지유플러스 와이낫 웹사이트(https://whynot.lguplus.com/, 이하 “회사”)는 이용자의 개인 정보를 보호하기 위하여 「정보통신망 이용 촉진 및 정보보호 등에 관한 법률」 및 「개인정보보호법」 등 관련 법령상의 개인정보 보호 규정을 준수하고 있으며 다음과 같은 개인정보 처리 방침을 가지고 있습니다.</p>
                            <p>&nbsp;</p>
                            <p>회사는 개인정보 처리방침을 통하여 이용자의 개인정보가 어떠한 목적과 방식으로 수집, 이용되고 있으며, 이용자의 개인정보 보호를 위해 회사가 어떠한 조치를 취하고 있는지 알려드립니다.</p>
                            <p>&nbsp;</p>
                            <p>본 개인정보 처리 방침은 관련 법의 개정이나 회사의 정책에 따라 변경될 수 있으며, 회사는 웹사이트를 통하여 이를 알려드리오니, 웹사이트 이용 시에 수시로 확인하여 주시기 바랍니다.</p>
                        </div>
                        <div>
                            <p>
                                <strong>1. 처리하는 개인정보의 항목</strong>
                            </p>
                            <p>회사는 웹사이트에서 운영되는 이벤트 참여 시 이용자로부터 개인정보를 수집하고 있습니다.</p>
                            <p>1.수집항목</p>
                            <p>와이낫 부스터스 캠페인 참여자 모집 이벤트</p>
                            <div class="table-wrap">
                                <table class="table">
                                    <colgroup>
                                        <col width="50%">
                                        <col width="50%">
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>상세내용</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>필수항목</td>
                                        <td>이름, 휴대전화 번호, SNS계정</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>2.개인정보 수집 시 필수 항목의 수집·이용에 대한 동의를 거부하실 수 있으며, 다만 동의를 거부하실 경우 서비스 이용이 제한될 수 있습니다. 선택 항목의 수집·이용 동의를 거부하실 경우에는 서비스 이용은 제한되지 않습니다.</p>
                            <p>&nbsp;</p>
                            <p>3.수집방법</p>
                            <p>- 웹사이트에서 운영되는 이벤트 참여를 통한 수집</p>
                        </div>
                        <div>
                            <p>
                                <strong>2. 개인정보의 처리 목적</strong>
                            </p>
                            <p>회사는 수집한 개인정보를 이벤트 참여 목적을 위해 활용합니다.</p>
                            <div class="table-wrap">
                                <table class="table">
                                    <colgroup>
                                        <col width="50%">
                                        <col width="50%">
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th>목적</th>
                                        <th>상세내용</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>와이낫 부스터스 캠페인</td>
                                        <td>
                                            본인 확인, 선발결과 고지, <br>
                                            선발 후 활동안내
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <p>
                                <strong>3. 개인정보의 보유 및 이용 기간</strong>
                            </p>
                            <p>회사는 원칙적으로 수집한 개인정보를 이벤트 종료일로부터 3개월까지 보유 및 이용하며 동의 받은 보유 기간이 도래하면 해당 정보를 지체 없이 파기합니다.</p>
                            <p>&nbsp;</p>
                            <p>다만 상법, 국세기본법, 전자상거래 등에서의 소비자 보호에 관한 법률 등 관련 법령의 규정에 의하여 다음과 같이 거래 관련 권리 의무 관계의 확인 등을 이유로 일정기간 보유하여야 할 필요가 있을 경우에는 일정기간 보유합니다. 이 경우 회사는 보관하는 개인정보를 그 보관의 목적으로만 이용하며 보존 기간 및 보존 항목은 아래와 같습니다.</p>
                            <p>&nbsp;</p>
                            <div>
                                <p>- 계약 또는 청약철회 등에 관한 기록 : 5 년(전자상거래 등에서의 소비자보호에 관한 법률)</p>
                                <p>- 대금 결제 및 재화 등의 공급에 관한 기록 : 5년(전자상거래 등에서의 소비자보호에 관한 법률)</p>
                                <p>- 소비자 불만 또는 분쟁 처리에 관한 기록 : 3년(전자상거래 등에서의 소비자보호에 관한 법률)</p>
                                <p>- 납세 증거에 관한 기록 : 5년(국세 기본법)</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                <strong>4. 개인정보 파기에 관한 사항</strong>
                            </p>
                            <p>1. 파기 절차</p>
                            <p>서비스 이용을 위해 입력하신 정보는 목적이 달성된 후 기타 관련 법령에 의한 개인정보보관 사유에 해당하지 않는 한 지체 없이 파기됩니다.</p>
                            <p>&nbsp;</p>
                            <p>2. 파기 방법</p>
                            <p>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하고, 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>
                        </div>
                        <div>
                            <p>
                                <strong>5. 개인정보 제3자 제공에 관한 사항</strong>
                            </p>
                            <p>회사는 이용자의 동의가 있거나 관련 법령의 규정에 의한 경우를 제외하고는 어떠한 경우에도 "1. 처리하는 개인정보의 항목", "2. 개인정보의 처리 목적"에서 고지한 범위를 넘어 이용자의 개인정보를 이용하거나 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
                            <p>&nbsp;</p>
                            <p>가. 이용자가 사전에 동의한 경우</p>
                            <p>나. 관련 법령의 규정에 의하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                            <p>다. 서비스 제공에 따른 요금정산을 위해 필요한 경우</p>
                            <p>라. 계약 이행을 위해 필요한 경우</p>
                            <p>마. 타인에게 정신적, 물질적 피해를 줌으로써 그에 대한 법적 조치를 취하기 위해 이용자의 정보를 공개해야 한다고 판단되는 충분한 근거가 있는 경우</p>
                            <p>바. 통계 작성, 마케팅 분석 또는 시장조사를 위해 필요한 경우로 특정 개인을 식별할 수 없는 형태로 가공하여 외부 기관 또는 단체 등에 제공하는 경우</p>
                            <p>사. 서비스의 제공에 관한 계약의 이행을 위하여 필요한 개인정보로써 경제적/기술적인 사유로 통상의 동의를 받는 것이 현저히 곤란한 경우</p>
                        </div>
                        <div>
                            <p>
                                <strong>6. 개인정보의 위탁에 관한 사항</strong>
                            </p>
                            <p>회사는 서비스 이행을 위해 개인정보 처리업무를 아래와 같이 외부 전문 업체에 위탁하여 운영하고 있습니다.</p>
                            <div class="table-wrap">
                                <table class="table">
                                    <colgroup>
                                        <col width="50%">
                                        <col width="50%">
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th>위탁업체</th>
                                        <th>위탁 업무 내용</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>㈜에이치에스애드</td>
                                        <td>부스터스와 관련된 업무</td>
                                    </tr>
                                    <tr>
                                        <td>㈜프리비알</td>
                                        <td>부스터스 운영 관련 안내</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <p>
                                <strong>7. 개인정보 자동 수집의 목적 및 거부에 관한 사항</strong>
                            </p>
                            <p>회사는 이용자의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)', 'ActiveX' 등 개인정보를 자동으로 수집하는 장치(이하 “쿠키 등”)를 설치 운용합니다. 쿠키란 LG유플러스 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터 하드디스크에 저장됩니다.</p>
                            <p>&nbsp;</p>
                            <p>가. 쿠키등 사용 목적</p>
                            <p>① 이용자의 접속빈도 또는 머문 시간 등을 분석하여 이용자의 취향과 관심분야를 파악하여 서비스 개선에 활용</p>
                            <p>② 웹사이트 방문 품목들에 대한 정보와 관심 있게 둘러본 품목들에 대한 자취를 추적하여 다음 번 웹사이트 방문 때 제품 정보를 제공</p>
                            <p>나. 쿠키 설정 거부 방법</p>
                            <p>① 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 쿠키 설정을 거부하는 방법으로는 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</p>
                            <p>② 설정방법의 예시(웹 브라우저의 경우) : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보에서 변경. 단, 이용자께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</p>
                            <p>③ ActiveX 설정 거부 방법</p>
                            <p>A. 이용자는 ActiveX 설치에 대한 선택권을 가지고 있습니다. ActiveX 설정을 거부하는 방법은 다음과 같습니다.</p>
                            <div>
                                <p>1) 웹 브라우저 상단의 도구 > 인터넷 옵션 > 보안 탭 클릭하여 하단의 사용자 지정수준 클릭 > ActiveX 컨트롤 및 플러그 인 항목에서 아래와 같이 체크함</p>
                                <p>- 바이너리 및 스크립트 동작 => 사용안함</p>
                                <p>- 서명 된 ActiveX 컨트롤 다운로드 => 사용안함</p>
                                <p>- 스크립팅하기 안전하지 않은 것으로 표시된 ActiveX 컨트롤 초기화 및 스크립팅 => 사용안함</p>
                                <p>- 스크립팅하기 안전한 것으로 표시된 ActiveX 컨트롤 스크립트 => 사용안함</p>
                                <p>- ActiveX 컨트롤 및 플러그인 실행 => 사용안함</p>
                                <p>- ActiveX 컨트롤을 자동으로 사용자에게 확인 => 사용안함</p>
                                <p>2) 새 웹 브라우저 창을 여신 후, 다시 접속해 주시기 바랍니다. 접속이 원활하게 되지 않을 경우에는 바이러스 및 악성 코드 제거 프로그램으로 바이러스와 악성코드를 제거 후에 다시 시도해 주시기 바랍니다.</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                <strong>8. 개인정보의 안전성 확보조치에 관한 사항</strong>
                            <p>회사는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적, 관리적 대책을 마련하고 있습니다.</p>
                            </p>
                            <p>&nbsp;</p>
                            <p>1) 기술적 보호조치</p>
                            <p>① 이용자의 개인정보는 비밀번호에 의해 보호되며 암호 알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL)를 채택하고 있습니다.</p>
                            <p>② 해킹 등 외부 침입에 대비하여 각 서버마다 접근제어솔루션 등을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 기술적 장치를 갖추어 개인정보 보안에 만전을 기하고 있습니다.</p>
                            <p>③ 패스워드 등 본인임을 인증하는 정보에 대해서는 복호화되지 아니하도록 일방향 암호화하여 저장합니다.</p>
                            <p>④ 개인정보 처리 시스템에서 개인정보의 출력 시(인쇄, 화면표시, 파일생성 등) 용도를 특정하며, 용도에 따라 출력 항목을 최소화합니다.</p>
                            <p>⑤ 개인정보 처리자가 개인 정보를 종이로 인쇄하거나, 디스켓, 콤팩트디스크 등 이동 가능한 저장매체에 복사할 경우 개인정보보호 책임자의 사전 승인을 받도록 조치합니다. 출력, 복사물로부터 다시 출력 또는 복사하는 경우도 또한 같습니다.</p>
                            <p>2) 관리적 보호조치</p>
                            <p>① 이용자의 개인정보에 대한 접근 권한을 최소한의 인원으로 제한하고 있습니다.</p>
                            <p>② 전보 또는 퇴직 등 인사 이동이 발생하여 개인정보처리자가 변경되었을 경우 지체 없이 개인 정보처리시스템의 접근 권한을 변경 또는 말소합니다. 이 경우 권한 부여, 변경 또는 말소에 대한 내역을 기록하고, 그 기록을 최소 5년간 보관합니다.</p>
                            <p>③ 처리중인 개인정보가 인터넷 홈페이지, P2P, 공유설정 등을 통하여 권한이 없는 자에게 공개되지 않도록 개인정보처리 시스템 및 개인정보처리자의 PC를 설정합니다.</p>
                            <p>④ 개인정보 수집, 활용 및 파기 시 그에 대한 법률이 권고하는 기준(정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 개인정보보호법 등 관련 법령)에 따라 수집한 근거를 남기도록 하고 있으며, 이와 관련하여 내부 정책과 프로세스를 규정하고 교육을 실시합니다.</p>
                            <p>⑤ 입사시 전 직원의 보안서약서를 통하여 사람에 의한 정보유출을 사전에 방지하고 개인정보보호정책에 대한 이행사항 및 직원의 준수여부를 감시하기 위한 내부절차를 마련하고 있습니다.</p>
                            <p>⑥ 개인정보 관련 처리자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이뤄지고 있으며 입사 및 퇴사 후 개인정보 사고에 대한 책임을 명확히 하고 있습니다.</p>
                            <p>⑦ 개인정보와 일반 데이터를 혼합하여 보관하지 않고 별도의 서버를 통해 분리하여 보관하고 있습니다.</p>
                            <p>⑧ 전산실 및 자료 보관실 등을 특별 보호구역으로 설정하여 출입을 통제하고 있습니다.</p>
                            <p>⑨ 당사는 이용자 개인의 실수나 기본적인 인터넷의 위험성 때문에 일어나는 일들에 대해 책임을 지지 않습니다.</p>
                            <p>⑩ 그 외 내부 관리자의 실수나 기술관리 상의 사고로 인해 개인정보의 상실, 유출, 변조, 훼손이 유발될 경우 당사는 즉각 이용자께 사실을 알리고 적절한 대책과 보상을 강구할 것입니다.</p>
                        </div>
                        <div>
                            <p>
                                <strong>
                                    9. 정보주체의 권리, 의무 및 그 행사방법에 관한 사항
                                </strong>
                            </p>
                            <p>이용자 및 법정대리인의 개인정보를 최신의 상태로 정확하게 입력하여 불의의 사고를 예방해 주시기 바랍니다. 이용자 및 법정대리인이 입력한 부정확한 정보로 인해 발생하는 사고의 책임은 이용자 및 법정대리인 자신에게 있으며 타인 정보의 도용 등 허위 정보를 입력할 경우 서비스 이용이 제한될 수 있습니다. 이용자 및 법정대리인은 개인정보를 보호받을 권리와 함께 스스로를 보호하고 타인의 정보를 침해하지 않을 의무도 가지고 있습니다. 이용자 및 법정대리인의 개인 정보가 유출되지 않도록 조심하시고 게시물을 포함한 타인의 개인정보를 훼손하지 않도록 유의해 주십시오. 만약 이 같은 책임을 다하지 못하고 타인의 정보 및 존엄성을 훼손할 시에는 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』, 『개인정보보호법』 등에 의해 처벌받을 수 있습니다.</p>
                            <p>1) 개인정보 열람, 정정, 삭제 요구의 권리:</p>
                            <p>이용자 및 법정대리인은 언제든지 등록되어 있는 자신의 개인정보를 열람하거나 정정, 삭제하실 수 있습니다. 개인정보 열람 및 정정, 삭제를 하고자 할 경우에는 개인정보보호책임자 및 담당자에게 서면, 전화 또는 전자우편주소로 연락하시면 지체 없이 조치하겠습니다.</p>
                            <p>2) 개인정보 수집, 이용, 제공에 대한 동의 철회의 권리:</p>
                            <p>이용자 및 법정대리인은 서비스 이용을 위해 입력하신 개인정보의 수집, 이용, 제공, 저장에 대해 동의하신 내용을 철회하실 수 있습니다.</p>
                            <p>동의 철회는 개인정보보호 담당자에게 서면, 전화 또는 전자우편주소로 연락하시면 본인 확인 절차 후 개인정보의 삭제 등 필요한 조치를 하겠습니다.</p>
                        </div>
                        <div>
                            <p>
                                <strong>10. 개인정보의 열람 청구를 접수, 처리하는 부서</strong>
                            </p>
                            <p>개인정보 관련한 민원처리는 이용자의 개인정보를 보호하고 개인정보와 관련한 의문사항을 처리하기 위하여 다음과 같이 민원처리 콜센터를 운영하고 있습니다.</p>
                            <p>&nbsp;</p>
                            <p>① 전자우편 : securitypol@lguplus.co.kr</p>
                            <p>② 전화번호 : 1544-0010,101,114(이동전화)</p>
                            <p>③ 등기우편 : 서울특별시 용산구 한강대로 32 ㈜LG유플러스 빌딩</p>
                            <p>&nbsp;</p>
                            <p>또한, 기타 개인정보에 관한 상담이 필요한 경우에는 개인정보침해 신고센터, 개인정보분쟁조정위원회, 대검찰청 사이버수사과, 경찰청 사이버안전국 등으로 문의하실 수 있습니다.</p>
                            <p>1) 개인정보침해신고센터</p>
                            <p>- 전화 : (국번없이) 118</p>
                            <p>- URL : http://privacy.kisa.or.kr</p>
                            <p>2) 개인정보분쟁조정위원회</p>
                            <p>- 전화 : 1833-6972</p>
                            <p>- URL : http://www.kopico.go.kr</p>
                            <p>3) 대검찰청 사이버수사과</p>
                            <p>- 전화 : (국번없이) 1301</p>
                            <p>- URL : http://www.spo.go.kr</p>
                            <p>4) 경찰청 사이버안전국</p>
                            <p>- 전화 : (국번없이) 182</p>
                            <p>- URL : http://cyberbureau.police.go.kr</p>
                        </div>
                        <div>
                            <p>
                                <strong>11. 개인정보보호 책임자</strong>
                            </p>
                            <p>회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호 책임자를 두고 있습니다.</p>
                            <p>- 개인정보보호 책임자 : (운영사 담당자 이름 기재 예정)</p>
                            <p>- 이메일 주소 : (운영사 담당자 이름 기재 예정)</p>
                        </div>
                        <div>
                            <p>
                                <strong>12. 개인정보 처리방침의 변경에 관한 사항</strong>
                            </p>
                            <p>이 개인정보처리방침은 법령·정책 또는 보안 기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는 아래와 같은 방법으로 사전 공지하도록 하겠습니다.</p>
                            <p>&nbsp;</p>
                            <p>- 인터넷 홈페이지 첫 화면 공지 사항 란 또는 별도의 창을 통하여 수정내용 공지</p>
                            <p>시행일자 2023년 4월 17일</p>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </div>
    <div class="modal__close">
        <button class="modal__close-button" type="button"><span class="modal__close-text">닫기</span></button>
    </div>
</section>
<footer class="footer">
    <div class="footer__wrap">
        <h1>(주)엘지유플러스</h1>
        <div>
            <p><a href="https://www.lguplus.com/" target="_blank" onclick="gtag('event','Footer',{'event_category' : '와이낫페이지' ,'event_label' : 'LG 유플러스 홈페이지 가기'})">LG 유플러스 홈페이지 가기</a></p>
            <p><a href="#" class="footer__privacy">개인정보 처리방침</a></p>
        </div>
        <div>
            <address>서울특별시 용산구 한강대로 32</address>
        </div>
        <div>
            <div>
                <p>대표이사 : 황현식</p>
                <p>고객센터 : 101(무료)</p>
            </div>
            <p>사업자등록번호 : 220-81-39938</p>
            <p>통신판매신고 제 2015-서울용산-00481호<a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208139938" target="_blank">사업자 정보 확인</a></p>
        </div>
        <p>Copyright © 2022 LG Uplus Corp. All Rights Reserved.</p>
    </div>
</footer>

<iframe id="kcp_cert" name="kcp_cert" width="100%" height="700" frameborder="0" scrolling="no" style="display:none"></iframe>
</body>
</html>