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

function questionCat_2_0() {
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
                            questionCat_2_1();
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

function questionCat_2_1() {
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

    questionLoad.answerBlock(answerWrightNum,);

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
                            questionCat_2_2();
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

function questionCat_2_2() {
    let answerWrightNum = 1;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Второй магазин располагался на этой площади.Как называли её жители Самары?',
        'Ильинская',
        'Соборная',
        'Петропавловская'
    );

    questionLoad.answerBlock(answerWrightNum, '');

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
                            questionCat_2_3();
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

function questionCat_2_3() {
    let answerWrightNum = 2;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Третий магазин находится на этой улице:',
        'Водников',
        'Предтеченская',
        'Панская'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Улица Панская, в 1926 году переименованная в Ленинградскую');

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
                            questionCat_2_4();
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

function questionCat_2_4() {
    let answerWrightNum = 2;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'В этом примечательном здании нередко решаются финансовые дела семьи Ермолаевых. Скажите, что в нём располагается?',
        'Торговая палата',
        'Хлебная биржа',
        'Городской банк'
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
                    delay: 4,
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        setTimeout(() => {
                            questionCat_2_5();
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

function questionCat_2_5() {
    let answerWrightNum = 0;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Завершив работу с бумагами, Пётр Иванович обычно посещает:',
        'Мукомольную мельницу',
        'Хлебзавод',
        'Баню'
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
                    delay: 4,
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        setTimeout(() => {
                            // questionCat_1_5();
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