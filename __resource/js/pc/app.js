import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {findOne, getOffset, on} from '../helper';
gsap.registerPlugin(ScrollTrigger);

const Tab = class {
    constructor(element) {

    }
};

const app = () => {
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
        wrap.classList.add(`hy-not__wrap--scene-${info.currentScene}`);

        let scrollY = window.scrollY;
        let currentScene = 0;
        let enterNewScene = false;
        const onMotion = () => {
            if (isIn()) {
                getScene();
                const {isChangeScene, prevScene, currentScene} = info;

                if (isChangeScene) {
                    wrap.classList.remove(`hy-not__wrap--scene-${prevScene}`);
                    wrap.classList.add(`hy-not__wrap--scene-${currentScene}`);
                }
            }
            // scrollY = window.scrollY;
            // enterNewScene = false;
        };

        on(window, 'scroll', onMotion);
    })();


};

document.addEventListener('DOMContentLoaded', app);