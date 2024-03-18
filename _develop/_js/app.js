const
    container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper'),
    wrapperBottom = document.querySelector('.wrapper__bottom'),
    wrapperBack = document.querySelector('.wrapper__back')
;

const soundsLoad = new Sounds();

/* Intro */
function introDev() {
    const introDevLoad = new Intro();
    introDevLoad.introStart();

    const
        clickLoadGame = document.getElementById('clickLoadGame'),
        clickAuthors = document.getElementById('clickAboutAuthors'),
        clickAbout = document.getElementById('clickAboutLibrary'),
        wrapperBottom = document.querySelector('.wrapper__bottom'),
        wrapperCenter = document.querySelector('.wrapper__center'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperIntro = document.querySelector('.wrapper__intro'),
        wrapperBottomMenu = document.querySelector('.wrapper__bottom_menu'),
        backgroundMusicID = document.getElementById('backgroundMusicID'),
        choiceCatLoad = new ChoiceCategory(),
        wrapperMobile = document.createElement('div')
    ;

    // wrapperMobile.className = 'wrapper__mobile';
    // wrapperMobile.innerHTML = `
    //     <p>Игра разработана только<br />для десктопной версии</p>
    // `;

    clickLoadGame.addEventListener('click', () => {
        // soundsLoad.rightAnswer('assets/games/magicFeather/sounds/cp_progressClear.ogg');

        // Music Background
        // if (backgroundMusicID === null) {
        //     soundsLoad.backgroundMusicLoad('assets/games/magicFeather/sounds/mf_ambient.ogg');
        //     localStorage.setItem('backgroundMusic', JSON.stringify(1));
        // } else if (backgroundMusicID.paused || localStorage.getItem('backgroundMusic') === '0') {
        //     backgroundMusicID.pause();
        //     localStorage.setItem('backgroundMusic', JSON.stringify(0));
        // }

        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(wrapperCenter);
                wrapperBottom.removeChild(wrapperBottomMenu);
                familyDev();
            }
        });
        tl
            .to(wrapperCenter, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(wrapperBottomMenu, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
        ;
    });

    clickAuthors.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                // wrapper.removeChild(wrapperTitle);
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(wrapperBack);
                wrapper.appendChild(container);
                wrapper.removeChild(wrapperCenter);
                authorsStart();
            }
        });
        tl
            .to(wrapperTop, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(wrapperCenter, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0
            })
            .to(wrapperBottom, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBack, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                // scale: 0.98
            })
        ;
    });

    clickAbout.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                // wrapper.removeChild(wrapperTitle);
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(wrapperBack);
                wrapper.appendChild(container);
                wrapper.removeChild(wrapperCenter);
                aboutStart();
            }
        });
        tl
            .to(wrapperTop, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(wrapperCenter, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0
            })
            .to(wrapperBottom, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBack, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                // scale: 0.98
            })
        ;
    });

    // if (document.body.clientWidth < 570 || screen.width < 570) {
    //     wrapper.removeChild(wrapperCenter);
    //     wrapper.removeChild(wrapperBottom);
    //     wrapper.removeChild(wrapperBack);
    //     wrapper.appendChild(wrapperMobile);
    // }
}

/* Authors */
function authorsStart() {
    const authorsLoad = new About(),
        arrowBackLoad = new ArrowsAll()
    ;

    authorsLoad.aboutAuthors('Сценарист',
        'Инна Ямщикова',
        'Художники',
        'Елена Расторгуева',
        'Анастасия Полякова',
        'Программист',
        'Александр Суворов');

    const
        containerAbout = document.querySelector('.container__wrapper_about'),
        introAboutBack = document.querySelector('.wrapper__service'),
        wrapperTopAbout = document.querySelector('.wrapper__top'),
        wrapperBottom = document.createElement('div')
    ;

    wrapperBottom.className = 'wrapper__bottom';
    wrapper.appendChild(wrapperBottom);

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    wrapperBottom.appendChild(arrowBackClick);

    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(wrapperBottom);
                container.removeChild(containerAbout);
                wrapper.removeChild(introAboutBack);
                wrapper.removeChild(wrapperTopAbout);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
        tl
            .to(wrapperTopAbout, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to([containerAbout, arrowBackClick], {
                autoAlpha: 0,
                delay: '-0.1'
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                delay: '-0.1',
                // scale: 0.98
            })
        ;
    });
}

