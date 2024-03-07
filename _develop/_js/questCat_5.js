function questionCat_5_0() {
    questionLoad.questionBlock();
    questionLoad.questionBlockText(
        'Экологически чистое, энерго-экономичное устройство для освещения помещения',
        'волшебная лампа',
        'перо жар-птицы',
        'огниво');

    const
        wrapperBottom = document.createElement('div'),
        containerAbout = document.querySelector('.container__wrapper_about'),
        wrapperTopAbout = document.querySelector('.wrapper__top'),
        wrapperBackDialog = document.createElement('div'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperBackCatFive = document.createElement('div'),
        containerVovka = document.getElementById('containerVovka'),
        containerNestor = document.getElementById('containerNestor')
    ;

    arrowBackLoad.arrowNextHidden();
    wrapperBackCatFive.className = 'wrapper__back_category wrapper__back_category--five';
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
            arrowNextClick.id = 'questionNext_5_0';
            const questionNext_5_0 = document.getElementById('questionNext_5_0');
            questionNext_5_0.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onStart: () => {
                        wrapperBack.appendChild(wrapperBackCatFive);
                    },
                    onComplete: () => {
                        wrapperBack.removeChild(wrapperBackDialog);
                        wrapperBottomRight.removeChild(questionNext_5_0);
                        container.className = 'container';
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_5_1();
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
                    .from(wrapperBackCatFive, {
                        duration: 0.6,
                        delay: '-0.3',
                        autoAlpha: 0
                    })
                ;
            });
        });
    }
}

// Перышко Ясно-Сокола
function questionCat_5_1() {
    questionLoad.questionBlockText(
        'Только отец за заставу, а навстречу ему старичок несет коробочку. «Что несешь, старина?» - «Перышко Финиста ясна сокола». – «Что за него просишь?» - «Давай...». Что попросил старичок за пёрышко?',
        'ничего',
        'тысячу рублей',
        'исполнить просьбу');

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
        <img src="assets/games/magicFeather/images/mf_finistClearFalcon.png" alt="Финист Ясный Сокол">
    `;
    wrapperTop.innerHTML = `
        <h1 class="wrapper__top_title">Финист Ясный Сокол</h1>
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
            arrowNextClick.id = 'questionNext_5_1';
            const questionNext_5_1 = document.getElementById('questionNext_5_1');
            questionNext_5_1.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_5_1);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_5_2();
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

function questionCat_5_2() {
    questionLoad.questionBlockText(
        '«На другой день сестры поднялись на хитрости: вечером, когда на дворе совсем стемнело, подставили лестницу, ... на окне красной девицы».',
        'натыкали острых ножей да иголок',
        'подвесили капкан',
        'расставили сети');

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
            arrowNextClick.id = 'questionNext_5_2';
            const questionNext_5_2 = document.getElementById('questionNext_5_2');
            questionNext_5_2.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_5_2);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_5_3();
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

function questionCat_5_3() {
    questionLoad.questionBlockText(
        'Кто одарил красну-девицу забавами разными?',
        'старушка с сёстрами',
        'Баба–Яга',
        'Козьма Скоробогатый');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden')
    ;

    questionLoad.answerBlock(0, 'Правильно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_5_3';
            const questionNext_5_3 = document.getElementById('questionNext_5_3');
            questionNext_5_3.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_5_3);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_5_4();
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

function questionCat_5_4() {
    questionLoad.questionBlockText(
        'Долог был путь красны девицы. Три пары башмаков железных истоптала, три посоха чугунных изломала, … прежде чем нашла добра молодца!"',
        'три просвиры каменных изглодала',
        'три медных горшка извела',
        'три стальных наряда износила');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden')
    ;

    questionLoad.answerBlock(0, 'Точно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_5_4';
            const questionNext_5_4 = document.getElementById('questionNext_5_4');
            questionNext_5_4.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_5_4);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_5_5();
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

function questionCat_5_5() {
    questionLoad.questionBlockText(
        'На третий день сидит красная девица, держит в руках ... Загляделась просвирнина дочка. «Продай, красная девица, продай», - говорит, - мне свою забаву!». За какую забаву купила девица красавица третью ночь подле Финиста ясна сокола?',
        'золотое пяличко с иголочкой, что сама вышивает',
        'серебряное блюдечко и золотое яичко',
        'серебряное донце и золотое веретенце');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        containerPerson = document.querySelector('.container__person')
    ;

    questionLoad.answerBlock(0, 'Совершеноо верно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_5_5';
            const questionNext_5_5 = document.getElementById('questionNext_5_5');
            questionNext_5_5.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_5_5);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        container.removeChild(containerPerson);
                        wrapper.removeChild(containerQuest);
                        questionCat_5_6();
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

function questionCat_5_6() {
    arrowBackLoad.arrowNextHidden();

    const
        questionBack_2 = document.getElementById('questionBack_2'),
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        containerDifference = document.createElement('div'),
        findCandy = document.createElement('picture'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperBackCatFive = document.querySelector('.wrapper__back_category--five'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTopSubTitle = document.createElement('h2')
    ;

    containerDifference.className = 'container__difference';
    wrapperTopSubTitle.className = 'wrapper__top_title-sub';
    wrapperTopSubTitle.innerHTML = 'Найди леденец';
    wrapperTop.appendChild(wrapperTopSubTitle);
    findCandy.id = 'candySingle';
    containerDifference.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_FinistCFDifference.png" alt="Перышко Ясно-Сокола. Найди леденец">
    `;
    findCandy.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_FinistCFCandy.png" alt="Перышко Ясно-Сокола. Леденец">
    `;
    container.appendChild(containerDifference);
    containerDifference.appendChild(findCandy);
    gsap.from(containerDifference, {
        duration: 0.6,
        autoAlpha: 0
    });

    const
        wrapperTopTitle = document.querySelector('.wrapper__top_title'),
        candySingle = document.getElementById('candySingle')
    ;
    candySingle.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottomRight.appendChild(arrowNextClick);
                arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
                arrowNextClick.id = 'questionNext_5_6';
                const questionNext_5_6 = document.getElementById('questionNext_5_6');
                questionNext_5_6.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            wrapperBack.removeChild(wrapperBackCatFive);
                            wrapperTop.removeChild(wrapperTopTitle);
                            wrapperTop.removeChild(wrapperTopSubTitle);
                            wrapper.removeChild(wrapperTop);
                            wrapperBottomRight.removeChild(questionNext_5_6);
                            container.removeChild(containerDifference);
                            introDev();
                        }
                    });
                    tl
                        .to(containerDifference, {
                            autoAlpha: 0,
                            delay: '-0.1'
                        })
                        .to([
                            wrapperBackCatFive,
                            wrapperTop,
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
            .to(candySingle, {
                duration: 0.3,
                autoAlpha: 1
            })
        ;
    });
}