if (localStorage.getItem('mfDifferenceQuest_3_6') === null
    || localStorage.getItem('mfDifferenceQuest_3_6') >= 8
    || localStorage.getItem('mfDifferenceQuest_3_6') <= 8) {
    localStorage.setItem('mfDifferenceQuest_3_6', JSON.stringify(0));
}

function questionCat_3_0() {
    questionLoad.questionBlock();
    questionLoad.questionBlockText(
        'Говорящий гаджет для трансляции сторис того, что в мире происходит:',
        'яблочко на блюдечке',
        'волшебное зеркальце',
        'сосуд с волшебным варевом');

    const
        wrapperBottom = document.createElement('div'),
        containerAbout = document.querySelector('.container__wrapper_about'),
        wrapperTopAbout = document.querySelector('.wrapper__top'),
        wrapperBackDialog = document.createElement('div'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperBackCatThird = document.createElement('div'),
        containerVovka = document.getElementById('containerVovka'),
        containerNestor = document.getElementById('containerNestor')
    ;

    arrowBackLoad.arrowNextHidden();
    wrapperBackCatThird.className = 'wrapper__back_category wrapper__back_category--third';
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
            arrowNextClick.id = 'questionNext_3_0';
            const questionNext_3_0 = document.getElementById('questionNext_3_0');
            questionNext_3_0.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onStart: () => {
                        wrapperBack.appendChild(wrapperBackCatThird);
                    },
                    onComplete: () => {
                        wrapperBack.removeChild(wrapperBackDialog);
                        wrapperBottomRight.removeChild(questionNext_3_0);
                        container.className = 'container';
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_3_1();
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
                    .from(wrapperBackCatThird, {
                        duration: 0.6,
                        delay: '-0.3',
                        autoAlpha: 0
                    })
                ;
            });
        });
    }
}

// Марья Морьевна
function questionCat_3_1() {
    questionLoad.questionBlockText(
        '«Только пришли во дворец - как ударил гром, распалася крыша, раздвоился потолок, и влетел орел; ударился об пол и сделался добрым молодцем: «Здравствуй, Иван-царевич! Прежде я гостем ходил, а теперь пришел сватом». И посватал...',
        'Ольгу-царевну',
        'Марью–царевну',
        'Анну–царевну');

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
        <img src="assets/games/magicFeather/images/mf_mariaMorevna.png" alt="Марья Морьевна">
    `;
    wrapperTop.innerHTML = `
        <h1 class="wrapper__top_title">Марья Морьевна</h1>
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
            arrowNextClick.id = 'questionNext_3_1';
            const questionNext_3_1 = document.getElementById('questionNext_3_1');
            questionNext_3_1.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_3_1);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_3_2();
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