/* About */
function aboutStart() {
    const aboutLoad = new About(),
        arrowBackLoad = new ArrowsAll()
    ;

    aboutLoad.aboutLibrary('МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» была создана в декабре 1986 года. На сегодняшний день в ее составе&nbsp;– Центральная городская библиотека имени Н.К. Крупской и 35 библиотек-филиалов, нашими читателями являются жители всех 9 районов города. Библиотеки системы&nbsp;– это информационные, образовательные центры, место культурного отдыха и общения. СМИБС находится в центре мировых событий, активно участвует в общероссийских акциях и в жизни города.', 'В библиотеках системы можно получить информацию и литературу по любой теме, доступ к электронным базам данных, воспользоваться услугами Интернет-залов, Центрами общественного доступа, побывать на презентациях выставок и творческих встречах, а также воспользоваться дополнительными сервисными услугами:<ul><li>ксерокопированием</li><li>сканированием</li><li>ламинированием</li><li>документов</li><li>распечаткой информации</li><li>на принтере</li><li>записью на электронные</li><li>носители</li></ul>');

    const
        containerAbout = document.querySelector('.container__wrapper_about'),
        introAboutBack = document.querySelector('.wrapper__service'),
        wrapperTopAbout = document.querySelector('.wrapper__top'),
        wrapperBottom = document.createElement('div')
    ;

    wrapperBottom.className = 'wrapper__bottom';
    wrapper.appendChild(wrapperBottom);

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    wrapperBottom.appendChild(arrowBackClick);

    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(wrapperBottom);
                container.removeChild(containerAbout);
                wrapper.removeChild(introAboutBack);
                wrapper.removeChild(wrapperTopAbout);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
        tl
            .to(wrapperTopAbout, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to([containerAbout, arrowBackClick], {
                autoAlpha: 0,
                delay: '-0.1'
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                delay: '-0.1',
                // scale: 0.98
            })
        ;
    });
}

