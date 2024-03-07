class Question {

    questionBlock() {
        const containerWrapper = document.createElement('div'),
            containerWriter = document.createElement('div'),
            containerTitle = document.createElement('div'),
            wrapperTitleAuthors = document.createElement('div'),
            containerBlockLeft = document.createElement('div'),
            containerBlockRight = document.createElement('div')
        ;
        containerWriter.className = 'container-quest';
        containerWrapper.className = 'container__wrapper container__wrapper_about';
        containerTitle.className = 'container__title container__title_category';
        containerBlockLeft.className = 'container__about container__about_left';
        containerBlockRight.className = 'container__about container__about_right';
        wrapperTitleAuthors.className = 'wrapper__top';

        containerBlockLeft.id = 'containerBlockLeft';
        containerBlockRight.id = 'containerBlockRight';

        // wrapper.appendChild(wrapperTitleAuthors);
        wrapper.appendChild(containerWriter);
        containerWriter.appendChild(containerWrapper);
        containerWrapper.appendChild(containerBlockLeft);
        containerWrapper.appendChild(containerBlockRight);

        const writerTitle = document.querySelector('.wrapper__top'),
            aboutLeft = document.querySelector('.container__about_left'),
            aboutRight = document.querySelector('.container__about_right')
        ;

        function questionBlockAnim() {
            let tl = gsap.timeline();
            tl
                .from(aboutLeft, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: 0.2
                })
                .from(aboutRight, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2'
                })
            ;
        }
        questionBlockAnim();
    }

    questionBlockText(questQuestion,
                  answerVar_1,
                  answerVar_2,
                  answerVar_3) {

        const containerInsideLeft = document.createElement('div'),
            containerInsideRight = document.createElement('div'),
            containerBlockLeft = document.getElementById('containerBlockLeft'),
            containerBlockRight = document.getElementById('containerBlockRight')
        ;

        containerInsideLeft.className = 'container__about_inside container__about_inside--center';
        containerInsideRight.className = 'container__about_inside';
        containerInsideLeft.id = 'containerInsideLeft';
        containerInsideRight.id = 'containerInsideRight';

        containerInsideLeft.innerHTML = `<p>${questQuestion}</p>`;

        containerInsideRight.innerHTML = `
            <ul class="question__block_list">
                <li id="answerVar_1"><a href="javascript:void(0);">${answerVar_1}</a></li>
                <li id="answerVar_2"><a href="javascript:void(0);">${answerVar_2}</a></li>
                <li id="answerVar_3"><a href="javascript:void(0);">${answerVar_3}</a></li>
            </ul>
        `;

        containerBlockLeft.appendChild(containerInsideLeft);
        containerBlockRight.appendChild(containerInsideRight);

        const insideTextLeft = document.querySelectorAll('#containerInsideLeft > p'),
            questButtonLi_1 = document.getElementById('answerVar_1'),
            questButtonLi_2 = document.getElementById('answerVar_2'),
            questButtonLi_3 = document.getElementById('answerVar_3'),
            questButtonList = [questButtonLi_1, questButtonLi_2, questButtonLi_3],
            questButtonLiPosition = ['0', '33%', '66%'],
            questButtonLi = document.querySelectorAll('.question__block_list li'),
            positionLiTop = questButtonLiPosition.sort(() => Math.floor(Math.random() * questButtonLiPosition.length))
        ;

        questButtonList.forEach((el, idx) => {
            el.style.top = positionLiTop[idx];
        });

        function questionBlockTextAnim() {
            let tl = gsap.timeline();
            tl
                .from(insideTextLeft, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: 0.2
                })
                .from(questButtonList, {
                    autoAlpha: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    delay: '-0.2'
                })
            ;
        }
        questionBlockTextAnim();
    }

    questionWrapperBack(questBack) {
        const wrapperQuestBack = document.createElement('div');
        wrapperQuestBack.className = `wrapper__${questBack}`;
        wrapper.appendChild(wrapperQuestBack);
    }

    answerBlock(answerVarNum, answerTextRight) {
        const questionBlock = document.querySelector('.question__block_list'),
            questionBlockText = document.createElement('div'),
            questionBlockWrongText = document.createElement('div'),
            answerWrongVar = ['Неправильно', 'В следующий раз повезет', 'Не отчаивайтесь', 'Не совсем так', 'К сожалению нет'],
            answerWrongVarView = answerWrongVar[Math.floor(Math.random() * answerWrongVar.length)]
        ;

        questionBlockText.innerHTML = `
            <div class="question__block_text-inside" id="answerWright"><p>${answerTextRight}</p></div>
        `;
        questionBlockWrongText.innerHTML = `
            <div class="question__block_text-inside" id="answerWrong"><p>${answerWrongVarView}</p></div>
        `;

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            answerLi = document.querySelectorAll('ul.question__block_list > li'),
            answerLiRight = document.querySelectorAll('ul.question__block_list > li > a')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            if (answerVarArray[i] === answerVarArray[answerVarNum]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== answerVarNum) {
                            el.remove();
                            questionBlock.appendChild(questionBlockText);
                            questionBlockText.className = 'question__block_text';
                        } else {
                            let tl = gsap.timeline();
                            let answerBlockText = document.getElementById('answerWright');
                            answerLiRight[i].className += 'question__block_list--right';
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
                            el.remove();
                            questionBlock.appendChild(questionBlockWrongText);
                            questionBlockWrongText.className = 'question__block_text';
                        } else {
                            let tl = gsap.timeline();
                            let answerBlockWrongText = document.getElementById('answerWrong');
                            answerLiRight[i].className += 'question__block_list--wrong';
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
                            el.remove();
                            questionBlock.appendChild(questionBlockWrongText);
                            questionBlockWrongText.className = 'question__block_text';
                        } else {
                            let tl = gsap.timeline();
                            let answerBlockWrongText = document.getElementById('answerWrong');
                            answerLiRight[i].className += 'question__block_list--wrong';
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
                            el.remove();
                            questionBlock.appendChild(questionBlockWrongText);
                            questionBlockWrongText.className = 'question__block_text';
                        } else {
                            let tl = gsap.timeline();
                            let answerBlockWrongText = document.getElementById('answerWrong');
                            answerLiRight[i].className += 'question__block_list--wrong';
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