import Swiper, {Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import AOS from 'aos';
import sal from 'sal.js'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {findOne, find, getOffset, on} from '../helper';
import Tab from '../Tab';
import Modal from "../Modal";

gsap.registerPlugin(ScrollTrigger);

const app = () => {
    AOS.init({
        once: true
    });

    // ScrollSpy
    (() => {
        const header = findOne('.header');
        const headerHeight = header.clientHeight;
        const links = find('.header__link', header);
        const sections = links.map(link => findOne(link.getAttribute('href')));
        const sectionsStart = [];
        const getSectionsStart = () => sections.forEach((section, index) => sectionsStart[index] = ~~(getOffset(section).top - headerHeight)+5);
        const toggleLink = () => {
            const scrollY = window.scrollY;
            let currentIndex = sectionsStart.length - 1;

            while (currentIndex) {
                if (scrollY >= sectionsStart[currentIndex]) break;

                currentIndex--;
            }

            links.forEach((link, index) => {
                link.classList[index === currentIndex ? 'add' : 'remove']('header__link--active');
            });
        };
        const moveSection = (index) => {
            window.scroll({
                top: sectionsStart[index],
                behavior: 'smooth'
            });
        };

        getSectionsStart();

        links.forEach((link, index) => {
            on(link, 'click', (event) => {
                event.preventDefault();
                moveSection(index);
                toggleLink();
            });
        });

        on(window, 'load', getSectionsStart);
        on(window, 'resize', getSectionsStart);
        on(window, 'scroll', toggleLink);
    })();

    // Brand Film
    (() => {
        const brandFilm = findOne('.brand-film');
        const tab = new Tab(findOne('.tab', brandFilm));
        tab.menus[0].click();

        const brandFilmCarousel = new Swiper('.brand-film .swiper', {
            slidesPerView: 'auto',
            spaceBetween: 50,
            centeredSlides: true,
            observer: true,
            observeParents: true,
            allowTouchMove: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

    })();

    // WHY NOT ROAD
    (() => {
        // const iframes = find('.showroom-apps__content-swiper iframe');
        // //console.log(iframes)
        // let iframeSrc = [];
        // iframes.forEach((iframe) => {
        //     iframeSrc.push(iframe.src);
        // });

        const roadCarousel = new Swiper('.road .swiper', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            allowTouchMove: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            on : {

            }

        });


        // const roadCarousel = new Swiper('.road .swiper', {
        //     loop: true,
        //     slidesPerView: 'auto',
        //     centeredSlides: true,
        //     allowTouchMove: false,
        //     navigation: {
        //         nextEl: ".swiper-button-next",
        //         prevEl: ".swiper-button-prev",
        //     },
        // });


        (() => {
            const modal = new Modal();
            const triggers = find('.road__link');
            const getId = trigger => trigger.getAttribute('href');
            const contents = triggers.reduce((contents, trigger) => {
                const id = getId(trigger);
                const content = findOne(id);

                contents[id] = content;

                return contents;
            }, {});

            triggers.forEach((trigger) => {
                on(trigger, 'click', (event) => {
                    event.preventDefault();

                    const id = getId(trigger);
                    const content = contents[id];

                    modal.open(content);
                });
            });

            //triggers[4].click();
        })();

    })();

    // WHY NOT CONTENTS
    (() => {
        const contents = findOne('.contents');
        const tab = new Tab(findOne('.tab', contents));
        tab.menus[0].click();
    })();

    // BOOST US
    (() => {
        const boostUs = findOne('.boost-us');
        const tab = new Tab(findOne('.tab', boostUs));
        const modal = new Modal();
        const triggers = find('a', boostUs);
        const getId = trigger => trigger.getAttribute('href');
        const contents = triggers.reduce((contents, trigger) => {
            const id = getId(trigger);
            const content = findOne(id);

            contents[id] = content;

            return contents;
        }, {});

        triggers.forEach((trigger) => {
            on(trigger, 'click', (event) => {
                event.preventDefault();

                const id = getId(trigger);
                const content = contents[id];

                modal.open(content);
            });
        });

        tab.menus[0].click();

        const boostUsModal = findOne('#boost-us-v2');
        const form = findOne('.register-form', boostUsModal);
        const formCertNo = findOne('[name="cert_no"]', form);
        const formHphone = findOne('[name="hphone"]', form);
        const formChannel = find('[name="channel"]', form);
        const formUrl = findOne('[name="url"]', form);
        const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        const formConcept = findOne('[name="concept"]', form);
        const formReason = findOne('[name="reason"]', form);
        const formAgree1 = findOne('[name="agree1"]', form);
        const formAgree2 = findOne('[name="agree2"]', form);

        const isValid = () => {
            if(formCertNo.value == "" || formHphone.value == "") {
                alert('본인인증을 진행해 주세요.');
                formHphone.focus();
                return false;
            };

            if (formChannel.every(input => !input.checked)) {
                alert('활동채널을 체크해 주세요.');
                formChannel[0].focus();
                return false;
            }

            if (!formUrl.value.trim()) {
                alert('URL을 입력해 주세요.');
                formUrl.focus();
                return false;
            }

            if(!urlRegex.test(formUrl.value)) {
                alert('URL을 정확히 입력해 주세요.');
                formUrl.focus();
                return false;
            };

            if (!formConcept.value.trim()) {
                alert('채널컨셉을 입력해 주세요.');
                formConcept.focus();
                return false;
            }

            if(!formReason.value.trim()) {
                alert('지원동기를 입력해 주세요.');
                formReason.focus();
                return false;
            };

            if (!formAgree1.checked) {
                alert('개인정보 수집 및 활용 동의를 체크해 주세요.');
                formAgree1.focus();
                return false;
            }

            if (!formAgree2.checked) {
                alert('지원/참여자 유의사항을 체크해 주세요.');
                formAgree1.focus();
                return false;
            }

            return true;
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (isValid()) {
                const formData = new FormData(form);

                fetch(form.action, {
                    method: form.method,
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.result == false){
                            alert(data.message);
                        }else{
                            alert(data.message);
                            location.reload();
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });

    })();

    //footer 개인정보 처리 방침
    (() => {
        const footer = findOne('footer');
        const privacy = findOne('.footer__privacy', footer);
        const privacyModal = findOne('.modal-footer-privacy');
        const modal = new Modal();


        privacy.addEventListener('click', (event) => {
            event.preventDefault();

            modal.open(privacyModal);
        })
    })();

};

document.addEventListener('DOMContentLoaded', app);