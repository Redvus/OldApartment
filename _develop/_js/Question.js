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
            containerQuestBottomButtons = document.createElement('ul')
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
                    introDev();
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
        // questionBlockAnim();
    }

    answerBlock(answerVarNum, answerTextRight) {
        const
            questionBlockQuest = document.querySelector('.container-quest__bottom_text--quest'),
            questionBlock = document.querySelector('.container-quest__bottom_text'),
            questionBlockText = document.createElement('span'),
            questionBlockWrongText = document.createElement('span'),
            answerWrongVar = ['Неправильно', 'В следующий раз повезет', 'Не отчаивайтесь', 'Не совсем так', 'К сожалению нет'],
            answerWrongVarView = answerWrongVar[Math.floor(Math.random() * answerWrongVar.length)],
            containerQuestBlock = document.querySelector('.container-quest'),
            containerQuestTop = document.querySelector('.container-quest__top'),
            containerQuestBottom = document.querySelector('.container-quest__bottom')
        ;

        questionBlockText.id = 'answerWright';
        // questionBlockText.innerHTML = `
        //     ${answerTextRight}
        // `;
        questionBlockWrongText.id = 'answerWrong';
        // questionBlockWrongText.innerHTML = `
        //     ${answerWrongVarView}
        // `;

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            answerLi = document.querySelectorAll('ul.container-quest__bottom_buttons > li'),
            answerLiRight = document.querySelectorAll('ul.container-quest__bottom_buttons > li > a')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            if (answerVarArray[i] === answerVarArray[answerVarNum]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== answerVarNum) {
                            // el.remove();
                            // questionBlock.removeChild(questionBlockQuest);
                            // questionBlock.appendChild(questionBlockText);
                            questionBlock.innerHTML = `
                                <span>${answerTextRight}</span>
                            `;
                            let tl = gsap.timeline({
                                onComplete: () => {
                                    wrapper.removeChild(containerQuestBlock);
                                }
                            });
                            tl
                                .to([containerQuestTop, containerQuestBottom], {
                                    autoAlpha: 0,
                                    delay: '1',
                                    y: '100%',
                                    stagger: '0.3'
                                })
                            ;
                        } else {
                            let tl = gsap.timeline();
                            let answerBlockText = document.getElementById('answerWright');
                            answerLiRight[i].className += 'container-quest__bottom_buttons--right';
                            // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_rightAnswer.ogg');
                            tl
                                .to(el, {
                                    top: 0,
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                                .from(answerBlockText, {
                                    autoAlpha: 0,
                                    duration: 0.2
                                })
                            ;
                        }
                    });
                });
            } else if (answerVarArray[i] === answerVarArray[0]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== 0) {
                            // el.remove();
                            // questionBlock.removeChild(questionBlockQuest);
                            // questionBlock.appendChild(questionBlockWrongText);
                            questionBlock.innerHTML = `
                                <span>${answerWrongVarView}</span>
                            `;
                        } else {
                            let tl = gsap.timeline();
                            let answerBlockWrongText = document.getElementById('answerWrong');
                            answerLiRight[i].className += 'container-quest__bottom_buttons--wrong';
                            tl
                                .to(el, {
                                    top: 0,
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                                .from(answerBlockWrongText, {
                                    autoAlpha: 0,
                                    duration: 0.2
                                })
                            ;
                        }
                    });
                });
            } else if (answerVarArray[i] === answerVarArray[1]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== 1) {
                            // el.remove();
                            // questionBlock.removeChild(questionBlockQuest);
                            // questionBlock.appendChild(questionBlockWrongText);
                            questionBlock.innerHTML = `
                                <span>${answerWrongVarView}</span>
                            `;
                        } else {
                            let tl = gsap.timeline();
                            let answerBlockWrongText = document.getElementById('answerWrong');
                            answerLiRight[i].className += 'container-quest__bottom_buttons--wrong';
                            tl
                                .to(el, {
                                    top: 0,
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                                .from(answerBlockWrongText, {
                                    autoAlpha: 0,
                                    duration: 0.2
                                })
                            ;
                        }
                    });
                });
            } else if (answerVarArray[i] === answerVarArray[2]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== 2) {
                            // el.remove();
                            // questionBlock.removeChild(questionBlockQuest);
                            // questionBlock.appendChild(questionBlockWrongText);
                            questionBlock.innerHTML = `
                                <span>${answerWrongVarView}</span>
                            `;
                        } else {
                            let tl = gsap.timeline();
                            let answerBlockWrongText = document.getElementById('answerWrong');
                            answerLiRight[i].className += 'container-quest__bottom_buttons--wrong';
                            tl
                                .to(el, {
                                    top: 0,
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                                .from(answerBlockWrongText, {
                                    autoAlpha: 0,
                                    duration: 0.2
                                })
                            ;
                        }
                    });
                });
            }
        }
    }
}