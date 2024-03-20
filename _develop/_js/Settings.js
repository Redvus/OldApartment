class Settings {

    settingsBlock() {
        const
            settingsBack = document.createElement('div'),
            settingsBlock = document.createElement('div'),
            settingsTitle = document.createElement('div'),
            settingsButtons = document.createElement('div'),
            settingsText = document.createElement('div')
        ;
        settingsBack.className = 'wrapper__lightbox';
        settingsBlock.className = 'wrapper__lightbox_block';
        settingsTitle.className = 'wrapper__lightbox_title';
        settingsButtons.className = 'wrapper__lightbox_buttons';
        settingsText.id = 'settingsText';
        settingsText.innerHTML = `
            Весь игровой процесс будет сброшен и вы начнете игру с начала
        `;
        settingsButtons.innerHTML = `
            <a href="javascript:void(0);" class="wrapper__lightbox_button" id="clearProgressButton">Сбросить прогресс</a>
<!--            <a href="javascript:void(0);" class="wrapper__lightbox_button" id="turnOfSoundButton">Выключить музыку</a>-->
        `;
        settingsTitle.innerHTML = `
            <h3 class="wrapper__lightbox_title-text">Настройки</h3>
            <a href="javascript:void(0);" class="wrapper__lightbox_close" id="settingsCloseButton"></a>
        `;
        settingsBack.appendChild(settingsBlock);
        settingsBlock.appendChild(settingsTitle);
        settingsBlock.appendChild(settingsText);
        settingsBlock.appendChild(settingsButtons);
        wrapper.appendChild(settingsBack);

        const
            settingsTextBlock = document.getElementById('settingsText'),
            settingsClearButton = document.getElementById('clearProgressButton')
        ;

        let wrapperTopCount = document.querySelector('.wrapper__top_count');

        settingsClearButton.addEventListener('click', () => {
            localStorage.clear();
            localStorage.setItem('progressOldApartment_1_0', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_1_1', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_1_2', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_1_3', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_1_4', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_1_5', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_1', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_2_0', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_2_1', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_2_2', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_2_3', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_2_4', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_2_5', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_2', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_3_0', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_3_1', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_3_2', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_3_3', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_3_4', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_3_5', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_3', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_4_0', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_4_1', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_4_2', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_4_3', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_4_4', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_4_5', JSON.stringify(0));
            localStorage.setItem('progressOldApartment_4', JSON.stringify(0));
            localStorage.setItem('progressOldApartment', JSON.stringify(0));
            wrapperTopCount.innerHTML = `
                <span>Прогресс: 0%</span>
            `;
            soundsLoad.rightAnswer('assets/games/oldApartment/sounds/progressClear.ogg');
            setTimeout(() => {
                location.reload();
            }, 800);

        });

        settingsClearButton.addEventListener('mouseover', () => {
            settingsTextBlock.textContent = 'Вы уверены?';
            settingsClearButton.textContent = 'Да';
        });

        settingsClearButton.addEventListener('mouseleave', () => {
            settingsTextBlock.textContent = 'Весь игровой процесс будет сброшен и вы начнете игру с начала';
            settingsClearButton.textContent = 'Сбросить прогресс';
        });

        function settingsBlockAnim() {
            let tl = gsap.timeline();
            const
                settingsBack = document.querySelector('.wrapper__lightbox'),
                settingsBlock = document.querySelector('.wrapper__lightbox_block')
            ;
            tl
                .from(settingsBack, {
                    duration: 0.3,
                    autoAlpha: 0
                })
                .from(settingsBlock, {
                    duration: 0.3,
                    delay: '-0.07',
                    y: '-5%',
                    autoAlpha: 0
                })
            ;
        }
        settingsBlockAnim();
    }

    finalBlock() {
        const
            settingsBack = document.createElement('div'),
            settingsBlock = document.createElement('div'),
            settingsTextWrong = document.createElement('div'),
            settingsTextWright = document.createElement('div'),
            settingsButtonBack = document.createElement('div')
        ;
        settingsBack.className = 'wrapper__lightbox';
        settingsBlock.className = 'wrapper__lightbox_block wrapper__lightbox_block--final';
        settingsButtonBack.innerHTML = `
            <a href="javascript:void(0);" class="wrapper__lightbox_button" id="finalButton">Вернуться к началу</a>
        `;
        settingsTextWrong.innerHTML = `
            <p>Вы молодец, но можно лучше, попробуйте еще раз, все получится!</p>
        `;
        settingsTextWright.innerHTML = `
            <p>Вы отлично справились, поздравляем!</p>
        `;

        settingsBack.appendChild(settingsBlock);
        // let progressOldApartment = localStorage.getItem('progressOldApartment');
        // if (progressOldApartment < 24) {
        //     settingsBlock.appendChild(settingsTextWrong);
        // } else if (progressOldApartment === 24) {
        //     settingsBlock.appendChild(settingsTextWright);
        // }

        settingsBlock.appendChild(settingsButtonBack);
        wrapper.appendChild(settingsBack);

        function finalBlockAnim() {
            let tl = gsap.timeline();
            const
                settingsBack = document.querySelector('.wrapper__lightbox'),
                settingsBlock = document.querySelector('.wrapper__lightbox_block--final')
            ;
            tl
                .from(settingsBack, {
                    duration: 0.3,
                    autoAlpha: 0
                })
                .from(settingsBlock, {
                    duration: 0.3,
                    delay: '-0.07',
                    y: '-5%',
                    autoAlpha: 0
                })
            ;
        }
        finalBlockAnim();
    }
}