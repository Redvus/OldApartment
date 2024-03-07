function questionCat_4_0() {
    questionLoad.questionBlock();
    questionLoad.questionBlockText(
        'Программу омоложения организма запускают:',
        'райские яблочки',
        'молодильные яблочки',
        'наливные да сахарные яблочки');

    const
        wrapperBottom = document.createElement('div'),
        containerAbout = document.querySelector('.container__wrapper_about'),
        wrapperTopAbout = document.querySelector('.wrapper__top'),
        wrapperBackDialog = document.createElement('div'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperBackCatFourth = document.createElement('div'),
        containerVovka = document.getElementById('containerVovka'),
        containerNestor = document.getElementById('containerNestor')
    ;

    arrowBackLoad.arrowNextHidden();
    wrapperBackCatFourth.className = 'wrapper__back_category wrapper__back_category--fourth';
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
            arrowNextClick.id = 'questionNext_4_0';
            const questionNext_4_0 = document.getElementById('questionNext_4_0');
            questionNext_4_0.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onStart: () => {
                        wrapperBack.appendChild(wrapperBackCatFourth);
                    },
                    onComplete: () => {
                        wrapperBack.removeChild(wrapperBackDialog);
                        wrapperBottomRight.removeChild(questionNext_4_0);
                        container.className = 'container';
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_4_1();
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
                    .from(wrapperBackCatFourth, {
                        duration: 0.6,
                        delay: '-0.3',
                        autoAlpha: 0
                    })
                ;
            });
        });
    }
}

// Сивко-бурко
function questionCat_4_1() {
    questionLoad.questionBlockText(
        'Вдруг от царя клич: ежели кто…, за того ее и взамуж отдаст. Царь созвал храбрецов, чтобы',
        'спасти царевну от колдовства',
        'рассмешить царевну',
        'сорвать портрет и ширинку царевны высоко висящим на стене');

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
        <img src="assets/games/magicFeather/images/mf_sivkoBurko.png" alt="Сивка-Бурка">
    `;
    wrapperTop.innerHTML = `
        <h1 class="wrapper__top_title">Сивка-Бурка</h1>
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

    questionLoad.answerBlock(2, 'Верно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_4_1';
            const questionNext_4_1 = document.getElementById('questionNext_4_1');
            questionNext_4_1.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_4_1);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_4_2();
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

function questionCat_4_2() {
    questionLoad.questionBlockText(
        'Иван-дурак за ними же поехал в чисто поле, в широко раздолье, гайкнул богатырским голосом: «Сивко-бурко, вещий воронко!». Иван-дурак … - оделся, молодец такой стал, что и братьям не узнать! Какой ритуал совершил Иван – дурак, чтобы преобразится?',
        'залез коню в одно ухо, а в другое вылез',
        'расчесал коню хвост и гриву',
        'повернул кольцо на пальце');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden')
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
            arrowNextClick.id = 'questionNext_4_2';
            const questionNext_4_2 = document.getElementById('questionNext_4_2');
            questionNext_4_2.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_4_2);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_4_3();
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

function questionCat_4_3() {
    questionLoad.questionBlockText(
        'Как только доехал до царских чертогов, портрет и ширинку так и сорвал. Сколько попыток совершил Иван-дурак, чтобы сорвать портрет царевны и ширинку?',
        'три попытки',
        'пять попыток',
        'пять попыток');

    arrowBackLoad.arrowNextHidden();

    const
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
            arrowNextClick.id = 'questionNext_4_3';
            const questionNext_4_3 = document.getElementById('questionNext_4_3');
            questionNext_4_3.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_4_3);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_4_4();
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

function questionCat_4_4() {
    questionLoad.questionBlockText(
        '«Чрез немного времени царь сделал …, созывает всех бояр, воевод, князей, думных, сенаторов, купцов, мещан и крестьян». Царь всех созывает...',
        'на бал',
        'на пир',
        'на соревнование');

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
            arrowNextClick.id = 'questionNext_4_4';
            const questionNext_4_4 = document.getElementById('questionNext_4_4');
            questionNext_4_4.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_4_4);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        questionCat_4_5();
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

function questionCat_4_5() {
    questionLoad.questionBlockText(
        'Царевна потчует гостей, каждому подносит пива и смотрит,... - тот ее и жених.',
        'кто ей улыбнётся',
        'кто утрётся ширинкой',
        'у кого кольцо сверкнёт огоньком');

    arrowBackLoad.arrowNextHidden();

    const
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        containerPerson = document.querySelector('.container__person')

    ;

    questionLoad.answerBlock(1, 'Совершеноо верно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            wrapperBottomRight.appendChild(arrowNextClick);
            arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
            arrowNextClick.id = 'questionNext_4_5';
            const questionNext_4_5 = document.getElementById('questionNext_4_5');
            questionNext_4_5.addEventListener('click', () => {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapperBottomRight.removeChild(questionNext_4_5);
                        containerBlockLeft.removeChild(containerInsideLeft);
                        containerBlockRight.removeChild(containerInsideRight);
                        container.removeChild(containerPerson);
                        wrapper.removeChild(containerQuest);
                        questionCat_4_6();
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

function questionCat_4_6() {
    arrowBackLoad.arrowNextHidden();

    const questionBack_2 = document.getElementById('questionBack_2'),
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        arrowNextClick = document.querySelector('.wrapper__service_arrow--hidden'),
        containerDifference = document.createElement('div'),
        findFrog = document.createElement('picture'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperBackCatFourth = document.querySelector('.wrapper__back_category--fourth'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTopSubTitle = document.createElement('h2')
    ;

    containerDifference.className = 'container__difference';
    wrapperTopSubTitle.className = 'wrapper__top_title-sub';
    wrapperTopSubTitle.innerHTML = 'Найди царевну-лягушку';
    wrapperTop.appendChild(wrapperTopSubTitle);
    findFrog.id = 'frogSingle';
    containerDifference.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_sivkoBurkoDifference.png" alt="Сивко-Бурко. Найди лягушку">
    `;
    findFrog.innerHTML = `
        <img src="assets/games/magicFeather/images/mf_sivkoBurkoFrog.png" alt="Сивко-Бурко. Найди лягушку">
    `;
    container.appendChild(containerDifference);
    containerDifference.appendChild(findFrog);
    gsap.from(containerDifference, {
        duration: 0.6,
        autoAlpha: 0
    });

    const
        wrapperTopTitle = document.querySelector('.wrapper__top_title'),
        frogSingle = document.getElementById('frogSingle')
    ;
    frogSingle.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottomRight.appendChild(arrowNextClick);
                arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
                arrowNextClick.id = 'questionNext_4_6';
                const questionNext_4_6 = document.getElementById('questionNext_4_6');
                questionNext_4_6.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            wrapperBack.removeChild(wrapperBackCatFourth);
                            wrapperTop.removeChild(wrapperTopTitle);
                            wrapperTop.removeChild(wrapperTopSubTitle);
                            wrapperBottomRight.removeChild(questionNext_4_6);
                            container.removeChild(containerDifference);
                            questionCat_5_0();
                        }
                    });
                    tl
                        .to(containerDifference, {
                            autoAlpha: 0,
                            delay: '-0.1'
                        })
                        .to([
                            wrapperBackCatFourth,
                            wrapperTopTitle,
                            wrapperTopSubTitle], {
                            duration: 0.3,
                            autoAlpha: 0
                        })
                    ;
                });
            }
        });
        tl
            .to(frogSingle, {
                duration: 0.3,
                autoAlpha: 1
            })
        ;
    });
}