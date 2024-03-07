const questionLoad = new Question(),
    arrowBackLoad = new ArrowsAll(),
    questionDialogPerson = new Intro()
;

if (localStorage.getItem('mfDifferenceQuest_1_6') === null
    || localStorage.getItem('mfDifferenceQuest_1_6') >= 7
    || localStorage.getItem('mfDifferenceQuest_1_6') <= 7) {
    localStorage.setItem('mfDifferenceQuest_1_6', JSON.stringify(0));
}

function questionCat_1_0() {
    questionLoad.questionBlock();
    questionLoad.questionBlockText(
        'Микроволновка с&nbsp;искусственным интеллектом',
        'печь с пирожками',
        'печь Бабы Яги',
        'печь Емели');

    const
        wrapperBottom = document.createElement('div'),
        containerAbout = document.querySelector('.container__wrapper_about'),
        wrapperTopAbout = document.querySelector('.wrapper__top'),
        wrapperBackDialog = document.querySelector('.wrapper__back_dialog'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperBackCatFirst = document.createElement('div')
    ;

    arrowBackLoad.arrowNextHidden();
    wrapperBackCatFirst.className = 'wrapper__back_category wrapper__back_category--first';

    const
        arrowBackClick = document.getElementById('arrowBack'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        wrapperBottomLeft = document.querySelector('.wrapper__bottom_part--left'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right')
    ;

    // wrapperBottomLeft.appendChild(arrowBackClick);
    // wrapperBottomLeft.appendChild(arrowBackClick);
    // arrowBackClick.id = 'questionBack_1';

    const
        questionBack_1 = document.getElementById('questionBack_1'),
        containerQuest = document.querySelector('.container-quest'),
        containerDialog = document.querySelector('.container--dialog'),
        containerBlockLeft = document.getElementById('containerBlockLeft'),
        containerBlockRight = document.getElementById('containerBlockRight'),
        containerVovka = document.getElementById('containerVovka'),
        containerNestor = document.getElementById('containerNestor'),
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
            arrowNextClick.id = 'questionNext_1_0';
            const questionNext_1_0 = document.getElementById('questionNext_1_0');
            questionNext_1_0.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onStart: () => {
                        wrapperBack.appendChild(wrapperBackCatFirst);
                    },
                    onComplete: () => {
                        wrapperBack.removeChild(wrapperBackDialog);
                        wrapperBottomRight.removeChild(questionNext_1_0);
                        container.className = 'container';
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_1_1();
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
                    .from(wrapperBackCatFirst, {
                        duration: 0.6,
                        delay: '-0.3',
                        autoAlpha: 0
                    })
                ;
            });
        });
    }
}

// По щучьему велению
function questionCat_1_1() {
    questionLoad.questionBlockText(
        '«Бедный думает: «Все люди станут разгавливаться, а у меня ни куска нету! Пойду хоть воды принесу - ужо вместо щей похлебаю». Взял ведерко, пошел к … и только закинул в воду - вдруг попалась ему в ведерко большущая щука». Куда держал путь бедняк?',
        'к пруду',
        'к колодцу',
        'к синему морю');

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
        <img src="assets/games/magicFeather/images/mf_Pike.png" alt="По щучьему велению. Щука">
    `;
    wrapperTop.innerHTML = `
        <h1 class="wrapper__top_title">По щучьему велению</h1>
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
            arrowNextClick.id = 'questionNext_1_1';
            const questionNext_1_1 = document.getElementById('questionNext_1_1');
            questionNext_1_1.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_1_1);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_1_2();
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

function questionCat_1_2() {
    questionLoad.questionBlockText(
        '«На ту пору вздумала царевна по улицам прогуляться, идет с своими няньками и мамками и ради праздничка Христова раздает бедным милостыню».<br/>За что бедняк наказал царевну?',
        'за то, что не подала милостыню бедняку',
        'за то, что меньше всех подала бедняку',
        'за то, что обругала бедняка');

    arrowBackLoad.arrowNextHidden();

    const questionBack_2 = document.getElementById('questionBack_2'),
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
            arrowNextClick.id = 'questionNext_1_2';
            const questionNext_1_2 = document.getElementById('questionNext_1_2');
            questionNext_1_2.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_1_2);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_1_3();
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

function questionCat_1_3() {
    questionLoad.questionBlockText(
        '«Царь разгневался, обвенчал убогого на царевне, а после венца приказал посадить их вместе с ребенком … и пустить в открытое море».<br />Что стало для них транспортным средством?',
        'бочка',
        'лодка',
        'ковёр – самолёт');

    arrowBackLoad.arrowNextHidden();

    const questionBack_2 = document.getElementById('questionBack_2'),
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
            arrowNextClick.id = 'questionNext_1_3';
            const questionNext_1_3 = document.getElementById('questionNext_1_3');
            questionNext_1_3.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_1_3);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_1_4();
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

