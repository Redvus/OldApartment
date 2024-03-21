class Question {

    questionBlock(questImage, questQuest, answerVar_1, answerVar_2, answerVar_3) {
        const
            containerQuest = document.createElement('div'),
            containerQuestTop = document.createElement('div'),
            containerQuestTopImage = document.createElement('picture'),
            containerQuestBottom = document.createElement('div'),
            wrapperCategoryBack = document.querySelector('.wrapper__back_category'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperCategoryTitle = document.querySelector('.wrapper__top_title'),
            wrapperTop = document.querySelector('.wrapper__top'),
            containerQuestBottomText = document.createElement('div'),
            containerQuestBottomButtons = document.createElement('ul'),
            settingsLoad = new Settings()
        ;

        containerQuest.className = 'container-quest';
        containerQuestTop.className = 'container-quest__top';
        containerQuestBottom.className = 'container-quest__bottom';
        containerQuestTopImage.className = 'container-quest__top_image';
        containerQuestBottomText.className = 'container-quest__bottom_text';
        containerQuestBottomButtons.className = 'container-quest__bottom_buttons';

        containerQuestTopImage.innerHTML = `
            <img src="assets/games/oldApartment/images/${questImage}">
        `;

        containerQuestBottomText.innerHTML = `
            <p class="container-quest__bottom_text--quest">${questQuest}</p>
        `;

        containerQuestBottomButtons.innerHTML = `
            <li id="answerVar_1"><a href="javascript:void(0);">${answerVar_1}</a></li>
            <li id="answerVar_2"><a href="javascript:void(0);">${answerVar_2}</a></li>
            <li id="answerVar_3"><a href="javascript:void(0);">${answerVar_3}</a></li>
        `;

        wrapper.appendChild(containerQuest);
        containerQuest.appendChild(containerQuestTop);
        containerQuest.appendChild(containerQuestBottom);
        containerQuestTop.appendChild(containerQuestTopImage);

        arrowBackLoad.arrowBackQuest();
        arrowBackLoad.arrowSetting();

        const
            questButtonLi_1 = document.getElementById('answerVar_1'),
            questButtonLi_2 = document.getElementById('answerVar_2'),
            questButtonLi_3 = document.getElementById('answerVar_3'),
            questButtonList = [questButtonLi_1, questButtonLi_2, questButtonLi_3],
            questButtonLiPosition = ['0', '33%', '66%'],
            questButtonLi = document.querySelectorAll('.container-quest__bottom_buttons > li'),
            positionLiLeft = questButtonLiPosition.sort(() => Math.floor(Math.random() * questButtonLiPosition.length))
        ;

        // questButtonList.forEach((el, idx) => {
        //     el.style.left = positionLiLeft[idx];
        // });

        containerQuestBottom.appendChild(containerQuestBottomText);
        containerQuestBottom.appendChild(containerQuestBottomButtons);

        const
            arrowBackClick = document.getElementById('arrowBack'),
            settingsClick = document.getElementById('settingsClick'),
            containerQuestBlock = document.querySelector('.container-quest'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButton = document.querySelectorAll('.container-quest__bottom_buttons > li')
        ;

        arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapperTop.removeChild(wrapperCategoryTitle);
                    wrapper.removeChild(containerQuestBlock);
                    wrapperBack.removeChild(wrapperCategoryBack);
                    familyDev();
                }
            });
            tl
                .to([
                    arrowBackClick,
                    settingsClick,
                    wrapperCategoryTitle,
                    containerQuestBlock], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
                .to(wrapperCategoryBack, {
                    autoAlpha: 0,
                    duration: '0.6',
                    delay: '-0.1',
                    scale: 1.05
                })
            ;
        });

        //Settings
        settingsClick.addEventListener('click', () => {
            settingsLoad.settingsBlock();
            const settingsClearButton = document.getElementById('clearProgressButton'),
                settingsBack = document.querySelector('.wrapper__lightbox'),
                settingsBlock = document.querySelector('.wrapper__lightbox_block'),
                settingsClose = document.getElementById('settingsCloseButton'),
                settingsTextBlock = document.getElementById('settingsText'),
                settingsToggleMusic = document.getElementById('turnOfSoundButton'),
                settingsToggleMusicID = document.getElementById('backgroundMusicID'),
                settingsMusicValue = JSON.parse(localStorage.getItem('backgroundMusic'));

            settingsClearButton.addEventListener('click', () => {
                localStorage.clear();
                localSet();
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

            // if (localStorage.getItem('backgroundMusic') === '0') {
            //     settingsToggleMusic.textContent = 'Включить музыку';
            // }

            // settingsToggleMusic.addEventListener('click', () => {
            //     if (settingsToggleMusicID.paused || settingsMusicValue === '0') {
            //         settingsToggleMusicID.play();
            //         settingsToggleMusic.textContent = 'Выключить музыку';
            //         localStorage.setItem('backgroundMusic', JSON.stringify(1));
            //     } else if (settingsToggleMusicID.play || settingsMusicValue === '1'){
            //         settingsToggleMusicID.pause();
            //         settingsToggleMusic.textContent = 'Включить музыку';
            //         localStorage.setItem('backgroundMusic', JSON.stringify(0));
            //     }
            // });

            settingsClose.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(settingsBack);
                    }
                });
                tl
                    .to(settingsBlock, {
                        duration: 0.3,
                        y: '5%',
                        autoAlpha: 0
                    })
                    .to(settingsBack, {
                        duration: 0.3,
                        autoAlpha: 0
                    })
                ;
            });
        });

        function questionBlockAnim() {
            let tl = gsap.timeline();
            tl
                .from(containerQuestBottom, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: 0.2,
                    y: '100%'
                })
                .from(containerQuestTop, {
                    autoAlpha: 0,
                    duration: 0.4,
                    // delay: '-0.2',
                    y: '100%'
                })
                .from(containerQuestTopImage, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '0.1'
                })
                .from(containerQuestBottomTextDiv, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2'
                })
                .from(containerQuestBottomButton, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.4',
                    stagger: '0.05'
                })
            ;
        }
        questionBlockAnim();
    }

    questionBlockFind() {

        const
            containerQuest = document.createElement('div'),
            containerQuestBottom = document.createElement('div'),
            wrapperCategoryBack = document.querySelector('.wrapper__back_category'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperCategoryTitle = document.querySelector('.wrapper__top_title'),
            wrapperTop = document.querySelector('.wrapper__top'),
            containerQuestBottomCells = document.createElement('ul'),
            containerQuestBottomText = document.createElement('div'),
            containerFind = document.createElement('div'),
            settingsLoad = new Settings()
        ;

        containerQuest.className = 'container-quest';
        containerQuestBottom.className = 'container-quest__bottom';
        containerQuestBottomCells.className = 'container-quest__bottom_cells';
        containerQuestBottomText.className = 'container-quest__bottom_text';
        containerFind.className = 'container-find';

        containerQuestBottomText.innerHTML = `
            <p class="container-quest__bottom_text--quest">Найдите три предмета, не соответствующие эпохе</p>
        `;

        wrapper.appendChild(containerQuest);
        wrapper.appendChild(containerFind);
        containerQuest.appendChild(containerQuestBottom);

        arrowBackLoad.arrowBackQuest();
        arrowBackLoad.arrowSetting();

        containerQuestBottom.appendChild(containerQuestBottomText);
        containerQuestBottom.appendChild(containerQuestBottomCells);

        const
            arrowBackClick = document.getElementById('arrowBack'),
            settingsClick = document.getElementById('settingsClick'),
            containerQuestBlock = document.querySelector('.container-quest'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButton = document.querySelectorAll('.container-quest__bottom_buttons > li'),
            wrapperCategoryBackTop = document.querySelector('.wrapper__back_category--top'),
            containerFindBlock = document.querySelector('.container-find')
        ;

        arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapperTop.removeChild(wrapperCategoryTitle);
                    wrapper.removeChild(containerQuestBlock);
                    wrapperBack.removeChild(wrapperCategoryBack);
                    wrapperBack.removeChild(wrapperCategoryBackTop);
                    wrapper.removeChild(containerFindBlock);
                    familyDev();
                }
            });
            tl
                .to([
                    arrowBackClick,
                    settingsClick,
                    wrapperCategoryTitle,
                    containerQuestBlock], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
                .to([wrapperCategoryBack, wrapperCategoryBackTop, containerFindBlock], {
                    autoAlpha: 0,
                    duration: '0.6',
                    delay: '-0.1',
                    // scale: 1.05
                })
            ;
        });

        //Settings
        settingsClick.addEventListener('click', () => {
            settingsLoad.settingsBlock();
            const
                settingsClearButton = document.getElementById('clearProgressButton'),
                settingsBack = document.querySelector('.wrapper__lightbox'),
                settingsBlock = document.querySelector('.wrapper__lightbox_block'),
                settingsClose = document.getElementById('settingsCloseButton'),
                settingsTextBlock = document.getElementById('settingsText'),
                settingsToggleMusic = document.getElementById('turnOfSoundButton'),
                settingsToggleMusicID = document.getElementById('backgroundMusicID'),
                settingsMusicValue = JSON.parse(localStorage.getItem('backgroundMusic'));

            settingsClearButton.addEventListener('click', () => {
                localStorage.clear();
                localSet();
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

            // settingsToggleMusic.addEventListener('click', () => {
            //     if (settingsToggleMusicID.paused || settingsMusicValue === '0') {
            //         settingsToggleMusicID.play();
            //         settingsToggleMusic.textContent = 'Выключить музыку';
            //         localStorage.setItem('backgroundMusic', JSON.stringify(1));
            //     } else if (settingsToggleMusicID.play || settingsMusicValue === '1'){
            //         settingsToggleMusicID.pause();
            //         settingsToggleMusic.textContent = 'Включить музыку';
            //         localStorage.setItem('backgroundMusic', JSON.stringify(0));
            //     }
            // });

            settingsClose.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(settingsBack);
                    }
                });
                tl
                    .to(settingsBlock, {
                        duration: 0.3,
                        y: '5%',
                        autoAlpha: 0
                    })
                    .to(settingsBack, {
                        duration: 0.3,
                        autoAlpha: 0
                    })
                ;
            });
        });

        function questionBlockAnim() {
            let tl = gsap.timeline();
            tl
                .from(containerQuestBottom, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: 0.2,
                    y: '100%'
                })
                .from(containerQuestBottomTextDiv, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2'
                })
                .from(containerQuestBottomButton, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.4',
                    stagger: '0.05'
                })
            ;
        }
        questionBlockAnim();
    }

    answerBlock(answerVarNum, answerFull) {
        const
            questionBlockQuest = document.querySelector('.container-quest__bottom_text--quest'),
            questionBlock = document.querySelector('.container-quest__bottom_text'),
            questionBlockText = document.createElement('span'),
            questionBlockWrongText = document.createElement('span'),
            answerWrongVar = ['Неправильно', 'В следующий раз повезет', 'Не отчаивайтесь', 'Не совсем так', 'К сожалению нет'],
            answerWrongVarView = answerWrongVar[Math.floor(Math.random() * answerWrongVar.length)],
            answerRightVar = ['Правильно!', 'Все верно!', 'Именно так!', 'Точно так!', 'Так держать!'],
            answerRightVarView = answerRightVar[Math.floor(Math.random() * answerRightVar.length)]
        ;

        questionBlockText.id = 'answerWright';
        // questionBlockText.innerHTML = `
        //     ${answerRightVarView}
        // `;
        questionBlockWrongText.id = 'answerWrong';
        // questionBlockWrongText.innerHTML = `
        //     ${answerWrongVarView}
        // `;

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            answerLi = document.querySelectorAll('ul.container-quest__bottom_buttons li'),
            answerLiRight = document.querySelectorAll('ul.container-quest__bottom_buttons > li > a')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            if (answerVarArray[i] === answerVarArray[answerVarNum]) {
                answerVarArray[i].addEventListener('click', () => {
                    if (answerFull) {
                        questionBlock.innerHTML = `
                            <span>${answerFull}</span>
                        `;
                    } else {
                        questionBlock.innerHTML = `
                            <span>${answerRightVarView}</span>
                        `;
                    }
                    gsap.from(questionBlock, {
                        duration: '0.4',
                        delay: '0.1',
                        autoAlpha: 0,
                    });
                    answerLiRight[i].className += 'container-quest__bottom_buttons--right';
                    soundsLoad.rightAnswer('assets/games/oldApartment/sounds/rightAnswer_1.ogg');
                });
            } else if (answerVarArray[i] !== answerVarArray[answerVarNum]) {
                answerVarArray[i].addEventListener('click', () => {
                    soundsLoad.rightAnswer('assets/games/oldApartment/sounds/wrongAnswer.ogg');
                    let tl = gsap.timeline();
                    let answerBlockWrongText = document.getElementById('answerWrong');
                    answerLiRight[i].className += 'container-quest__bottom_buttons--wrong';
                    tl
                        .from(answerBlockWrongText, {
                            autoAlpha: 0,
                            duration: 0.2
                        })
                    ;
                });
            }
        }
    }
}