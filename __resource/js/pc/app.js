import AOS from 'aos';
import sal from 'sal.js'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {findOne, find, getOffset, on} from '../helper';
import Tab from '../Tab';

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
        const getSectionsStart = () => sections.forEach((section, index) => sectionsStart[index] = ~~(getOffset(section).top - headerHeight));
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

    // WHY NOT?
    (() => {
        const whyNot = findOne('.why-not');
        const wrap = findOne('.why-not__wrap', whyNot);
        const info = {
            height: 0,
            start: 0,
            end: 0,
            scenesStart: [],
            prevScene: -1,
            currentScene: 0,
            isChangeScene: false
        };
        const reset = () => {
            const height = whyNot.clientHeight;
            const start = getOffset(whyNot).top;
            const end = start + height;
            const scenesStart = (() => {
                const sectionHeight = ~~(height / 7);
                const starts = Array(7).fill(0).map((_, index) => {
                    return start + index * sectionHeight;
                });
                return starts;
            })();

            Object.assign(info, {
                height,
                start,
                end,
                scenesStart
            });
        };
        const isIn = () => {
            const scrollY = window.scrollY;
            const {start, end} = info;

            return scrollY >= start && scrollY <= end;
        };
        const getScene = () => {
            const scrollY = window.scrollY;
            const {scenesStart, currentScene} = info;
            let current = scenesStart.length - 1;

            while (current) {
                if (scrollY >= scenesStart[current]) {
                    break;
                }

                current--;
            }

            if (currentScene !== current) {
                info.prevScene = currentScene;
                info.currentScene = current;
                info.isChangeScene = true;
            } else {
                info.isChangeScene = false;
            }
        };

        reset();
        getScene();
        wrap.classList.add(`why-not__wrap--scene-${info.currentScene}`);

        let scrollY = window.scrollY;
        let currentScene = 0;
        let enterNewScene = false;
        const onMotion = () => {
            if (isIn()) {
                getScene();
                const {isChangeScene, prevScene, currentScene} = info;

                if (isChangeScene) {
                    wrap.classList.remove(`why-not__wrap--scene-${prevScene}`);
                    wrap.classList.add(`why-not__wrap--scene-${currentScene}`);

                    if (currentScene === 0) {
                        scene1();
                    }
                }
            }
            // scrollY = window.scrollY;
            // enterNewScene = false;
        };
        const scene1 = (() => {
            const movie = findOne('.why-not__scene-1 video');
            on(movie, 'timeupdate', () => {
                if (movie.currentTime > 5) {
                    movie.pause();
                }
            });
            return () => {
                movie.currentTime = 0;
                movie.play();
            }
        })();

        on(window, 'scroll', onMotion);
    })();

    // Brand Film
    (() => {
        const brandFilm = findOne('.brand-film');
        const tab = new Tab(findOne('.tab', brandFilm));
        tab.menus[0].click();
    })();

    // 유독
    (() => {
        const pogg = findOne('.pogg');

        pogg.addEventListener('sal:in', ({ detail }) => {
            console.log('animated in', detail);
        });

        pogg.addEventListener('sal:out', ({ detail }) => {
            console.log('animated out', detail);
        });
    })();

    // document.addEventListener('sal:out', ({ detail }) => {
    //     console.log('exiting', detail.target);
    // });

    // WHY NOT 크루
    (() => {
        const whyNotCrew = findOne('.why-not-crew');
        const tab = new Tab(findOne('.tab', whyNotCrew));
        tab.menus[0].click();
    })();



};

document.addEventListener('DOMContentLoaded', app);