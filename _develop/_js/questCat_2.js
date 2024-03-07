function questionCat_2_0() {
    questionLoad.questionBlock();
    questionLoad.questionBlockText(
        'Левитационное устройство исключительно вертикального перемещения',
        'ковёр–самолёт',
        'ступа Бабы–Яги',
        'сапоги-скороходы');

    const
        wrapperBottom = document.createElement('div'),
        containerAbout = document.querySelector('.container__wrapper_about'),
        wrapperTopAbout = document.querySelector('.wrapper__top'),
        wrapperBackDialog = document.createElement('div'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperBackCatSecond = document.createElement('div'),
        containerVovka = document.getElementById('containerVovka'),
        containerNestor = document.getElementById('containerNestor')
    ;

    arrowBackLoad.arrowNextHidden();
    wrapperBackCatSecond.className = 'wrapper__back_category wrapper__back_category--second';
    wrapperBackDialog.className = 'wrapper__back_dialog';
    // questionDialogPerson.dialogPersonStart();
    wrapperBack.appendChild(wrapperBackDialog);
    gsap.from(wrapperBackDialog, {
        duration: 0.6,
        autoAlpha: 0
    });
    gsap.to([containerVovka, containerNestor], {
        duration: 0.6,
        autoAlpha: 1
    });

    const
        arrowBackClick = document.getElementById('arrowBack'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        wrapperBottomLeft = document.querySelector('.wrapper__bottom_part--left'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right')
    ;

    const
        questionBack_1 = document.getElementById('questionBack_1'),
        containerQuest = document.querySelector('.container-quest'),
        containerDialog = document.querySelector('.container--dialog'),
        containerBlockLeft = document.getElementById('containerBlockLeft'),
        containerBlockRight = document.getElementById('containerBlockRight'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        categoryQuestBack = document.createElement('div'),
        containerInsideLeft = document.getElementById('containerInsideLeft'),
        containerInsideRight = document.getElementById('containerInsideRight')
    ;

    questionLoad.answerBlock(1, 'Верно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_2_0';
            const questionNext_2_0 = document.getElementById('questionNext_2_0');
            questionNext_2_0.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onStart: () => {
                        wrapperBack.appendChild(wrapperBackCatSecond);
                    },
                    onComplete: () => {
                        wrapperBack.removeChild(wrapperBackDialog);
                        wrapperBottomRight.removeChild(questionNext_2_0);
                        // containerDialog.removeChild(containerVovka);
                        // containerDialog.removeChild(containerNestor);
                        container.className = 'container';
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_2_1();
                    }
                });
                tl
                    .to([
                        containerVovka,
                        containerNestor,
                        containerInsideRight,
                        containerInsideLeft], {
                        autoAlpha: 0,
                        delay: '-0.1'
                    })
                    .to(wrapperBackDialog, {
                        duration: 0.6,
                        delay: '-0.3',
                        autoAlpha: 1
                    })
                    .from(wrapperBackCatSecond, {
                        duration: 0.6,
                        delay: '-0.3',
                        autoAlpha: 0
                    })
            });
        });
    }
}