/* Dialog */
function familyDev() {
    const
        familyDevLoad = new Intro(),
        arrowBackLoad = new ArrowsAll(),
        settingsLoad = new Settings(),
        finalBlock = new Settings()
    ;

    let
        progressOldApartment_1 = JSON.parse(localStorage.getItem('progressOldApartment_1')),
        progressOldApartment_2 = JSON.parse(localStorage.getItem('progressOldApartment_2')),
        progressOldApartment_3 = JSON.parse(localStorage.getItem('progressOldApartment_3')),
        progressOldApartment_4 = JSON.parse(localStorage.getItem('progressOldApartment_4')),
        progressOldApartment = JSON.parse(localStorage.getItem('progressOldApartment'))
    ;

    familyDevLoad.familyStart();

    const
        familyManBlock = document.getElementById('familyManBlock'),
        familyWomanBlock = document.getElementById('familyWomanBlock'),
        familyGirlBlock = document.getElementById('familyGirlBlock'),
        wrapperIntro = document.querySelector('.wrapper__intro')
    ;

    wrapperBottom.innerHTML = `
        <div class="wrapper__bottom_part wrapper__bottom_part--left"></div>
        <div class="wrapper__bottom_part wrapper__bottom_part--center"></div>
        <div class="wrapper__bottom_part wrapper__bottom_part--right"></div>
    `;

    arrowBackLoad.arrowBack();
    arrowBackLoad.clearStorage();
    arrowBackLoad.arrowNext();

    const
        arrowBackClick = document.getElementById('arrowBack'),
        arrowNextClick = document.getElementById('arrowNext'),
        settingsClick = document.getElementById('settingsClick'),
        wrapperBottomLeft = document.querySelector('.wrapper__bottom_part--left'),
        wrapperBottomCenter = document.querySelector('.wrapper__bottom_part--center'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
        containerBlockLeft = document.getElementById('containerBlockLeft'),
        containerBlockRight = document.getElementById('containerBlockRight'),
        containerQuest = document.querySelector('.container-quest')
    ;

    wrapperBottomLeft.appendChild(arrowBackClick);
    wrapperBottomCenter.appendChild(settingsClick);
    wrapperBottomRight.appendChild(arrowNextClick);

    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottom.removeChild(wrapperBottomLeft);
                wrapperBottom.removeChild(wrapperBottomRight);
                wrapperBottom.removeChild(wrapperBottomCenter);
                container.removeChild(familyManBlock);
                container.removeChild(familyWomanBlock);
                container.removeChild(familyGirlBlock);
                introDev();
            }
        });
        tl
            .to([
                arrowBackClick,
                arrowNextClick,
                settingsClick,
                familyManBlock,
                familyWomanBlock,
                familyGirlBlock], {
                autoAlpha: 0,
                delay: '-0.1'
            })
        ;
    });

    arrowNextClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottomCenter.removeChild(settingsClick);
                wrapperBottomRight.removeChild(arrowNextClick);
                wrapperBottomLeft.removeChild(arrowBackClick);
                wrapperBottom.removeChild(wrapperBottomLeft);
                wrapperBottom.removeChild(wrapperBottomRight);
                wrapperBottom.removeChild(wrapperBottomCenter);
                container.removeChild(familyManBlock);
                container.removeChild(familyWomanBlock);
                container.removeChild(familyGirlBlock);
                if (progressOldApartment_1 < 6) {
                    catLivingRoomLoad();
                } else if (progressOldApartment_1 === 6 && progressOldApartment_2 < 6) {
                    catOfficeRoomLoad();
                } else if (progressOldApartment_2 === 6 && progressOldApartment_3 < 6) {
                    catBedRoomLoad();
                } else if (progressOldApartment_3 === 6 && progressOldApartment_4 < 6) {
                    catChildRoomLoad();
                } else if (progressOldApartment === 24) {
                    finalBlock.finalBlock();
                    const
                        settingsBlock = document.querySelector('.wrapper__lightbox_block--final'),
                        settingsTextWrong = document.createElement('div'),
                        settingsTextWright = document.createElement('div')
                    ;
                    settingsTextWrong.innerHTML = `
                        <p>Вы молодец, но можно лучше, попробуйте еще раз, все получится!</p>
                    `;
                    settingsTextWright.innerHTML = `
                        <p>Вы отлично справились, поздравляем!</p>
                    `;
                    if (progressOldApartment < 24) {
                        settingsBlock.appendChild(settingsTextWrong);
                    } else if (progressOldApartment === 24) {
                        settingsBlock.appendChild(settingsTextWright);
                    }

                    const finalButtonBlock = document.getElementById('finalButton');

                    finalButtonBlock.addEventListener('click', () => {
                        const
                            settingsBack = document.querySelector('.wrapper__lightbox'),
                            settingsBlock = document.querySelector('.wrapper__lightbox_block--final')
                        ;
                        let tl = gsap.timeline({
                            onComplete: () => {
                                wrapper.removeChild(settingsBack);
                                introDev();
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
            }
        });
        tl
            .to([
                arrowNextClick,
                settingsClick,
                arrowBackClick,
                familyManBlock,
                familyWomanBlock,
                familyGirlBlock], {
                autoAlpha: 0,
                delay: '-0.1'
            })
        ;
    });

    //Settings
    const
        settingsButton = document.getElementById('settingsClick')
    ;
    settingsButton.addEventListener('click', () => {
        settingsLoad.settingsBlock();

        const
            settingsBack = document.querySelector('.wrapper__lightbox'),
            settingsBlock = document.querySelector('.wrapper__lightbox_block'),
            settingsClose = document.getElementById('settingsCloseButton'),
            settingsText = document.getElementById('settingsText'),
            settingsToggleMusic = document.getElementById('turnOfSoundButton'),
            settingsToggleMusicID = document.getElementById('backgroundMusicID'),
            settingsMusicValue = JSON.parse(localStorage.getItem('backgroundMusic'))
        ;

        // if (localStorage.getItem('backgroundMusic') === '0') {
        //     settingsToggleMusic.textContent = 'Включить музыку';
        // }

        // settingsToggleMusic.addEventListener('click', () => {
        //     if (settingsToggleMusicID.paused || settingsMusicValue === '0') {
        //         settingsToggleMusicID.play();
        //         settingsToggleMusic.textContent = 'Выключить музыку';
        //         localStorage.setItem('backgroundMusic', JSON.stringify(1));
        //     } else if (settingsToggleMusicID.play || settingsMusicValue === '1'){
        //         settingsToggleMusicID.pause();
        //         settingsToggleMusic.textContent = 'Включить музыку';
        //         localStorage.setItem('backgroundMusic', JSON.stringify(0));
        //     }
        // });

        settingsClose.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapper.removeChild(settingsBack);
                }
            });
            tl
                .to(settingsBlock, {
                    duration: 0.3,
                    y: '5%',
                    autoAlpha: 0
                })
                .to(settingsBack, {
                    duration: 0.3,
                    autoAlpha: 0
                })
            ;
        });
    });
}

