// Кабинет

// if (localStorage.getItem('mfDifferenceQuest_1_6') === null
//     || localStorage.getItem('mfDifferenceQuest_1_6') >= 7
//     || localStorage.getItem('mfDifferenceQuest_1_6') <= 7) {
//     localStorage.setItem('mfDifferenceQuest_1_6', JSON.stringify(0));
// }
//
// if (localStorage.getItem('progressCat') === null ||
//     localStorage.getItem('progressCat') >= 0) {
//     localStorage.setItem('progressCat', JSON.stringify(0));
// }
//
// if (localStorage.getItem('progressCat_1') === null ||
//     localStorage.getItem('progressCat_1') >= 0) {
//     localStorage.setItem('progressCat_1', JSON.stringify(0));
// }

function questionCat_3_0() {
    let answerWrightNum = 0;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Пётр Иванович свою продукцию поставляет в магазины, которые расположеныв центре города. Назовите эту площадь Самары и её современное название(если оно менялось)',
        'Хлебная площадь',
        'Алексеевская площадь',
        'Красная площадь'
    );

    questionLoad.answerBlock(0);

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestTop = document.querySelector('.container-quest__top'),
        containerQuestBottom = document.querySelector('.container-quest__bottom')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                // let progressCat_1_0 = JSON.parse(localStorage.getItem('progressCat_1_0'));
                // let progressCat_1 = progressCat_1_0 + 1;
                // let progressCatSum = progressCat_1 + progressCat_1_0;

                // localStorage.setItem('progressCat_1_0', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat_1', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat', JSON.stringify(progressCatSum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        setTimeout(() => {
                            questionCat_3_1();
                        }, questTimePaused);
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
            }
        });
    }

}

function questionCat_3_1() {
    let answerWrightNum = 1;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Как называлось в то время учебное заведение, в которомучительствовала Анна Семёновна? Сейчас это школа № 13',
        'Кружок для девочек',
        'Гимназия княгини Хованской',
        'Женская школа при монастыре'
    );

    questionLoad.answerBlock(answerWrightNum);

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestTop = document.querySelector('.container-quest__top'),
        containerQuestBottom = document.querySelector('.container-quest__bottom')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                // let progressCat_1_0 = JSON.parse(localStorage.getItem('progressCat_1_0'));
                // let progressCat_1 = progressCat_1_0 + 1;
                // let progressCatSum = progressCat_1 + progressCat_1_0;

                // localStorage.setItem('progressCat_1_0', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat_1', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat', JSON.stringify(progressCatSum));

                let tl = gsap.timeline({
                    delay: 3,
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        setTimeout(() => {
                            questionCat_3_2();
                        }, questTimePaused);
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
            }
        });
    }
}

function questionCat_3_2() {
    let answerWrightNum = 0;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'В каком магазине самарские рукодельницы приобретают швейную машинку?',
        'в магазине Гольдебаева',
        'в фирменном магазине',
        'заказать в Германии'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Наряд можно было сшить на швейной машинке, купленной у Гольдебаева. У него же можно было научиться управляться с этим чудом техники. При магазине имелась и мастерская «для исправления швейных машин, даже старых, негодных, которые могут шить также, как шили новые».');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestTop = document.querySelector('.container-quest__top'),
        containerQuestBottom = document.querySelector('.container-quest__bottom')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                // let progressCat_1_0 = JSON.parse(localStorage.getItem('progressCat_1_0'));
                // let progressCat_1 = progressCat_1_0 + 1;
                // let progressCatSum = progressCat_1 + progressCat_1_0;

                // localStorage.setItem('progressCat_1_0', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat_1', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat', JSON.stringify(progressCatSum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        setTimeout(() => {
                            questionCat_3_3();
                        }, questTimePaused);
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
            }
        });
    }
}

function questionCat_3_3() {
    let answerWrightNum = 1;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Шерсть из этого необыкновенного состава доступна самарским модницам:',
        'Cинтетическая',
        'Cосновая',
        'Панская'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Лесная или сосновая шерсть приготовляется из волокон, заключающихся в хвое сосен. Применение находит для изготовления тканей, ношение которых будто бы должно иметь целебное значение');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestTop = document.querySelector('.container-quest__top'),
        containerQuestBottom = document.querySelector('.container-quest__bottom')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                // let progressCat_1_0 = JSON.parse(localStorage.getItem('progressCat_1_0'));
                // let progressCat_1 = progressCat_1_0 + 1;
                // let progressCatSum = progressCat_1 + progressCat_1_0;

                // localStorage.setItem('progressCat_1_0', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat_1', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat', JSON.stringify(progressCatSum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        setTimeout(() => {
                            questionCat_3_4();
                        }, questTimePaused);
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
            }
        });
    }
}

function questionCat_3_4() {
    let answerWrightNum = 1;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Как называется устройство для стирки белья, предложенное водопроводной и технической конторой «Донат»?',
        'Стиральная машина',
        'Устройство паровое прачечное',
        'Устройство прачечное механическое'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Водопроводная и техническая контора «Донат» предлагала устройство «паровых прачешень»');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestTop = document.querySelector('.container-quest__top'),
        containerQuestBottom = document.querySelector('.container-quest__bottom')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                // let progressCat_1_0 = JSON.parse(localStorage.getItem('progressCat_1_0'));
                // let progressCat_1 = progressCat_1_0 + 1;
                // let progressCatSum = progressCat_1 + progressCat_1_0;

                // localStorage.setItem('progressCat_1_0', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat_1', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat', JSON.stringify(progressCatSum));

                let tl = gsap.timeline({
                    delay: 4,
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        setTimeout(() => {
                            questionCat_3_5();
                        }, questTimePaused);
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
            }
        });
    }
}

function questionCat_3_5() {
    let answerWrightNum = 0;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Парфюмерию и косметику самарчанки приобретают в:',
        'Аптеках',
        'Парикмахерских',
        'Частных лавках'
    );

    questionLoad.answerBlock(answerWrightNum);

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestTop = document.querySelector('.container-quest__top'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperCatBack = document.querySelector('.wrapper__back_category'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperCatTitle = document.querySelector('.wrapper__top_title')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                // let progressCat_1_0 = JSON.parse(localStorage.getItem('progressCat_1_0'));
                // let progressCat_1 = progressCat_1_0 + 1;
                // let progressCatSum = progressCat_1 + progressCat_1_0;

                // localStorage.setItem('progressCat_1_0', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat_1', JSON.stringify(progressCat_1));
                // localStorage.setItem('progressCat', JSON.stringify(progressCatSum));

                let tl = gsap.timeline({
                    delay: 4,
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        wrapperBack.removeChild(wrapperCatBack);
                        wrapperTop.removeChild(wrapperCatTitle);
                        setTimeout(() => {
                            catChildRoomLoad();
                        }, questTimePaused);
                    }
                });
                tl
                    .to([
                        containerQuestTop,
                        containerQuestBottom], {
                        autoAlpha: 0,
                        delay: '1',
                        y: '100%',
                        stagger: '0.3'
                    })
                    .to(wrapperCatTitle, {
                        duration: '0.3',
                        delay: '-0.1',
                        autoAlpha: 0,
                        y: '-10%'
                    })
                    .to(wrapperCatBack, {
                        autoAlpha: 0,
                        duration: '0.6',
                        delay: '-0.1',
                        scale: 1.05
                    })
                ;
            }
        });
    }
}