function questionCat_1_4() {
    questionLoad.questionBlockText(
        '«Убогий и царевна напились, наелись, отдохнули и пошли в сад гулять. «Всем бы здесь хорошо», - говорит царевна, - только жаль, что нет никакой птицы на наших прудах». – «Подожди, будет и птица!»- отвечал убогий».<br />Какими птицами были заселены пруды?',
        'соловьями',
        'утками и селезнями',
        'лебедями');

    arrowBackLoad.arrowNextHidden();

    const questionBack_2 = document.getElementById('questionBack_2'),
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden')
    ;

    questionLoad.answerBlock(1, 'Правильно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_1_4';
            const questionNext_1_4 = document.getElementById('questionNext_1_4');
            questionNext_1_4.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_1_4);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_1_5();
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

function questionCat_1_5() {
    questionLoad.questionBlockText(
        '«Тут вышла царевна, бросилась к отцу и призналась, что она та самая его дочь, которую выдал он за убогого замуж и посадил в смоляную бочку: «Батюшка! Ты не верил тогда моим словам, а вот теперь на себе спознал, что можно быть без вины виноватым».<br />Как царевна с мужем проучили отца?',
        'смекалкой',
        'силой',
        'хитростью');

    arrowBackLoad.arrowNextHidden();

    const questionBack_2 = document.getElementById('questionBack_2'),
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        containerPerson = document.querySelector('.container__person')
    ;

    questionLoad.answerBlock(2, 'Именно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_1_5';
            const questionNext_1_5 = document.getElementById('questionNext_1_5');
            questionNext_1_5.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_1_5);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        container.removeChild(containerPerson);
                        wrapper.removeChild(containerQuest);
                        questionCat_1_6();
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

function questionCat_1_6() {
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
        wrapperBackCatFirst = document.querySelector('.wrapper__back_category--first'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTopSubTitle = document.createElement('h2'),
        partBlock_1_1 = document.createElement('div'),
        partBlock_1_2 = document.createElement('div'),
        partBlock_1_3 = document.createElement('div'),
        partBlock_1_4 = document.createElement('div'),
        partBlock_1_5 = document.createElement('div'),
        partBlock_1_6 = document.createElement('div'),
        partBlock_1_7 = document.createElement('div'),
        partBlock_2_1 = document.createElement('div'),
        partBlock_2_2 = document.createElement('div'),
        partBlock_2_3 = document.createElement('div'),
        partBlock_2_4 = document.createElement('div'),
        partBlock_2_5 = document.createElement('div'),
        partBlock_2_6 = document.createElement('div'),
        partBlock_2_7 = document.createElement('div')
    ;

    containerDifference.className = 'container__difference';
    wrapperTopSubTitle.className = 'wrapper__top_title-sub';
    wrapperTopSubTitle.innerHTML = 'Найди 7 отличий';
    wrapperTop.appendChild(wrapperTopSubTitle);
    partBlock_1_1.className = 'container__part';
    partBlock_1_2.className = 'container__part';
    partBlock_1_3.className = 'container__part';
    partBlock_1_4.className = 'container__part';
    partBlock_1_5.className = 'container__part';
    partBlock_1_6.className = 'container__part';
    partBlock_1_7.className = 'container__part';
    partBlock_2_1.className = 'container__part';
    partBlock_2_2.className = 'container__part';
    partBlock_2_3.className = 'container__part';
    partBlock_2_4.className = 'container__part';
    partBlock_2_5.className = 'container__part';
    partBlock_2_6.className = 'container__part';
    partBlock_2_7.className = 'container__part';

    partBlock_1_1.id = 'partLeft_1';
    partBlock_1_2.id = 'partLeft_2';
    partBlock_1_3.id = 'partLeft_3';
    partBlock_1_4.id = 'partLeft_4';
    partBlock_1_5.id = 'partLeft_5';
    partBlock_1_6.id = 'partLeft_6';
    partBlock_1_7.id = 'partLeft_7';

    partBlock_2_1.id = 'partRight_1';
    partBlock_2_2.id = 'partRight_2';
    partBlock_2_3.id = 'partRight_3';
    partBlock_2_4.id = 'partRight_4';
    partBlock_2_5.id = 'partRight_5';
    partBlock_2_6.id = 'partRight_6';
    partBlock_2_7.id = 'partRight_7';

    containerDifference.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_pikeDifference.png" alt="По щучьему велению. Найди 7 отличий">
    `;
    container.appendChild(containerDifference);
    containerDifference.appendChild(partBlock_1_1);
    containerDifference.appendChild(partBlock_1_2);
    containerDifference.appendChild(partBlock_1_3);
    containerDifference.appendChild(partBlock_1_4);
    containerDifference.appendChild(partBlock_1_5);
    containerDifference.appendChild(partBlock_1_6);
    containerDifference.appendChild(partBlock_1_7);
    containerDifference.appendChild(partBlock_2_1);
    containerDifference.appendChild(partBlock_2_2);
    containerDifference.appendChild(partBlock_2_3);
    containerDifference.appendChild(partBlock_2_4);
    containerDifference.appendChild(partBlock_2_5);
    containerDifference.appendChild(partBlock_2_6);
    containerDifference.appendChild(partBlock_2_7);
    gsap.from(containerDifference, {
       duration: 0.6,
       autoAlpha: 0
    });

    const
        wrapperTopTitle = document.querySelector('.wrapper__top_title'),
        partLeft_1 = document.getElementById('partLeft_1'),
        partLeft_2 = document.getElementById('partLeft_2'),
        partLeft_3 = document.getElementById('partLeft_3'),
        partLeft_4 = document.getElementById('partLeft_4'),
        partLeft_5 = document.getElementById('partLeft_5'),
        partLeft_6 = document.getElementById('partLeft_6'),
        partLeft_7 = document.getElementById('partLeft_7'),
        partRight_1 = document.getElementById('partRight_1'),
        partRight_2 = document.getElementById('partRight_2'),
        partRight_3 = document.getElementById('partRight_3'),
        partRight_4 = document.getElementById('partRight_4'),
        partRight_5 = document.getElementById('partRight_5'),
        partRight_6 = document.getElementById('partRight_6'),
        partRight_7 = document.getElementById('partRight_7'),
        containerPartsLeft = [
            partLeft_1, partLeft_2, partLeft_3, partLeft_4, partLeft_5, partLeft_6, partLeft_7],
        containerPartsRight = [
            partRight_1, partRight_2, partRight_3, partRight_4, partRight_5, partRight_6, partRight_7]
    ;

    for (let i = 0; i < containerPartsLeft.length; i++) {
        containerPartsLeft[i].addEventListener('click', () => {
            let progressQuestion_1_6 = JSON.parse(localStorage.getItem('mfDifferenceQuest_1_6'));
            let progressQuestion_1_6_sum = progressQuestion_1_6 + 1;
            localStorage.setItem('mfDifferenceQuest_1_6', JSON.stringify(progressQuestion_1_6_sum));
            gsap.to((containerPartsLeft[i]), {
                duration: 0.3,
                autoAlpha: 1
            });
            gsap.to(containerPartsRight[i], {
                duration: 0.3,
                autoAlpha: 1
            });
            containerPartsLeft[i].style.pointerEvents = 'none';
            containerPartsRight[i].style.pointerEvents = 'none';
            if (progressQuestion_1_6_sum === 7) {
                wrapperBottomRight.appendChild(arrowNextClick);
                arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
                arrowNextClick.id = 'questionNext_1_6';
                const questionNext_1_6 = document.getElementById('questionNext_1_6');
                questionNext_1_6.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            wrapperBack.removeChild(wrapperBackCatFirst);
                            wrapperTop.removeChild(wrapperTopTitle);
                            wrapperTop.removeChild(wrapperTopSubTitle);
                            wrapperBottomRight.removeChild(questionNext_1_6);
                            container.removeChild(containerDifference);
                            questionCat_2_0();
                        }
                    });
                    tl
                        .to(containerDifference, {
                            autoAlpha: 0,
                            delay: '-0.1'
                        })
                        .to([
                            wrapperBackCatFirst,
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
    for (let i = 0; i < containerPartsRight.length; i++) {
        containerPartsRight[i].addEventListener('click', () => {
            let progressQuestion_1_6 = JSON.parse(localStorage.getItem('mfDifferenceQuest_1_6'));
            let progressQuestion_1_6_sum = progressQuestion_1_6 + 1;
            localStorage.setItem('mfDifferenceQuest_1_6', JSON.stringify(progressQuestion_1_6_sum));
            gsap.to((containerPartsLeft[i]), {
                duration: 0.3,
                autoAlpha: 1
            });
            gsap.to(containerPartsRight[i], {
                duration: 0.3,
                autoAlpha: 1
            });
            containerPartsLeft[i].style.pointerEvents = 'none';
            containerPartsRight[i].style.pointerEvents = 'none';
            if (progressQuestion_1_6_sum === 7) {
                wrapperBottomRight.appendChild(arrowNextClick);
                arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
                arrowNextClick.id = 'questionNext_1_6';
                const questionNext_1_6 = document.getElementById('questionNext_1_6');
                questionNext_1_6.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            wrapperBack.removeChild(wrapperBackCatFirst);
                            wrapperTop.removeChild(wrapperTopTitle);
                            wrapperTop.removeChild(wrapperTopSubTitle);
                            wrapperBottomRight.removeChild(questionNext_1_6);
                            container.removeChild(containerDifference);
                            questionCat_2_0();
                        }
                    });
                    tl
                        .to(containerDifference, {
                            autoAlpha: 0,
                            delay: '-0.1'
                        })
                        .to([
                            wrapperBackCatFirst,
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