function catLivingRoomLoad() {
    const categoryLoad = new Category();
    let
        progressOldApartment_1_0 = JSON.parse(localStorage.getItem('progressOldApartment_1_0')),
        progressOldApartment_1_1 = JSON.parse(localStorage.getItem('progressOldApartment_1_1')),
        progressOldApartment_1_2 = JSON.parse(localStorage.getItem('progressOldApartment_1_2')),
        progressOldApartment_1_3 = JSON.parse(localStorage.getItem('progressOldApartment_1_3')),
        progressOldApartment_1_4 = JSON.parse(localStorage.getItem('progressOldApartment_1_4')),
        progressOldApartment_1_5 = JSON.parse(localStorage.getItem('progressOldApartment_1_5'))
    ;

    if (progressOldApartment_1_0 === 0) {
        categoryLoad.categoryQuest(
            'Гостиная',
            'categoryLivingRoom',
            'categoryLivingRoomTop');
    } else if (progressOldApartment_1_0 === 1) {
        categoryLoad.categoryQuestSimple(
            'Гостиная',
            'categoryLivingRoom');
    }

    if (progressOldApartment_1_0 === 0) {
        questionCat_1_0();
    } else if (
        progressOldApartment_1_1 === 0 &&
        progressOldApartment_1_0 === 1) {
        questionCat_1_1();
    } else if (
        progressOldApartment_1_2 === 0 &&
        progressOldApartment_1_1 === 1) {
        questionCat_1_2();
    } else if (
        progressOldApartment_1_3 === 0 &&
        progressOldApartment_1_2 === 1) {
        questionCat_1_3();
    } else if (
        progressOldApartment_1_4 === 0 &&
        progressOldApartment_1_3 === 1) {
        questionCat_1_4();
    } else if (
        progressOldApartment_1_5 === 0 &&
        progressOldApartment_1_4 === 1) {
        questionCat_1_5();
    }
}

function catOfficeRoomLoad() {
    const categoryLoad = new Category();
    let
        progressOldApartment_2_0 = JSON.parse(localStorage.getItem('progressOldApartment_2_0')),
        progressOldApartment_2_1 = JSON.parse(localStorage.getItem('progressOldApartment_2_1')),
        progressOldApartment_2_2 = JSON.parse(localStorage.getItem('progressOldApartment_2_2')),
        progressOldApartment_2_3 = JSON.parse(localStorage.getItem('progressOldApartment_2_3')),
        progressOldApartment_2_4 = JSON.parse(localStorage.getItem('progressOldApartment_2_4')),
        progressOldApartment_2_5 = JSON.parse(localStorage.getItem('progressOldApartment_2_5'))
    ;

    if (progressOldApartment_2_0 === 0) {
        categoryLoad.categoryQuest(
            'Кабинет',
            'categoryOfficeRoom',
            'categoryOfficeRoomTop');
    } else if (progressOldApartment_2_0 === 1) {
        categoryLoad.categoryQuestSimple(
            'Кабинет',
            'categoryOfficeRoom');
    }

    if (progressOldApartment_2_0 === 0) {
        questionCat_2_0();
    } else if (
        progressOldApartment_2_1 === 0 &&
        progressOldApartment_2_0 === 1) {
        questionCat_2_1();
    } else if (
        progressOldApartment_2_2 === 0 &&
        progressOldApartment_2_1 === 1) {
        questionCat_2_2();
    } else if (
        progressOldApartment_2_3 === 0 &&
        progressOldApartment_2_2 === 1) {
        questionCat_2_3();
    } else if (
        progressOldApartment_2_4 === 0 &&
        progressOldApartment_2_3 === 1) {
        questionCat_2_4();
    } else if (
        progressOldApartment_2_5 === 0 &&
        progressOldApartment_2_4 === 1) {
        questionCat_2_5();
    }
}

