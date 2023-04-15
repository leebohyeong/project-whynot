import Swiper, {Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import AOS from 'aos';
import sal from 'sal.js'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {findOne, find, getOffset, on} from '../helper';
import Tab from '../Tab';
import Modal from "../Modal";
import * as events from "events";

gsap.registerPlugin(ScrollTrigger);

const app = () => {
    AOS.init({
        once: true
    });

    //header
    (() => {
        const siteHeader  = findOne('header');
        const headerHeight = siteHeader.clientHeight;
        const siteMenu = findOne('.header-menu__button', siteHeader);
        const siteMenuItems = find('.header-menu__link', siteHeader);
        const sections = siteMenuItems.map(link => findOne(link.getAttribute('href')));
        const sectionsStart = [];
        const getSectionsStart = () => sections.forEach((section, index) => sectionsStart[index] = ~~(getOffset(section).top - headerHeight)+1);

        const moveSection = (index) => {
            window.scroll({
                top: sectionsStart[index],
                behavior: 'smooth'
            });
        };

        //header fixed
        const changeHeader = () => {
            siteHeader.classList[window.pageYOffset >= siteHeader.offsetHeight ? 'add' : 'remove']('fixed');
        };
        on(window, 'scroll', changeHeader);

        //메뉴 open,close
        siteMenu.addEventListener('click', (event) => {
            event.preventDefault();

            if(siteHeader.classList.contains('header-menu--open')) {
                siteHeader.classList.remove('header-menu--open');
                siteHeader.classList.remove('fixed');
            } else {
                siteHeader.classList.add('header-menu--open');
                siteHeader.classList.add('fixed');
            }
        });

        getSectionsStart();

        siteMenuItems.forEach((siteMenuItem,index) => {
            siteMenuItem.addEventListener("click", (event) => {
                event.preventDefault();
                siteHeader.classList.remove('header-menu--open');
                moveSection(index);
            })
        })

        on(window, 'load', getSectionsStart);
        on(window, 'resize', getSectionsStart);

    })();

    // Brand Film
    (() => {
        const brandFilm = findOne('.brand-film');
        const tab = new Tab(findOne('.tab', brandFilm));
        tab.menus[0].click();

        const brandFilmCarousel = new Swiper('.brand-film .swiper', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            observer: true,
            observeParents: true,
        });

    })();

    // WHY NOT ROAD
    (() => {
        const road = findOne('.road');
        const carouselWrap = findOne('.road__carousel_1 .swiper', road);
        const carouselWrap2 = findOne('.road__carousel_2 .swiper', road);
        const carouselPagination = findOne('.swiper-pagination', road);
        const carouselPaginationMenus = find('p', carouselWrap).map(menu => menu.innerText);

        const roadCarousel = new Swiper(carouselWrap, {
            loop:true,
            slidesPerView: 'auto',
            loopAdditionalSlides: '5',
            loopedSlides: '5',
            spaceBetween: 10,

            pagination: {
                el: carouselPagination,
                clickable: true,
                renderBullet(index, className) {
                    return `<div class="${className}">${carouselPaginationMenus[index]}</div>`;
                },
            },
        });

        const roadCarousel2 = new Swiper(carouselWrap2, {
            // loop: true,
            slidesPerView: "auto",
            centeredSlides: true,
            allowTouchMove: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


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

            // triggers[3].click();
        })();

    })();

    // WHY NOT CONTENTS
    (() => {
        const contents = findOne('.contents');
        const carouselWrap = findOne('.swiper', contents);
        const carouselPagination = findOne('.swiper-pagination', contents);
        const carouselPaginationMenus = find('[data-pagination-name]', contents).map(menu => menu.dataset.paginationName);

        const contentCarousel = new Swiper(carouselWrap, {
            loop:true,
            slidesPerView: 'auto',
            loopAdditionalSlides: '5',
            spaceBetween: 10,

            pagination: {
                el: carouselPagination,
                clickable: true,
                renderBullet(index, className) {
                    return `<div class="${className}">${carouselPaginationMenus[index]}</div>`;
                },
            },
        });


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

                form.reset();
                modal.open(content);
            });
        });

        tab.menus[0].click();

        const formHphone = findOne('[name="form_auth"] [type="submit"]', boostUsModal);

        const boostUsModal = findOne('#boost-us-v2');
        const form = findOne('.register-form', boostUsModal);
        const formCertNo = findOne('[name="cert_no"]', form);
        const formChannel = find('[name="channel"]', form);
        const formUrl = findOne('[name="url"]', form);
        const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        const formConcept = findOne('[name="concept"]', form);
        const formReason = findOne('[name="reason"]', form);
        const formAgree1 = findOne('[name="agree1"]', form);
        const formAgree2 = findOne('[name="agree2"]', form);

        const isValid = () => {
            if (!formCertNo.value.trim()) {
                alert('본인인증을 진행해 주세요.');
                formHphone.focus();
                return false;
            }

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
                            // location.reload();
                            location.href='/m/#boost-us';
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