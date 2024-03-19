// Спальня

if (localStorage.getItem('bedRoomQuest_3_0') === null
    || localStorage.getItem('bedRoomQuest_3_0') >= 3
    || localStorage.getItem('bedRoomQuest_3_0') <= 3) {
    localStorage.setItem('bedRoomQuest_3_0', JSON.stringify(0));
}

function questionCat_3_0() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressOldApartment_3_0') === null ||
        localStorage.getItem('progressOldApartment_3_0') >= 0) {
        localStorage.setItem('progressOldApartment_3_0', JSON.stringify(0));
    }

    questionLoad.questionBlockFind();

    const
        containerFind = document.querySelector('.container-find'),
        containerQuestBottomCells = document.querySelector('.container-quest__bottom_cells'),
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        categoryBedRoomTop = document.getElementById('categoryBedRoomTop'),
        wrapperBack = document.querySelector('.wrapper__back')
    ;

    containerQuestBottomCells.innerHTML = `
        <li  class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemBedIcon_1.png" id="cellVar_1" alt="oa_itemBedIcon_1.png"></li>
        <li class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemBedIcon_2.png" id="cellVar_2" alt="oa_itemBedIcon_1
        2.png"></li>
        <li class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemBedIcon_3.png" id="cellVar_3" alt="oa_itemBedIcon_1
       3.png"></li>
    `;

    containerFind.innerHTML = `
        <div id="oa_itemBed_1"></div>
        <div id="oa_itemBed_2"></div>
        <div id="oa_itemBed_3"></div>
    `;

    const
        cellVar_1 = document.getElementById('cellVar_1'),
        cellVar_2 = document.getElementById('cellVar_2'),
        cellVar_3 = document.getElementById('cellVar_3'),
        cellVarList = [cellVar_1, cellVar_2, cellVar_3],
        itemBed_1 = document.getElementById('oa_itemBed_1'),
        itemBed_2 = document.getElementById('oa_itemBed_2'),
        itemBed_3 = document.getElementById('oa_itemBed_3'),
        itemBedList = [itemBed_1, itemBed_2, itemBed_3],
        containerFindBlock = document.querySelector('.container-find')
    ;

    let containerQuestItem = document.querySelector('.container-quest__item');
    gsap.from(containerQuestItem, {
        autoAlpha: 0,
        duration: '0.6',
        delay: '0.05'
    });

    for (let i = 0; i < itemBedList.length; i++) {
        itemBedList[i].addEventListener('click', () => {
            let bedRoomQuest_3_0 = JSON.parse(localStorage.getItem('bedRoomQuest_3_0'));
            let bedRoomQuest_3_0_sum = bedRoomQuest_3_0 + 1;
            localStorage.setItem('bedRoomQuest_3_0', JSON.stringify(bedRoomQuest_3_0_sum));
            gsap.to(cellVarList[i], {
                autoAlpha: 1,
                scale: 1
            });
            itemBedList[i].style.pointerEvents = 'none';

            if (bedRoomQuest_3_0_sum === 3) {
                localStorage.setItem('progressOldApartment_3_0', JSON.stringify(1));
                let progressOldApartment_3_0 = JSON.parse(localStorage.getItem('progressOldApartment_3_0'));
                let progressOldApartment_3 = JSON.parse(localStorage.getItem('progressOldApartment_3'));
                let progressOldApartmentSum = progressOldApartment_3 + progressOldApartment_3_0;
                localStorage.setItem('progressOldApartment_3', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        wrapper.removeChild(containerFindBlock);
                        wrapperBack.removeChild(categoryBedRoomTop);
                        setTimeout(() => {
                            questionCat_3_1();
                        }, questTimePaused);
                    }
                });
                tl
                    .to([categoryBedRoomTop, containerFindBlock], {
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

function questionCat_3_1() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressOldApartment_3_1') === null ||
        localStorage.getItem('progressOldApartment_3_1') >= 0) {
        localStorage.setItem('progressOldApartment_3_1', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_3_1.png',
        'Как называлось в то время учебное заведение, в которомучительствовала Анна Семёновна? Сейчас это школа № 13',
        'Кружок для девочек',
        'Гимназия княгини Хованской',
        'Женская школа при монастыре'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

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
                localStorage.setItem('progressOldApartment_3_1', JSON.stringify(1));
                let progressOldApartment_3_1 = JSON.parse(localStorage.getItem('progressOldApartment_3_1'));
                let progressOldApartment_3 = JSON.parse(localStorage.getItem('progressOldApartment_3'));
                let progressOldApartmentSum = progressOldApartment_3 + progressOldApartment_3_1;
                localStorage.setItem('progressOldApartment_3', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
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

    if (localStorage.getItem('progressOldApartment_3_2') === null ||
        localStorage.getItem('progressOldApartment_3_2') >= 0) {
        localStorage.setItem('progressOldApartment_3_2', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_3_2.png',
        'В каком магазине самарские рукодельницы приобретают швейную машинку?',
        'В магазине Гольдебаева',
        'В фирменном магазине',
        'Заказать в Германии'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

    questionLoad.answerBlock(answerWrightNum, 'Наряд можно было сшить на швейной машинке, купленной у Гольдебаева. У него же можно было научиться управляться с этим чудом техники. При магазине имелась и мастерская «для исправления швейных машин, даже старых, негодных, которые могут шить также, как шили новые»');

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
                localStorage.setItem('progressOldApartment_3_2', JSON.stringify(1));
                let progressOldApartment_3_2 = JSON.parse(localStorage.getItem('progressOldApartment_3_2'));
                let progressOldApartment_3 = JSON.parse(localStorage.getItem('progressOldApartment_3'));
                let progressOldApartmentSum = progressOldApartment_3 + progressOldApartment_3_2;
                localStorage.setItem('progressOldApartment_3', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
                    delay: 4,
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

    if (localStorage.getItem('progressOldApartment_3_3') === null ||
        localStorage.getItem('progressOldApartment_3_3') >= 0) {
        localStorage.setItem('progressOldApartment_3_3', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_3_3.png',
        'Шерсть из этого необыкновенного состава доступна самарским модницам:',
        'Синтетическая',
        'Сосновая',
        'Паутинная'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

    questionLoad.answerBlock(answerWrightNum,
        '«Лесная или сосновая шерсть приготовляется из волокон, заключающихся в хвое сосен. Применение находит для изготовления тканей, ношение которых будто бы должно иметь целебное значение»');

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
                localStorage.setItem('progressOldApartment_3_3', JSON.stringify(1));
                let progressOldApartment_3_3 = JSON.parse(localStorage.getItem('progressOldApartment_3_3'));
                let progressOldApartment_3 = JSON.parse(localStorage.getItem('progressOldApartment_3'));
                let progressOldApartmentSum = progressOldApartment_3 + progressOldApartment_3_3;
                localStorage.setItem('progressOldApartment_3', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
                    delay: 3,
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

    if (localStorage.getItem('progressOldApartment_3_4') === null ||
        localStorage.getItem('progressOldApartment_3_4') >= 0) {
        localStorage.setItem('progressOldApartment_3_4', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_3_4.png',
        'Как называется устройство для стирки белья, предложенное водопроводной и технической конторой «Донат»?',
        'Стиральная машина',
        'Устройство паровое прачечное',
        'Устройство прачечное механическое'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

    questionLoad.answerBlock(answerWrightNum, 'Водопроводная и техническая контора «Донат» предлагала устройство «паровых прачешень»');

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
                localStorage.setItem('progressOldApartment_3_4', JSON.stringify(1));
                let progressOldApartment_3_4 = JSON.parse(localStorage.getItem('progressOldApartment_3_4'));
                let progressOldApartment_3 = JSON.parse(localStorage.getItem('progressOldApartment_3'));
                let progressOldApartmentSum = progressOldApartment_3 + progressOldApartment_3_4;
                localStorage.setItem('progressOldApartment_3', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
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

    if (localStorage.getItem('progressOldApartment_3_5') === null ||
        localStorage.getItem('progressOldApartment_3_5') >= 0) {
        localStorage.setItem('progressOldApartment_3_5', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_3_5.png',
        'Парфюмерию и косметику самарчанки приобретают в:',
        'Аптеках',
        'Парикмахерских',
        'Частных лавках'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

    questionLoad.answerBlock(answerWrightNum, 'Косметику и парфюмерию дамы приобретают в аптеках. Именно аптекарские магазины предлагают «духи английские и французские во флаконах и в развес, личную пудру»');

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
                localStorage.setItem('progressOldApartment_3_5', JSON.stringify(1));
                let progressOldApartment_3_5 = JSON.parse(localStorage.getItem('progressOldApartment_3_5'));
                let progressOldApartment_3 = JSON.parse(localStorage.getItem('progressOldApartment_3'));
                let progressOldApartmentSum = progressOldApartment_3 + progressOldApartment_3_5;
                localStorage.setItem('progressOldApartment_3', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
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