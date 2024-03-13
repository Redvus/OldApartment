// Гостиная

const
    questionLoad = new Question(),
    arrowBackLoad = new ArrowsAll(),
    questTimePaused = 300
;

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

function questionCat_1_0() {
    let answerWrightNum = 0;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Микроволновка с&nbsp;искусственным интеллектом',
        'печь с пирожками',
        'печь Бабы Яги',
        'печь Емели'
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
                            questionCat_1_1();
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

function questionCat_1_1() {
    let answerWrightNum = 2;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'В 1907 году губернию возглавляет:',
        'Константин Карлович Грот',
        'Пётр Владимирович Алабин',
        'Владимир Васильевич Якунин'
    );

    questionLoad.answerBlock(answerWrightNum,
        '14 губернатор, управлял самарским краем с 16 августа 1906 — 23 августа 1910');

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
                            questionCat_1_2();
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

function questionCat_1_2() {
    let answerWrightNum = 1;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'В доме часто звучала любимая композиция Петра Ивановича.<br />На стихи И. С. Тургенева, музыка Эраста Абазова',
        '«Как хорошо»',
        '«Утро туманное»',
        '«На сопках Манчьжурии»'
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
                            questionCat_1_3();
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

function questionCat_1_3() {
    let answerWrightNum = 1;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Анна Семёновна увлечена музыкой и сама часто музицирует за фортепиано. Ей нравятся произведения Баха  и одного российского композитора, на творчествокоторого оказала  значительное влияние поэзия А. Белого, В. Брюсова, А. Блока',
        'Пётр Чайковский',
        'Александр Скрябин',
        'Исаак Дунаевский'
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
                            questionCat_1_4();
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

function questionCat_1_4() {
    let answerWrightNum = 1;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Устройство для извлечения музыкальных звуков, обязательный атрибут в каждой гостиной:',
        'Патефон',
        'Граммофон',
        'Фонограф'
    );

    questionLoad.answerBlock(answerWrightNum,
        'В 1902 году в Риге открылась первая российская фабрика, где производились граммофоны. Спрос на предметы был большим. Его использовали не только для прослушивания музыки, но и в качестве предмета интерьера.');

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
                            questionCat_1_5();
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

function questionCat_1_5() {
    let answerWrightNum = 1;

    // if (localStorage.getItem('progressCat_1_0') === null ||
    //     localStorage.getItem('progressCat_1_0') >= 0) {
    //     localStorage.setItem('progressCat_1_0', JSON.stringify(0));
    // }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'За чтением этой газеты Пётр Иванович любит испить утренний чай. Сегодня она известна как Волжская коммуна:',
        '«Городской вестник»',
        '«Прибой»',
        '«Голос Самары»'
    );

    questionLoad.answerBlock(answerWrightNum,
        '9 (22) марта 1907 года самарский губернатор Владимир Якунин выдал гражданину города Орска М. Д. Спиридонову разрешение издавать в Самаре ежедневную газету «Прибой».');

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