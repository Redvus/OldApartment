// Кабинет

if (localStorage.getItem('officeRoomQuest_2_0') === null
    || localStorage.getItem('officeRoomQuest_2_0') >= 3
    || localStorage.getItem('officeRoomQuest_2_0') <= 3) {
    localStorage.setItem('officeRoomQuest_2_0', JSON.stringify(0));
}

function questionCat_2_0() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressOldApartment_2_0') === null ||
        localStorage.getItem('progressOldApartment_2_0') >= 0) {
        localStorage.setItem('progressOldApartment_2_0', JSON.stringify(0));
    }

    questionLoad.questionBlockFind();

    const
        containerFind = document.querySelector('.container-find'),
        containerQuestBottomCells = document.querySelector('.container-quest__bottom_cells'),
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        categoryOfficeRoomTop = document.getElementById('categoryOfficeRoomTop'),
        wrapperBack = document.querySelector('.wrapper__back')
    ;

    containerQuestBottomCells.innerHTML = `
        <li  class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemOfficeIcon_1.png" id="cellVar_1" alt="oa_itemOfficeIcon_1.png"></li>
        <li class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemOfficeIcon_2.png" id="cellVar_2" alt="oa_itemOfficeIcon_1
        2.png"></li>
        <li class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemOfficeIcon_3.png" id="cellVar_3" alt="oa_itemOfficeIcon_1
       3.png"></li>
    `;

    containerFind.innerHTML = `
        <div id="oa_itemOffice_1"></div>
        <div id="oa_itemOffice_2"></div>
        <div id="oa_itemOffice_3"></div>
    `;

    const
        cellVar_1 = document.getElementById('cellVar_1'),
        cellVar_2 = document.getElementById('cellVar_2'),
        cellVar_3 = document.getElementById('cellVar_3'),
        cellVarList = [cellVar_1, cellVar_2, cellVar_3],
        itemOffice_1 = document.getElementById('oa_itemOffice_1'),
        itemOffice_2 = document.getElementById('oa_itemOffice_2'),
        itemOffice_3 = document.getElementById('oa_itemOffice_3'),
        itemOfficeList = [itemOffice_1, itemOffice_2, itemOffice_3],
        containerFindBlock = document.querySelector('.container-find')
    ;

    let containerQuestItem = document.querySelector('.container-quest__item');
    gsap.from(containerQuestItem, {
        autoAlpha: 0,
        duration: '0.6',
        delay: '0.05'
    });

    for (let i = 0; i < itemOfficeList.length; i++) {
        itemOfficeList[i].addEventListener('click', () => {
            let officeRoomQuest_2_0 = JSON.parse(localStorage.getItem('officeRoomQuest_2_0'));
            let officeRoomQuest_2_0_sum = officeRoomQuest_2_0 + 1;
            localStorage.setItem('officeRoomQuest_2_0', JSON.stringify(officeRoomQuest_2_0_sum));
            gsap.to(cellVarList[i], {
                autoAlpha: 1,
                scale: 1
            });
            itemOfficeList[i].style.pointerEvents = 'none';

            if (officeRoomQuest_2_0_sum === 3) {
                localStorage.setItem('progressOldApartment_2_0', JSON.stringify(1));
                let progressOldApartment_2 = JSON.parse(localStorage.getItem('progressOldApartment_2'));
                let progressOldApartment_2_0 = JSON.parse(localStorage.getItem('progressOldApartment_2_0'));
                let progressOldApartment_2Sum = progressOldApartment_2 + progressOldApartment_2_0;
                localStorage.setItem('progressOldApartment_2', JSON.stringify(progressOldApartment_2Sum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        wrapper.removeChild(containerFindBlock);
                        wrapperBack.removeChild(categoryOfficeRoomTop);
                        setTimeout(() => {
                            questionCat_2_1();
                        }, questTimePaused);
                    }
                });
                tl
                    .to([categoryOfficeRoomTop, containerFindBlock], {
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

function questionCat_2_1() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressOldApartment_2_1') === null ||
        localStorage.getItem('progressOldApartment_2_1') >= 0) {
        localStorage.setItem('progressOldApartment_2_1', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Пётр Иванович свою продукцию поставляет в магазины, которые расположеныв центре города. Назовите эту площадь Самары и её современное название(если оно менялось)',
        'Хлебная площадь',
        'Алексеевская площадь',
        'Красная площадь'
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
                localStorage.setItem('progressOldApartment_2_1', JSON.stringify(1));
                let progressOldApartment_2_1 = JSON.parse(localStorage.getItem('progressOldApartment_2_1'));
                let progressOldApartment_2 = JSON.parse(localStorage.getItem('progressOldApartment_2'));
                let progressOldApartmentSum = progressOldApartment_2 + progressOldApartment_2_1;
                localStorage.setItem('progressOldApartment_2', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
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

    if (localStorage.getItem('progressOldApartment_2_2') === null ||
        localStorage.getItem('progressOldApartment_2_2') >= 0) {
        localStorage.setItem('progressOldApartment_2_2', JSON.stringify(0));
    }

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
                localStorage.setItem('progressOldApartment_2_2', JSON.stringify(1));
                let progressOldApartment_2_2 = JSON.parse(localStorage.getItem('progressOldApartment_2_2'));
                let progressOldApartment_2 = JSON.parse(localStorage.getItem('progressOldApartment_2'));
                let progressOldApartmentSum = progressOldApartment_2 + progressOldApartment_2_2;
                localStorage.setItem('progressOldApartment_2', JSON.stringify(progressOldApartmentSum));

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

    if (localStorage.getItem('progressOldApartment_2_3') === null ||
        localStorage.getItem('progressOldApartment_2_3') >= 0) {
        localStorage.setItem('progressOldApartment_2_3', JSON.stringify(0));
    }

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
                localStorage.setItem('progressOldApartment_2_3', JSON.stringify(1));
                let progressOldApartment_2_3 = JSON.parse(localStorage.getItem('progressOldApartment_2_3'));
                let progressOldApartment_2 = JSON.parse(localStorage.getItem('progressOldApartment_2'));
                let progressOldApartmentSum = progressOldApartment_2 + progressOldApartment_2_3;
                localStorage.setItem('progressOldApartment_2', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
                    delay: 2,
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

    if (localStorage.getItem('progressOldApartment_2_4') === null ||
        localStorage.getItem('progressOldApartment_2_4') >= 0) {
        localStorage.setItem('progressOldApartment_2_4', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'В этом примечательном здании нередко решаются финансовые дела семьи Ермолаевых. Скажите, что в нём располагается?',
        'Торговая палата',
        'Хлебная биржа',
        'Городской банк'
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
                localStorage.setItem('progressOldApartment_2_4', JSON.stringify(1));
                let progressOldApartment_2_4 = JSON.parse(localStorage.getItem('progressOldApartment_2_4'));
                let progressOldApartment_2 = JSON.parse(localStorage.getItem('progressOldApartment_2'));
                let progressOldApartmentSum = progressOldApartment_2 + progressOldApartment_2_4;
                localStorage.setItem('progressOldApartment_2', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
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

    if (localStorage.getItem('progressOldApartment_2_5') === null ||
        localStorage.getItem('progressOldApartment_2_5') >= 0) {
        localStorage.setItem('progressOldApartment_2_5', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_grammofon.png',
        'Завершив работу с бумагами, Пётр Иванович обычно посещает:',
        'Мукомольную мельницу',
        'Хлебзавод',
        'Баню'
    );

    questionLoad.answerBlock(answerWrightNum, '');

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
                localStorage.setItem('progressOldApartment_2_5', JSON.stringify(1));
                let progressOldApartment_2_5 = JSON.parse(localStorage.getItem('progressOldApartment_2_5'));
                let progressOldApartment_2 = JSON.parse(localStorage.getItem('progressOldApartment_2'));
                let progressOldApartmentSum = progressOldApartment_2 + progressOldApartment_2_5;
                localStorage.setItem('progressOldApartment_2', JSON.stringify(progressOldApartmentSum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        wrapperBack.removeChild(wrapperCatBack);
                        wrapperTop.removeChild(wrapperCatTitle);
                        setTimeout(() => {
                            catBedRoomLoad();
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