class ArrowsAll {

    arrowBack() {
        const containerArrowBack = document.createElement('a');
        containerArrowBack.className = 'wrapper__service_arrow';
        containerArrowBack.id = 'arrowBack';
        containerArrowBack.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_buttonBack.png" alt="Стрелка назад">
        `;
        wrapper.appendChild(containerArrowBack);

        const arrowBackLoad = document.getElementById('arrowBack');

        function arrowBackAnim() {
            let arrowAnim = gsap.from(arrowBackLoad, {
                duration: 1,
                delay: 1,
                autoAlpha: 0
            });
        }
        arrowBackAnim();
    }

    clearStorage() {
        const containerClear = document.createElement('a');
        containerClear.className = 'wrapper__service_clear';
        containerClear.id = 'settingsClick';
        containerClear.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_buttonSettings.png" alt="Настройки">
        `;
        wrapper.appendChild(containerClear);

        const settingsClickLoad = document.getElementById('settingsClick');

        function settingsClickAnim() {
            let settingsClickGsap = gsap.from(settingsClickLoad, {
                duration: 1,
                delay: 1,
                autoAlpha: 0
            });
        }
        settingsClickAnim();
    }

    arrowNext() {
        const containerClear = document.createElement('a');
        containerClear.className = 'wrapper__service_arrow wrapper__service_arrow--next';
        containerClear.id = 'arrowNext';
        containerClear.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_buttonBack.png" alt="Следующий вопрос">
        `;
        wrapper.appendChild(containerClear);

        const arrowNextLoad = document.getElementById('arrowNext');

        function arrowNextAnim() {
            let arrowAnim = gsap.from(arrowNextLoad, {
                duration: 1,
                delay: 1,
                autoAlpha: 0
            });
        }
        arrowNextAnim();
    }

    arrowNextHidden() {
        const
            containerClear = document.createElement('a'),
            wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right')
        ;
        containerClear.className = 'wrapper__service_arrow wrapper__service_arrow--hidden';
        // containerClear.id = 'arrowNextCat';
        containerClear.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_buttonBack.png" alt="Следующий вопрос">
        `;
        wrapperBottomRight.appendChild(containerClear);

        const arrowNextLoad = document.getElementById('arrowNextCat');

        function arrowNextAnim() {
            let arrowAnim = gsap.to(arrowNextLoad, {
                duration: 0.3,
                delay: 0.3,
                autoAlpha: 0
            });
        }
        // arrowNextAnim();
    }

    buttonContinueLoad() {
        const containerClear = document.createElement('a');
        containerClear.className = 'wrapper__service_continue';
        containerClear.id = 'buttonContinue';
        containerClear.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_buttonBack.png" alt="Следующий вопрос">
        `;
        wrapper.appendChild(containerClear);
    }
}