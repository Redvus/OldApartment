// Детская

if (localStorage.getItem('childRoomQuest_4_0') === null
    || localStorage.getItem('childRoomQuest_4_0') >= 3
    || localStorage.getItem('childRoomQuest_4_0') <= 3) {
    localStorage.setItem('childRoomQuest_4_0', JSON.stringify(0));
}

function questionCat_4_0() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressOldApartment_4_0') === null ||
        localStorage.getItem('progressOldApartment_4_0') >= 0) {
        localStorage.setItem('progressOldApartment_4_0', JSON.stringify(0));
    }

    questionLoad.questionBlockFind();

    const
        containerFind = document.querySelector('.container-find'),
        containerQuestBottomCells = document.querySelector('.container-quest__bottom_cells'),
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        categoryChildRoomTop = document.getElementById('categoryChildRoomTop'),
        wrapperBack = document.querySelector('.wrapper__back')
    ;

    containerQuestBottomCells.innerHTML = `
        <li  class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemChildIcon_1.png" id="cellVar_1" alt="oa_itemChildIcon_1.png"></li>
        <li class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemChildIcon_2.png" id="cellVar_2" alt="oa_itemChildIcon_2.png"></li>
        <li class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemChildIcon_3.png" id="cellVar_3" alt="oa_itemChildIcon_3.png"></li>
    `;

    containerFind.innerHTML = `
        <div id="oa_itemChild_1"></div>
        <div id="oa_itemChild_2"></div>
        <div id="oa_itemChild_3"></div>
    `;

    const
        cellVar_1 = document.getElementById('cellVar_1'),
        cellVar_2 = document.getElementById('cellVar_2'),
        cellVar_3 = document.getElementById('cellVar_3'),
        cellVarList = [cellVar_1, cellVar_2, cellVar_3],
        itemChild_1 = document.getElementById('oa_itemChild_1'),
        itemChild_2 = document.getElementById('oa_itemChild_2'),
        itemChild_3 = document.getElementById('oa_itemChild_3'),
        itemChildList = [itemChild_1, itemChild_2, itemChild_3],
        containerFindBlock = document.querySelector('.container-find')
    ;

    let containerQuestItem = document.querySelector('.container-quest__item');
    gsap.from(containerQuestItem, {
        autoAlpha: 0,
        duration: '0.6',
        delay: '0.05'
    });

    for (let i = 0; i < itemChildList.length; i++) {
        itemChildList[i].addEventListener('click', () => {
            soundsLoad.rightAnswer('assets/games/oldApartment/sounds/rightAnswer_1.ogg');
            let childRoomQuest_4_0 = JSON.parse(localStorage.getItem('childRoomQuest_4_0'));
            let childRoomQuest_4_0_sum = childRoomQuest_4_0 + 1;
            localStorage.setItem('childRoomQuest_4_0', JSON.stringify(childRoomQuest_4_0_sum));
            gsap.to(cellVarList[i], {
                autoAlpha: 1,
                scale: 1
            });
            itemChildList[i].style.pointerEvents = 'none';

            if (childRoomQuest_4_0_sum === 3) {
                localStorage.setItem('progressOldApartment_4_0', JSON.stringify(1));
                let progressOldApartment_4_0 = JSON.parse(localStorage.getItem('progressOldApartment_4_0'));
                let progressOldApartment_4 = JSON.parse(localStorage.getItem('progressOldApartment_4'));
                let progressOldApartmentSum = progressOldApartment_4 + progressOldApartment_4_0;
                localStorage.setItem('progressOldApartment_4', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        wrapper.removeChild(containerFindBlock);
                        wrapperBack.removeChild(categoryChildRoomTop);
                        setTimeout(() => {
                            questionCat_4_1();
                        }, questTimePaused);
                    }
                });
                tl
                    .to([categoryChildRoomTop, containerFindBlock], {
                        duration: '0.3',
                        delay: '0.3',
                        autoAlpha: 0
                    })
                    .to(containerQuestBottom, {
                        autoAlpha: 0,
                        delay: '0.3',
                        y: '100%'
                    })
                ;
            }
        });
    }
}

