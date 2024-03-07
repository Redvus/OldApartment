class Intro {

    introStart() {
        const
            introBlockTop = document.createElement('div'),
            introBlockCenter = document.createElement('div')
        ;
        // introBlockTop.className = 'wrapper__top';
        // introBlockTop.innerHTML = `
        //     <picture class="wrapper__top_title wrapper__top_title--front">
        //         <img src="assets/games/magicFeather/images/mf_titleStart.png" alt="Название игры. Волшебное перо">
        //     </picture>
        // `;
        introBlockCenter.className = 'wrapper__center';
        introBlockCenter.innerHTML = `
            <h1>Старая<br />квартира</h1>
        `;
        // wrapper.removeChild(container);
        // wrapper.appendChild(introBlockTop);
        container.appendChild(introBlockCenter);

        // const introBlockBack = document.createElement('div');
        // introBlockBack.className = 'wrapper__intro';
        // wrapper.appendChild(introBlockBack);

        // Кнопки
        const introBlockButtons = document.createElement('div');
        introBlockButtons.className = 'wrapper__bottom';
        introBlockButtons.innerHTML = `
            <ul class="wrapper__bottom_menu">
                <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>
                <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>
                <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>
            </ul>
        `;
        wrapper.appendChild(introBlockButtons);

        const
            wrapperTop = document.querySelector('.wrapper__top'),
            wrapperTitle = document.querySelector('.wrapper__title'),
            wrapperBottom = document.querySelector('.wrapper__bottom'),
            wrapperBack = document.querySelector('.wrapper__intro'),
            wrapperCenter = document.querySelector('.wrapper__center')
        ;

        function introAnim() {
            let tl = gsap.timeline();
            tl
                .to(wrapperBack, {
                    duration: 0.6,
                    autoAlpha: 1
                })
                .to(wrapperTop, {
                    duration: 0.4,
                    delay: '-0.4',
                    y: '2%',
                    autoAlpha: 1
                })
                .from(wrapperBottom, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 0
                })
                .to(wrapperCenter, {
                    duration: 1,
                    delay: '-0.4',
                    y: '5%',
                    autoAlpha: 1
                })
            ;
        }
        // introAnim();
    }

    familyStart() {
        const
            familyManBlock = document.createElement('div'),
            familyWomanBlock = document.createElement('div'),
            familyGirlBlock = document.createElement('div'),
            familyPersonMan = document.createElement('picture'),
            familyPersonWoman = document.createElement('picture'),
            familyPersonGirl = document.createElement('picture'),
            familyTextMan = document.createElement('div'),
            familyTextWoman = document.createElement('div'),
            familyTextGirl = document.createElement('div'),
            wrapperTopAbout = document.createElement('div'),
            wrapperBack = document.createElement('div')
        ;

        // wrapperBack.className = 'wrapper__back';
        // container.className += ' container--dialog';
        // wrapperTopAbout.className = 'wrapper__top';
        familyManBlock.className = 'container__block';
        familyWomanBlock.className = 'container__block container__block--bottom';
        familyGirlBlock.className = 'container__block';
        familyManBlock.id = 'familyManBlock';
        familyPersonMan.id = 'familyMan';
        familyPersonMan.className = 'container__block_image';
        familyTextMan.id = 'familyTextMan';
        familyTextMan.className = 'container__block_text';
        familyPersonMan.innerHTML = `
            <img src="assets/games/oldApartment/images/oa_man.png" class="container__block_image--bottom" alt="Семья Ермолаевых. Отец">
        `;
        familyTextMan.innerHTML = `
            <h3>Ермолаев Пётр Иванович,</h3>
            <span>чиновник средней руки, занимается развитием хлебной промышленности, имеет несколько магазинов для реализации своей продукции</span>
        `;

        familyWomanBlock.id = 'familyWomanBlock';
        familyPersonWoman.id = 'familyWoman';
        familyPersonWoman.className = 'container__block_image';
        familyTextWoman.id = 'familyTextWoman';
        familyTextWoman.className = 'container__block_text';
        familyPersonWoman.innerHTML = `
            <img src="assets/games/oldApartment/images/oa_woman.png" class="container__block_image--bottom" alt="Семья Ермолаевых. Жена">
        `;
        familyTextWoman.innerHTML = `
            <h3>Ермолаева Анна Семёновна,</h3>
            <span>учительствует, занимается домашним хозяйством и воспитанием дочки</span>
        `;

        familyGirlBlock.id = 'familyGirlBlock';
        familyPersonGirl.id = 'familyGirl';
        familyPersonGirl.className = 'container__block_image';
        familyTextGirl.id = 'familyTextGirl';
        familyTextGirl.className = 'container__block_text';
        familyPersonGirl.innerHTML = `
            <img src="assets/games/oldApartment/images/oa_girl.png" class="container__block_image--bottom" alt="Семья Ермолаевых. Дочь">
        `;
        familyTextGirl.innerHTML = `
            <h3>Ермолаева Антонина,</h3>
            <span>дочка 5 лет - вся в своих детских заботах</span>
        `;

        familyManBlock.appendChild(familyPersonMan);
        familyManBlock.appendChild(familyTextMan);
        familyWomanBlock.appendChild(familyPersonWoman);
        familyWomanBlock.appendChild(familyTextWoman);
        familyGirlBlock.appendChild(familyPersonGirl);
        familyGirlBlock.appendChild(familyTextGirl);

        // wrapper.appendChild(wrapperBack);
        container.appendChild(familyManBlock);
        container.appendChild(familyWomanBlock);
        container.appendChild(familyGirlBlock);

        // const dialogBlockBack = document.createElement('div');
        // dialogBlockBack.className = 'wrapper__back_dialog';
        // wrapper.appendChild(dialogBlockBack);
        // wrapper.appendChild(wrapperTopAbout);

        // Кнопки
        // const introBlockButtons = document.createElement('div');
        // introBlockButtons.className = 'wrapper__bottom';
        // introBlockButtons.innerHTML = `
        //     <ul class="wrapper__bottom_menu">
        //         <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>
        //         <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>
        //         <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>
        //     </ul>
        // `;
        // wrapper.appendChild(introBlockButtons);

        const
            containerVovka = document.getElementById('containerVovka'),
            containerNestor = document.getElementById('containerNestor'),
            wrapperDialogBack = document.querySelector('.wrapper__back_dialog')
        ;

        // wrapperBack.appendChild(wrapperDialogBack);

        function dialogAnim() {
            let tl = gsap.timeline({
                onComplete: () => {
                    dialogBaloonLoad();
                }
            });
            tl
                .from(wrapperDialogBack, {
                    duration: 0.6,
                    autoAlpha: 0
                })
                .to(containerNestor, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 1
                })
                .to(containerVovka, {
                    duration: 0.4,
                    delay: '-0.2',
                    x: '5%',
                    autoAlpha: 1
                })
            ;
        }
        // dialogAnim();
    }

    categoryLibrary() {
        const dialogBlockVovka = document.createElement('picture'),
            dialogBlockNestor = document.createElement('picture')
        ;

        container.className += ' container--dialog';
        dialogBlockVovka.id = 'containerVovkaCenter';
        dialogBlockVovka.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_vovka.png" alt="Диалог в библиотеке. Вовка">
        `;
        dialogBlockNestor.id = 'containerNestor';
        dialogBlockNestor.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_nestor.png" alt="Диалог в библиотеке. Нестор">
        `;
        // wrapper.appendChild(container);
        container.appendChild(dialogBlockVovka);
        container.appendChild(dialogBlockNestor);

        const dialogBlockBack = document.createElement('div');
        dialogBlockBack.className = 'wrapper-back wrapper__dialog';
        wrapper.appendChild(dialogBlockBack);

        const containerVovka = document.getElementById('containerVovkaCenter'),
            containerNestor = document.getElementById('containerNestor'),
            wrapperDialogBack = document.querySelector('.wrapper__dialog')
        ;

        function dialogAnim() {
            let tl = gsap.timeline({
                onComplete: () => {

                }
            });
            tl
                .from(wrapperDialogBack, {
                    duration: 0.6,
                    autoAlpha: 0
                })
                .to(containerNestor, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 1
                })
                .to(containerVovka, {
                    duration: 0.4,
                    delay: '-0.2',
                    autoAlpha: 1
                })
            ;
        }
        dialogAnim();
    }
}