function catBedRoomLoad() {
    const categoryLoad = new Category();
    let
        progressOldApartment_3_0 = JSON.parse(localStorage.getItem('progressOldApartment_3_0')),
        progressOldApartment_3_1 = JSON.parse(localStorage.getItem('progressOldApartment_3_1')),
        progressOldApartment_3_2 = JSON.parse(localStorage.getItem('progressOldApartment_3_2')),
        progressOldApartment_3_3 = JSON.parse(localStorage.getItem('progressOldApartment_3_3')),
        progressOldApartment_3_4 = JSON.parse(localStorage.getItem('progressOldApartment_3_4')),
        progressOldApartment_3_5 = JSON.parse(localStorage.getItem('progressOldApartment_3_5'))
    ;

    if (progressOldApartment_3_0 === 0) {
        categoryLoad.categoryQuest(
            'Спальня',
            'categoryBedRoom',
            'categoryBedRoomTop');
    } else if (progressOldApartment_3_0 === 1) {
        categoryLoad.categoryQuestSimple(
            'Спальня',
            'categoryBedRoom');
    }

    if (progressOldApartment_3_0 === 0) {
        questionCat_3_0();
    } else if (
        progressOldApartment_3_1 === 0 &&
        progressOldApartment_3_0 === 1) {
        questionCat_3_1();
    } else if (
        progressOldApartment_3_2 === 0 &&
        progressOldApartment_3_1 === 1) {
        questionCat_3_2();
    } else if (
        progressOldApartment_3_3 === 0 &&
        progressOldApartment_3_2 === 1) {
        questionCat_3_3();
    } else if (
        progressOldApartment_3_4 === 0 &&
        progressOldApartment_3_3 === 1) {
        questionCat_3_4();
    } else if (
        progressOldApartment_3_5 === 0 &&
        progressOldApartment_3_4 === 1) {
        questionCat_3_5();
    }
}

function catChildRoomLoad() {
    const categoryLoad = new Category();
    let
        progressOldApartment_4_0 = JSON.parse(localStorage.getItem('progressOldApartment_4_0')),
        progressOldApartment_4_1 = JSON.parse(localStorage.getItem('progressOldApartment_4_1')),
        progressOldApartment_4_2 = JSON.parse(localStorage.getItem('progressOldApartment_4_2')),
        progressOldApartment_4_3 = JSON.parse(localStorage.getItem('progressOldApartment_4_3')),
        progressOldApartment_4_4 = JSON.parse(localStorage.getItem('progressOldApartment_4_4')),
        progressOldApartment_4_5 = JSON.parse(localStorage.getItem('progressOldApartment_4_5'))
    ;

    if (progressOldApartment_4_0 === 0) {
        categoryLoad.categoryQuest(
            'Детская',
            'categoryChildRoom',
            'categoryChildRoomTop');
    } else if (progressOldApartment_4_0 === 1) {
        categoryLoad.categoryQuestSimple(
            'Детская',
            'categoryChildRoom');
    }

    if (progressOldApartment_4_0 === 0) {
        questionCat_4_0();
    } else if (
        progressOldApartment_4_1 === 0 &&
        progressOldApartment_4_0 === 1) {
        questionCat_4_1();
    } else if (
        progressOldApartment_4_2 === 0 &&
        progressOldApartment_4_1 === 1) {
        questionCat_4_2();
    } else if (
        progressOldApartment_4_3 === 0 &&
        progressOldApartment_4_2 === 1) {
        questionCat_4_3();
    } else if (
        progressOldApartment_4_4 === 0 &&
        progressOldApartment_4_3 === 1) {
        questionCat_4_4();
    } else if (
        progressOldApartment_4_5 === 0 &&
        progressOldApartment_4_4 === 1) {
        questionCat_4_5();
    }
}

function init() {
    // introDev();
    // authorsStart();
    // aboutStart();
    // writerStart();
    familyDev();
    // catLivingRoomLoad();
    // catOfficeRoomLoad();
    // catBedRoomLoad();
    // catChildRoomLoad();
}

init();