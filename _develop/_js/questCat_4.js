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

function questionCat_4_0() {
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
                            questionCat_4_1();
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

function questionCat_4_1() {
    let answerWrightNum = 1;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Антонина любит возиться с «пузелями». Что же такое «пузеля»?',
        'Пупсы',
        'Пазлы',
        'Пудели'
    );

    questionLoad.answerBlock(answerWrightNum,
        'В Российской империи складывание фрагментов в одну картинку чрезвычайно популярны. Произносится на немецкий манер: «пузель»');

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
                            questionCat_4_2();
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

function questionCat_4_2() {
    let answerWrightNum = 0;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Словосочетание «Добчинский и Бобчинский» всегда приводит Антонину в восторг. Это словосочетание относится:',
        'к настольной игре',
        'к названию книги',
        'к названию фирмы, выпускающей игрушки'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Игру «Добчинский и Бобчинский», напоминающую домино назвали в честь городских помещиков, героев комедии Н.В. Гоголя «Ревизор»');

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
                            questionCat_4_3();
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

function questionCat_4_3() {
    let answerWrightNum = 2;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Любимая сказка Антонины «Аленький цветочек» Сергея Аксакова. А кто из художников сделал первые иллюстрации к этой сказке?',
        'Владимир Сутеев',
        'Иван Билибин',
        'Николай Богатов'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Первым иллюстратором был Николай Алексеевич Богатов, создавший несколько чёрно-белых рисунков для альманаха «Волшебный фонарь»');

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
                            questionCat_4_4();
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

function questionCat_4_4() {
    let answerWrightNum = 2;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Летом особое место уделяется играм в саду, их разнообразие поражает. Подскажите, какая игра появилась значительно позже 1907 года?',
        '«Жмурки»',
        '«Лапта»',
        '«Резиночки»'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Игра «резиночки» стала известна и обрела большую популярность лишь в 1990 – х годах');

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
                            questionCat_4_5();
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

function questionCat_4_5() {
    let answerWrightNum = 0;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Антонина в саду часто играет с обручем. Эта игра называется?',
        '«Серсо»',
        '«Кольцо»',
        '«Волчок»'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Серсо» - так назывался обруч, который катали особой палочкой, считалось, что эта игра развивает у девочек грацию и красоту движений');

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