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
        const url = new URL(location);
        const nav = document.querySelector('.why-not-nav');
        const triggers = [...nav.querySelectorAll('a')];
        const navNames = triggers.map(trigger => trigger.getAttribute('href').replace('/?content=', ''));
        const paramIndex = navNames.indexOf(url.searchParams.get('content'));
        let current = paramIndex !== -1 ? navNames[paramIndex] : navNames[0];

        if (url.origin.includes('xn--t20bn3f1tdm0t9mb') || url.origin.includes('와이낫로드')) {
            current = navNames[1];
        }

        const article = document.getElementById(current);

        nav.classList.add(`why-not-nav--${current}`);
        article.classList.add(`${article.classList[0]}--active`);
    })();

    (() => {
        const zone = document.querySelector('.why-not-load__zone');
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