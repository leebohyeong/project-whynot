const Modal = class {
    constructor(modals) {
        this.body = document.body;
        this.modals = modals;
        this.currentIndex = 0;

        this.initEvents();
    }

    open(index) {
        this.body.classList.add('modal-open');
        this.modals[index].classList.add('modal--open');
        this.currentIndex = index;
    }

    close() {
        this.body.classList.remove('modal-open');
        this.modals[this.currentIndex].classList.remove('modal--open');
    }

    initEvents() {
        this.modals.forEach(modal => {
            const close = modal.querySelector('.modal__close');

            close.addEventListener('click', (event) => {
                this.close();
            });
        });
    }
};

const app = () => {
    (() => {
        const now = Date.now();
        const reservationDate = {
            '2022.07.01 18:00': new Date(2022, (7 - 1), 1, 18, 0, 0),
            '2022.07.11 14:00': new Date(2022, (7 - 1), 11, 14, 0, 0)
        };
        const movieId = {
            '2022.07.01 18:00': {
                whyNot: 'ojEof7DNPt4',
                whyNotRoad: 'ILAHD6G5qsE',
            }
        };
        const isReservationDate = reservationDate => now >= reservationDate;

        // 와이낫 로드 > 유플러스 멤버십 zone
        (() => {
            if (false && isReservationDate(reservationDate['2022.07.01 18:00'])) {
                const zone = document.querySelector('.why-not-road__zone');
                const zoneItem = zone.querySelectorAll('li')[2];

                zone.style.backgroundImage = 'url("/assets/images/why-not-road/p_zone_220701.jpg")';
                zoneItem.innerHTML = '<a href="#modal-3"><span>인천</span></a>';
            }
        })();

        // 와이낫 로드 > 와이낫 크루 영상 보기
        (() => {
            if (false && isReservationDate(reservationDate['2022.07.01 18:00'])) {
                const movie = document.querySelector('.why-not-road__about-movie iframe');
                movie.src = `https://www.youtube.com/embed/${movieId['2022.07.01 18:00']['whyNotRoad']}?controls=0`;
            }
        })();

        // 와이낫 > WHY NOT 프로젝트 소개
        (() => {
            if (false && isReservationDate(reservationDate['2022.07.01 18:00'])) {
                const detail = document.querySelector('.why-not__info-detail--1 a');
                detail.href = `https://youtu.be/${movieId['2022.07.01 18:00']['whyNot']}`;
            }
        })();

        // 와이낫 > 상단 이미지 추가
        (() => {
            if (true && isReservationDate(reservationDate['2022.07.11 14:00'])) {
                const subscribe = document.querySelector('.why-not__subscribe');
                subscribe.classList.add('why-not__subscribe--open');
            }
        })();
    })();


    (() => {
        const url = new URL(location);
        const nav = document.querySelector('.why-not-nav');
        const triggers = [...nav.querySelectorAll('a')];
        const navNames = triggers.map(trigger => trigger.getAttribute('href').replace('/?content=', ''));
        const paramIndex = navNames.indexOf(url.searchParams.get('content'));
        let current =
            paramIndex !== -1 ? navNames[paramIndex] : url.origin.includes('xn--t20bn3f1tdm0t9mb') || url.origin.includes('와이낫로드') ? navNames[1] : navNames[0];

        const article = document.getElementById(current);

        nav.classList.add(`why-not-nav--${current}`);
        article.classList.add(`${article.classList[0]}--active`);
    })();

    (() => {
        const zone = document.querySelector('.why-not-road__zone');
        const triggers = [...zone.querySelectorAll('a')];
        const details = triggers.map(trigger => document.querySelector(trigger.getAttribute('href')));
        const modal = new Modal(details);

        triggers.forEach((trigger, index) => {
            trigger.addEventListener('click', (event) => {
                event.preventDefault();
                modal.open(index);
            });
        });
    })();
};

document.addEventListener('DOMContentLoaded', app);