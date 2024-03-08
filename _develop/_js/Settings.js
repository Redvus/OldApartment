class Settings {

    settingsBlock() {
        const
            settingsBack = document.createElement('div'),
            settingsBlock = document.createElement('div'),
            settingsTitle = document.createElement('div'),
            settingsButtons = document.createElement('div')
        ;
        settingsBack.className = 'wrapper__lightbox';
        settingsBlock.className = 'wrapper__lightbox_block';
        settingsTitle.className = 'wrapper__lightbox_title';
        settingsButtons.className = 'wrapper__lightbox_buttons';
        // settingsBlock.innerHTML = `
        //     <a href="javascript:void(0);" class="wrapper__lightbox_close" id="settingsCloseButton"></a>
        //     <p id="settingsText">Весь игровой процесс будет сброшен и вы начнете игру с начала</p>
        //     <a href="javascript:void(0);" class="wrapper__lightbox_button" id="clearProgressButton">Сбросить прогресс</a>
        //     <a href="javascript:void(0);" class="wrapper__lightbox_button" id="turnOfSoundButton">Выключить музыку</a>
        // `;
        settingsButtons.innerHTML = `
            <a href="javascript:void(0);" class="wrapper__lightbox_button" id="turnOfSoundButton">Выключить музыку</a>
        `;
        settingsTitle.innerHTML = `
            <h3 class="wrapper__lightbox_title-text">Настройки</h3>
            <a href="javascript:void(0);" class="wrapper__lightbox_close" id="settingsCloseButton"></a>
        `;
        settingsBack.appendChild(settingsBlock);
        settingsBlock.appendChild(settingsTitle);
        settingsBlock.appendChild(settingsButtons);
        wrapper.appendChild(settingsBack);

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
}