function questionCat_3_2() {
    questionLoad.questionBlockText(
        'Марья Моревна, прекрасная королевна на войну собирается; покидает она на Ивана-царевича все хозяйство и приказывает: «Везде ходи, за всем присматривай; только в … не моги заглядывать!»',
        'в чулан',
        'в подвал',
        'в пещеру');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden')
    ;

    questionLoad.answerBlock(0, 'Именно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_3_2';
            const questionNext_3_2 = document.getElementById('questionNext_3_2');
            questionNext_3_2.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_3_2);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_3_3();
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

function questionCat_3_3() {
    questionLoad.questionBlockText(
        '«Прощайте! Пойду жену искать - Марью Моревну, прекрасную королевну». Отвечает ворон: «Трудно тебе сыскать ее; оставь-ка у нас...: будем на нее смотреть, тебя вспоминать». Царевич отдал ему..., попрощался и пошел в дорогу». Что оставил Иван – царевич ворону?',
        'серебряную ложку',
        'серебряную вилку',
        'серебряную табакерку');

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
            arrowNextClick.id = 'questionNext_3_3';
            const questionNext_3_3 = document.getElementById('questionNext_3_3');
            questionNext_3_3.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_3_3);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_3_4();
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

function questionCat_3_4() {
    questionLoad.questionBlockText(
        '«За тридевять земель, в тридесятом царстве, за огненной рекою живет баба-яга – «Как же ты через огненную реку переправился?» - «А у меня есть... - как махну в правую сторону три раза, сделается высокий-высокий мост, и огонь его не достанет!». Марья Моревна выслушала, пересказала все Ивану-царевичу и …унесла да ему отдала».',
        'платок',
        'перстень',
        'посох');

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
            arrowNextClick.id = 'questionNext_3_4';
            const questionNext_3_4 = document.getElementById('questionNext_3_4');
            questionNext_3_4.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_3_4);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_3_5();
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

function questionCat_3_5() {
    questionLoad.questionBlockText(
        '«Баба-яга заснула, а в самую полночь Иван-царевич украл у нее..., оседлал его, сел и поскакал к огненной реке». Какого коня выручил Иван-царевич за службу у Бабы- Яги?',
        'Конька–Горбунка',
        'Сивку–Бурку',
        'паршивого жеребёнка');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        containerPerson = document.querySelector('.container__person')
    ;

    questionLoad.answerBlock(2, 'Совершеноо верно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_3_5';
            const questionNext_3_5 = document.getElementById('questionNext_3_5');
            questionNext_3_5.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_3_5);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        container.removeChild(containerPerson);
                        wrapper.removeChild(containerQuest);
                        questionCat_3_6();
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

function questionCat_3_6() {
    arrowBackLoad.arrowNextHidden();

    const
        questionBack_2 = document.getElementById('questionBack_2'),
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        containerDifference = document.createElement('div'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperBackCatThird = document.querySelector('.wrapper__back_category--third'),
        bearBlock = document.createElement('div'),
        fishBlock = document.createElement('div'),
        foxBlock = document.createElement('div'),
        frogBlock = document.createElement('div'),
        heronBlock = document.createElement('div'),
        selesenBlock = document.createElement('div'),
        squirrelBlock = document.createElement('div'),
        woodpeckerBlock = document.createElement('div'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTopSubTitle = document.createElement('h2')
    ;

    containerDifference.className = 'container__difference';
    wrapperTopSubTitle.className = 'wrapper__top_title-sub';
    wrapperTopSubTitle.innerHTML = 'Найди животных';
    wrapperTop.appendChild(wrapperTopSubTitle);
    containerDifference.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_mariaMorevnaDifference.png" alt="Марья Морьевна. Найди животных">
    `;
    bearBlock.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_mmBear.png" alt="Марья Морьевна. Медведь">
    `;
    fishBlock.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_mmFish.png" alt="Марья Морьевна. Медведь">
    `;
    foxBlock.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_mmFox.png" alt="Марья Морьевна. Медведь">
    `;
    frogBlock.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_mmFrog.png" alt="Марья Морьевна. Лягушка">
    `;
    heronBlock.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_mmHeron.png" alt="Марья Морьевна. Цапля">
    `;
    selesenBlock.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_mmSelesen.png" alt="Марья Морьевна. Селезень">
    `;
    squirrelBlock.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_mmSquirrel.png" alt="Марья Морьевна. Белка">
    `;
    woodpeckerBlock.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_mmWoodpecker.png" alt="Марья Морьевна. Дятел">
    `;
    bearBlock.id = 'bearColor';
    fishBlock.id = 'fishColor';
    foxBlock.id = 'foxColor';
    frogBlock.id = 'frogColor';
    heronBlock.id = 'heronColor';
    selesenBlock.id = 'selesenColor';
    squirrelBlock.id = 'squirrelColor';
    woodpeckerBlock.id = 'woodpeckerColor';
    container.appendChild(containerDifference);
    containerDifference.appendChild(bearBlock);
    containerDifference.appendChild(fishBlock);
    containerDifference.appendChild(foxBlock);
    containerDifference.appendChild(frogBlock);
    containerDifference.appendChild(heronBlock);
    containerDifference.appendChild(selesenBlock);
    containerDifference.appendChild(squirrelBlock);
    containerDifference.appendChild(woodpeckerBlock);
    gsap.from(containerDifference, {
        duration: 0.6,
        autoAlpha: 0
    });

    const
        wrapperTopTitle = document.querySelector('.wrapper__top_title'),
        bearColor = document.getElementById('bearColor'),
        fishColor = document.getElementById('fishColor'),
        foxColor = document.getElementById('foxColor'),
        frogColor = document.getElementById('frogColor'),
        heronColor = document.getElementById('heronColor'),
        selesenColor = document.getElementById('selesenColor'),
        squirrelColor = document.getElementById('squirrelColor'),
        woodpeckerColor = document.getElementById('woodpeckerColor'),
        animalsColor = [
            bearColor,
            fishColor,
            foxColor,
            frogColor,
            heronColor,
            selesenColor,
            squirrelColor,
            woodpeckerColor]
    ;

    for (let i = 0; i < animalsColor.length; i++) {
        animalsColor[i].addEventListener('click', (e) => {
            let progressQuestion_3_6 = JSON.parse(localStorage.getItem('mfDifferenceQuest_3_6'));
            let progressQuestion_3_6_sum = progressQuestion_3_6 + 1;
            localStorage.setItem('mfDifferenceQuest_3_6', JSON.stringify(progressQuestion_3_6_sum));
            gsap.to((animalsColor[i]), {
                duration: 0.3,
                autoAlpha: 1
            });
            animalsColor[i].style.pointerEvents = 'none';
            if (progressQuestion_3_6_sum === 8) {
                wrapperBottomRight.appendChild(arrowNextClick);
                arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
                arrowNextClick.id = 'questionNext_3_6';
                const questionNext_3_6 = document.getElementById('questionNext_3_6');
                questionNext_3_6.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            wrapperBack.removeChild(wrapperBackCatThird);
                            wrapperTop.removeChild(wrapperTopTitle);
                            wrapperTop.removeChild(wrapperTopSubTitle);
                            wrapperBottomRight.removeChild(questionNext_3_6);
                            container.removeChild(containerDifference);
                            questionCat_4_0();
                        }
                    });
                    tl
                        .to(containerDifference, {
                            autoAlpha: 0,
                            delay: '-0.1'
                        })
                        .to([
                            wrapperBackCatThird,
                            wrapperTopTitle,
                            wrapperTopSubTitle], {
                            duration: 0.3,
                            autoAlpha: 0
                        })
                    ;
                });
            }
        });
    }
}