function questionCat_4_1() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressOldApartment_4_1') === null ||
        localStorage.getItem('progressOldApartment_4_1') >= 0) {
        localStorage.setItem('progressOldApartment_4_1', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_4_1.png',
        'Антонина любит возиться с «пузелями». Что же такое «пузеля»?',
        'Пупсы',
        'Пазлы',
        'Пудели'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

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
                localStorage.setItem('progressOldApartment_4_1', JSON.stringify(1));
                let progressOldApartment_4_1 = JSON.parse(localStorage.getItem('progressOldApartment_4_1'));
                let progressOldApartment_4 = JSON.parse(localStorage.getItem('progressOldApartment_4'));
                let progressOldApartmentSum = progressOldApartment_4 + progressOldApartment_4_1;
                localStorage.setItem('progressOldApartment_4', JSON.stringify(progressOldApartmentSum));

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

    if (localStorage.getItem('progressOldApartment_4_2') === null ||
        localStorage.getItem('progressOldApartment_4_2') >= 0) {
        localStorage.setItem('progressOldApartment_4_2', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_4_2.png',
        'Словосочетание «Добчинский и Бобчинский» всегда приводит Антонину в восторг. Это словосочетание относится:',
        'к настольной игре',
        'к названию книги',
        'к названию фирмы, выпускающей игрушки'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

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
                localStorage.setItem('progressOldApartment_4_2', JSON.stringify(1));
                let progressOldApartment_4_2 = JSON.parse(localStorage.getItem('progressOldApartment_4_2'));
                let progressOldApartment_4 = JSON.parse(localStorage.getItem('progressOldApartment_4'));
                let progressOldApartmentSum = progressOldApartment_4 + progressOldApartment_4_2;
                localStorage.setItem('progressOldApartment_4', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
                    delay: 3,
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

    if (localStorage.getItem('progressOldApartment_4_3') === null ||
        localStorage.getItem('progressOldApartment_4_3') >= 0) {
        localStorage.setItem('progressOldApartment_4_3', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_4_3.png',
        'Любимая сказка Антонины «Аленький цветочек» Сергея Аксакова. А кто из художников сделал первые иллюстрации к этой сказке?',
        'Владимир Сутеев',
        'Иван Билибин',
        'Николай Богатов'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

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
                localStorage.setItem('progressOldApartment_4_3', JSON.stringify(1));
                let progressOldApartment_4_3 = JSON.parse(localStorage.getItem('progressOldApartment_4_3'));
                let progressOldApartment_4 = JSON.parse(localStorage.getItem('progressOldApartment_4'));
                let progressOldApartmentSum = progressOldApartment_4 + progressOldApartment_4_3;
                localStorage.setItem('progressOldApartment_4', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
                    delay: 3,
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

    if (localStorage.getItem('progressOldApartment_4_4') === null ||
        localStorage.getItem('progressOldApartment_4_4') >= 0) {
        localStorage.setItem('progressOldApartment_4_4', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_4_4.png',
        'Летом особое место уделяется играм в саду, их разнообразие поражает. Подскажите, какая игра появилась значительно позже 1907 года?',
        '«Жмурки»',
        '«Лапта»',
        '«Резиночки»'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

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
                localStorage.setItem('progressOldApartment_4_4', JSON.stringify(1));
                let progressOldApartment_4_4 = JSON.parse(localStorage.getItem('progressOldApartment_4_4'));
                let progressOldApartment_4 = JSON.parse(localStorage.getItem('progressOldApartment_4'));
                let progressOldApartmentSum = progressOldApartment_4 + progressOldApartment_4_4;
                localStorage.setItem('progressOldApartment_4', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
                    delay: 2,
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

    if (localStorage.getItem('progressOldApartment_4_5') === null ||
        localStorage.getItem('progressOldApartment_4_5') >= 0) {
        localStorage.setItem('progressOldApartment_4_5', JSON.stringify(0));
    }

    const finalBlock = new Settings();

    questionLoad.questionBlock(
        'oa_quest_4_5.png',
        'Антонина в саду часто играет с обручем. Эта игра называется?',
        '«Серсо»',
        '«Кольцо»',
        '«Волчок»'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

    questionLoad.answerBlock(answerWrightNum,
        '«Серсо» - так назывался обруч, который катали особой палочкой, считалось, что эта игра развивает у девочек грацию и красоту движений');

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
                localStorage.setItem('progressOldApartment_4_5', JSON.stringify(1));
                let
                    progressOldApartment_1 = JSON.parse(localStorage.getItem('progressOldApartment_1')),
                    progressOldApartment_2 = JSON.parse(localStorage.getItem('progressOldApartment_2')),
                    progressOldApartment_3 = JSON.parse(localStorage.getItem('progressOldApartment_3')),
                    progressOldApartment_4 = JSON.parse(localStorage.getItem('progressOldApartment_4')),
                    progressOldApartment = JSON.parse(localStorage.getItem('progressOldApartment'))
                ;
                let progressOldApartment_4_5 = JSON.parse(localStorage.getItem('progressOldApartment_4_5'));
                let progressOldApartment_4Sum = progressOldApartment_4 + progressOldApartment_4_5;
                localStorage.setItem('progressOldApartment_4', JSON.stringify(progressOldApartment_4Sum));
                let progressOldApartment_4End = JSON.parse(localStorage.getItem('progressOldApartment_4'));
                let progressOldApartmentSum = progressOldApartment_1 + progressOldApartment_2 + progressOldApartment_3 + progressOldApartment_4End;
                localStorage.setItem('progressOldApartment', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
                    delay: 3,
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        wrapperBack.removeChild(wrapperCatBack);
                        wrapperTop.removeChild(wrapperCatTitle);
                        finalBlock.finalBlock();
                        soundsLoad.rightAnswer('assets/games/oldApartment/sounds/gameOver.ogg');
                        const
                            settingsBlock = document.querySelector('.wrapper__lightbox_block--final'),
                            settingsTextWrong = document.createElement('div'),
                            settingsTextWright = document.createElement('div')
                        ;
                        settingsTextWrong.innerHTML = `
                            <p>Вы молодец, но можно лучше, попробуйте еще раз, все получится!</p>
                        `;
                        settingsTextWright.innerHTML = `
                            <p>Поздравляем, вы прошли игру! Даже если были допущены ошибки, вы познакомились с кусочком истории нашего города.</p>
                        `;

                        // if (progressOldApartment < 24) {
                        //     settingsBlock.appendChild(settingsTextWrong);
                        // } else if (progressOldApartment === 24) {
                        //     settingsBlock.appendChild(settingsTextWright);
                        // }

                        settingsBlock.appendChild(settingsTextWright);

                        const finalButtonBlock = document.getElementById('finalButton');
                        finalButtonBlock.addEventListener('click', () => {
                            const
                                settingsBack = document.querySelector('.wrapper__lightbox'),
                                settingsBlock = document.querySelector('.wrapper__lightbox_block--final')
                            ;
                            let tl = gsap.timeline({
                                onComplete: () => {
                                    wrapper.removeChild(settingsBack);
                                    familyDev();
                                }
                            });
                            tl
                                .to(settingsBack, {
                                    duration: 0.3,
                                    autoAlpha: 0
                                })
                                .to(settingsBlock, {
                                    duration: 0.3,
                                    delay: '-0.07',
                                    y: '-5%',
                                    autoAlpha: 0
                                })
                            ;
                        });
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