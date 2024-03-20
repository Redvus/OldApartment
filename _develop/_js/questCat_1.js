// Гостиная

const
    questionLoad = new Question(),
    arrowBackLoad = new ArrowsAll(),
    questTimePaused = 300
;

if (localStorage.getItem('livingRoomQuest_1_0') === null
    || localStorage.getItem('livingRoomQuest_1_0') >= 3
    || localStorage.getItem('livingRoomQuest_1_0') <= 3) {
    localStorage.setItem('livingRoomQuest_1_0', JSON.stringify(0));
}

function questionCat_1_0() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressOldApartment_1_0') === null ||
        localStorage.getItem('progressOldApartment_1_0') >= 0) {
        localStorage.setItem('progressOldApartment_1_0', JSON.stringify(0));
    }

    questionLoad.questionBlockFind();

    const
        containerFind = document.querySelector('.container-find'),
        containerQuestBottomCells = document.querySelector('.container-quest__bottom_cells'),
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        categoryLivingRoomTop = document.getElementById('categoryLivingRoomTop'),
        wrapperBack = document.querySelector('.wrapper__back')
    ;

    containerQuestBottomCells.innerHTML = `
        <li  class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemLivingIcon_1.png" id="cellVar_1" alt=""></li>
        <li class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemLivingIcon_2.png" id="cellVar_2" alt=""></li>
        <li class="container-quest__bottom_icon"><img src="assets/games/oldApartment/images/oa_itemLivingIcon_3.png" id="cellVar_3" alt=""></li>
    `;

    containerFind.innerHTML = `
        <div id="oa_itemLiving_1"></div>
        <div id="oa_itemLiving_2"></div>
        <div id="oa_itemLiving_3"></div>
    `;

    const
        cellVar_1 = document.getElementById('cellVar_1'),
        cellVar_2 = document.getElementById('cellVar_2'),
        cellVar_3 = document.getElementById('cellVar_3'),
        cellVarList = [cellVar_1, cellVar_2, cellVar_3],
        itemLiving_1 = document.getElementById('oa_itemLiving_1'),
        itemLiving_2 = document.getElementById('oa_itemLiving_2'),
        itemLiving_3 = document.getElementById('oa_itemLiving_3'),
        itemLivingList = [itemLiving_1, itemLiving_2, itemLiving_3],
        containerFindBlock = document.querySelector('.container-find')
    ;

    let containerQuestItem = document.querySelector('.container-quest__item');
    gsap.from(containerQuestItem, {
        autoAlpha: 0,
        duration: '0.6',
        delay: '0.05'
    });

    for (let i = 0; i < itemLivingList.length; i++) {
        itemLivingList[i].addEventListener('click', () => {
            soundsLoad.rightAnswer('assets/games/oldApartment/sounds/rightAnswer_1.ogg');
            let livingRoomQuest_1_0 = JSON.parse(localStorage.getItem('livingRoomQuest_1_0'));
            let livingRoomQuest_1_0_sum = livingRoomQuest_1_0 + 1;
            localStorage.setItem('livingRoomQuest_1_0', JSON.stringify(livingRoomQuest_1_0_sum));
            gsap.to(cellVarList[i], {
                autoAlpha: 1,
                scale: 1
            });
            itemLivingList[i].style.pointerEvents = 'none';

            if (livingRoomQuest_1_0_sum === 3) {
                localStorage.setItem('progressOldApartment_1_0', JSON.stringify(1));
                let progressOldApartment_1 = JSON.parse(localStorage.getItem('progressOldApartment_1'));
                let progressOldApartment_1_0 = JSON.parse(localStorage.getItem('progressOldApartment_1_0'));
                let progressOldApartment_1Sum = progressOldApartment_1 + progressOldApartment_1_0;
                localStorage.setItem('progressOldApartment_1', JSON.stringify(progressOldApartment_1Sum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        wrapper.removeChild(containerFindBlock);
                        wrapperBack.removeChild(categoryLivingRoomTop);
                        setTimeout(() => {
                            questionCat_1_1();
                        }, questTimePaused);
                    }
                });
                tl
                    .to([categoryLivingRoomTop, containerFindBlock], {
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

function questionCat_1_1() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressOldApartment_1_1') === null ||
        localStorage.getItem('progressOldApartment_1_1') >= 0) {
        localStorage.setItem('progressOldApartment_1_1', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_1_1.png',
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
                localStorage.setItem('progressOldApartment_1_1', JSON.stringify(1));
                let progressOldApartment_1 = JSON.parse(localStorage.getItem('progressOldApartment_1'));
                let progressOldApartment_1_1 = JSON.parse(localStorage.getItem('progressOldApartment_1_1'));
                let progressOldApartment_1Sum = progressOldApartment_1 + progressOldApartment_1_1;
                localStorage.setItem('progressOldApartment_1', JSON.stringify(progressOldApartment_1Sum));

                let tl = gsap.timeline({
                    delay: 1,
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

    if (localStorage.getItem('progressOldApartment_1_2') === null ||
        localStorage.getItem('progressOldApartment_1_2') >= 0) {
        localStorage.setItem('progressOldApartment_1_2', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_1_2.png',
        'В доме часто звучала любимая композиция Петра Ивановича.<br />На стихи И. С. Тургенева, музыка Эраста Абазова',
        '«Как хорошо»',
        '«Утро туманное»',
        '«На сопках Манчьжурии»'
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
                localStorage.setItem('progressOldApartment_1_2', JSON.stringify(1));
                let progressOldApartment_1 = JSON.parse(localStorage.getItem('progressOldApartment_1'));
                let progressOldApartment_1_2 = JSON.parse(localStorage.getItem('progressOldApartment_1_2'));
                let progressOldApartment_1Sum = progressOldApartment_1 + progressOldApartment_1_2;
                localStorage.setItem('progressOldApartment_1', JSON.stringify(progressOldApartment_1Sum));

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

    if (localStorage.getItem('progressOldApartment_1_3') === null ||
        localStorage.getItem('progressOldApartment_1_3') >= 0) {
        localStorage.setItem('progressOldApartment_1_3', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_1_3.png',
        'Анна Семёновна увлечена музыкой и сама часто музицирует за фортепиано. Ей нравятся произведения Баха и одного российского композитора, на творчествокоторого оказала  значительное влияние поэзия А. Белого, В. Брюсова, А. Блока',
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
                localStorage.setItem('progressOldApartment_1_3', JSON.stringify(1));
                let progressOldApartment_1 = JSON.parse(localStorage.getItem('progressOldApartment_1'));
                let progressOldApartment_1_3 = JSON.parse(localStorage.getItem('progressOldApartment_1_3'));
                let progressOldApartment_1Sum = progressOldApartment_1 + progressOldApartment_1_3;
                localStorage.setItem('progressOldApartment_1', JSON.stringify(progressOldApartment_1Sum));

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

    if (localStorage.getItem('progressOldApartment_1_4') === null ||
        localStorage.getItem('progressOldApartment_1_4') >= 0) {
        localStorage.setItem('progressOldApartment_1_4', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_1_4.png',
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
                localStorage.setItem('progressOldApartment_1_4', JSON.stringify(1));
                let progressOldApartment_1 = JSON.parse(localStorage.getItem('progressOldApartment_1'));
                let progressOldApartment_1_4 = JSON.parse(localStorage.getItem('progressOldApartment_1_4'));
                let progressOldApartment_1Sum = progressOldApartment_1 + progressOldApartment_1_4;
                localStorage.setItem('progressOldApartment_1', JSON.stringify(progressOldApartment_1Sum));

                let tl = gsap.timeline({
                    delay: 3,
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

    if (localStorage.getItem('progressOldApartment_1_5') === null ||
        localStorage.getItem('progressOldApartment_1_5') >= 0) {
        localStorage.setItem('progressOldApartment_1_5', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'oa_quest_1_5.png',
        'За чтением этой газеты Пётр Иванович любит испить утренний чай. Сегодня она известна как Волжская коммуна:',
        '«Городской вестник»',
        '«Прибой»',
        '«Голос Самары»'
    );
    const questTopImage = document.querySelector('.container-quest__top_image');
    questTopImage.style.height = '73%';

    questionLoad.answerBlock(answerWrightNum,
        '9 (22) марта 1907 года самарский губернатор Владимир Якунин выдал гражданину города Орска М.&nbsp;Д.&nbsp;Спиридонову разрешение издавать в Самаре ежедневную газету «Прибой».');

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
                localStorage.setItem('progressOldApartment_1_5', JSON.stringify(1));
                let progressOldApartment_1 = JSON.parse(localStorage.getItem('progressOldApartment_1'));
                let progressOldApartment_1_5 = JSON.parse(localStorage.getItem('progressOldApartment_1_5'));
                let progressOldApartment_1Sum = progressOldApartment_1 + progressOldApartment_1_5;
                localStorage.setItem('progressOldApartment_1', JSON.stringify(progressOldApartment_1Sum));

                let tl = gsap.timeline({
                    delay: 3,
                    onComplete: () => {
                        wrapper.removeChild(containerQuestBlock);
                        wrapperBack.removeChild(wrapperCatBack);
                        wrapperTop.removeChild(wrapperCatTitle);
                        setTimeout(() => {
                            catOfficeRoomLoad();
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
                        // scale: 1.05
                    })
                ;
            }
        });
    }
}