// Елена Премудрая
function questionCat_2_1() {
    questionLoad.questionBlockText(
        '«Выпусти меня на волю; как будешь в нужде, я тебе сам пригожусь; только помяни меня - и я в ту ж минуту явлюсь к тебе на выручку». Кому даровал солдат свободу?',
        'джину',
        'Кощею-бессмертному',
        'нечистому духу');

    arrowBackLoad.arrowNextHidden();

    const questionBack_2 = document.getElementById('questionBack_2'),
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        containerPerson = document.createElement('picture'),
        wrapperTop = document.querySelector('.wrapper__top')
    ;

    containerPerson.className = 'container__person';
    containerPerson.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_elenaWise.png" alt="Елена Премудрая">
    `;
    wrapperTop.innerHTML = `
        <h1 class="wrapper__top_title">Елена Премудрая</h1>
    `;
    container.appendChild(containerPerson);
    gsap.from(containerPerson, {
        duration: 0.6,
        autoAlpha: 0
    });
    gsap.to(wrapperTop, {
        duration: 0.6,
        autoAlpha: 1
    });

    questionLoad.answerBlock(2, 'Верно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_2_1';
            const questionNext_2_1 = document.getElementById('questionNext_2_1');
            questionNext_2_1.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_2_1);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_2_2();
                    }
                });
                tl
                    .to([
                        containerInsideRight,
                        containerInsideLeft], {
                        autoAlpha: 0,
                        delay: '-0.1'
                    })
                ;
            });
        });
    }

}

function questionCat_2_2() {
    questionLoad.questionBlockText(
        'Красные девицы принесли волшебный ковер, разостлали по полу, ударились о тот ковер и сделались...',
        'голубками',
        'бабочками',
        'лебёдушками');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden')
    ;

    questionLoad.answerBlock(0, 'Верно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_2_2';
            const questionNext_2_2 = document.getElementById('questionNext_2_2');
            questionNext_2_2.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_2_2);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_2_3();
                    }
                });
                tl
                    .to([
                        containerInsideRight,
                        containerInsideLeft], {
                        autoAlpha: 0,
                        delay: '-0.1'
                    })
                ;
            });
        });
    }

}

function questionCat_2_3() {
    questionLoad.questionBlockText(
        'А солдату крепко не терпится; попробовал в другой и в третий раз - чутко спит королевна, после всякого поцелуя пробуждается. За третьим разом встала она с постели и говорит: «Тут что-нибудь да недаром: дай-ка посмотрю в...»',
        'в волшебное зеркальце',
        'в волшебную шкатулку',
        'волшебную книгу');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden')
    ;

    questionLoad.answerBlock(2, 'Правильно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_2_3';
            const questionNext_2_3 = document.getElementById('questionNext_2_3');
            questionNext_2_3.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_2_3);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_2_4();
                    }
                });
                tl
                    .to([
                        containerInsideRight,
                        containerInsideLeft], {
                        autoAlpha: 0,
                        delay: '-0.1'
                    })
                ;
            });
        });
    }

}

function questionCat_2_4() {
    questionLoad.questionBlockText(
        'Вот махнет королевна платком, и покатится молодецкая голова!..». Смилуйся, прекрасная королевна, - просит солдат со слезами, - позволь напоследях...',
        'слово молвить',
        'песню спеть',
        'сказы сказывать');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden')
    ;

    questionLoad.answerBlock(1, 'Точно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_2_4';
            const questionNext_2_4 = document.getElementById('questionNext_2_4');
            questionNext_2_4.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_2_4);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_2_5();
                    }
                });
                tl
                    .to([
                        containerInsideRight,
                        containerInsideLeft], {
                        autoAlpha: 0,
                        delay: '-0.1'
                    })
                ;
            });
        });
    }

}

function questionCat_2_5() {
    questionLoad.questionBlockText(
        'Подскочил к солдату, ударил его по щеке и оборотил ..., а сам сделался мышкою, схватил … в зубы, прокрался во дворец, нашел волшебную книгу и воткнул в нее...',
        'булавку',
        'иголку',
        'кнопку');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        containerPerson = document.querySelector('.container__person')
    ;

    questionLoad.answerBlock(1, 'Совершеноо верно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_2_5';
            const questionNext_2_5 = document.getElementById('questionNext_2_5');
            questionNext_2_5.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_2_5);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        container.removeChild(containerPerson);
                        wrapper.removeChild(containerQuest);
                        questionCat_2_6();
                    }
                });
                tl
                    .to([
                        containerInsideRight,
                        containerInsideLeft,
                        containerQuest,
                        containerPerson], {
                        autoAlpha: 0,
                        delay: '-0.1'
                    })
                ;
            });
        });
    }

}

function questionCat_2_6() {
    arrowBackLoad.arrowNextHidden();

    const questionBack_2 = document.getElementById('questionBack_2'),
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        containerDifference = document.createElement('div'),
        appleHide = document.createElement('picture'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperBackCatSecond = document.querySelector('.wrapper__back_category--second'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTopSubTitle = document.createElement('h2')
    ;

    containerDifference.className = 'container__difference';
    wrapperTopSubTitle.className = 'wrapper__top_title-sub';
    wrapperTopSubTitle.innerHTML = 'Найди лишний предмет';
    wrapperTop.appendChild(wrapperTopSubTitle);
    appleHide.id = 'appleSingle';
    containerDifference.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_elenaWiseDifference.png" alt="Елена Премудрая. Найди лишний предмет">
    `;
    appleHide.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_elenaWiseApple.png" alt="Елена Премудрая. Яблоко">
    `;
    container.appendChild(containerDifference);
    containerDifference.appendChild(appleHide);
    gsap.from(containerDifference, {
        duration: 0.6,
        autoAlpha: 0
    });

    const
        appleSingle = document.getElementById('appleSingle'),
        wrapperTopTitle = document.querySelector('.wrapper__top_title')
    ;
    appleSingle.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottomRight.appendChild(arrowNextClick);
                arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
                arrowNextClick.id = 'questionNext_2_6';
                const questionNext_2_6 = document.getElementById('questionNext_2_6');
                questionNext_2_6.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            wrapperBack.removeChild(wrapperBackCatSecond);
                            wrapperTop.removeChild(wrapperTopTitle);
                            wrapperTop.removeChild(wrapperTopSubTitle);
                            wrapperBottomRight.removeChild(questionNext_2_6);
                            container.removeChild(containerDifference);
                            questionCat_3_0();
                        }
                    });
                    tl
                        .to(containerDifference, {
                            autoAlpha: 0,
                            delay: '-0.1'
                        })
                        .to([
                            wrapperBackCatSecond,
                            wrapperTopTitle,
                            wrapperTopSubTitle], {
                            duration: 0.3,
                            autoAlpha: 0
                        })
                    ;
                });
            }
        });
        tl
            .to(appleSingle, {
                duration: 0.3,
                autoAlpha: 0
            })
        ;
    });

}