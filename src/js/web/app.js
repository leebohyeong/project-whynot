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
    const zone = document.querySelector('.why-not__zone');
    const triggers = [...zone.querySelectorAll('a')];
    const details = triggers.map(trigger => document.querySelector(trigger.getAttribute('href')));
    const modal = new Modal(details);

    triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            modal.open(index);
        });
    });
};

document.addEventListener('DOMContentLoaded', app);