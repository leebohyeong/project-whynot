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




};

document.addEventListener('DOMContentLoaded', app);