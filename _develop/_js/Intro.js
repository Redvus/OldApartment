class Intro {

    introStart() {
        const
            introBack = document.createElement('div'),
            introCenter = document.createElement('div'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperBottom = document.querySelector('.wrapper__bottom')
        ;
        // introBack.className = 'wrapper__intro';
        introCenter.className = 'wrapper__center';
        introCenter.innerHTML = `
            <h1 id="introTitleTop">Старая</h1>
            <h1 id="introTitleBottom">квартира</h1>
        `;
        container.appendChild(introCenter);
        // wrapperBack.appendChild(introBack);

        // Кнопки
        const introBlockButtons = document.createElement('ul');
        introBlockButtons.className = 'wrapper__bottom_menu';
        introBlockButtons.innerHTML = `
            <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>
            <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>
            <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>
        `;
        wrapperBottom.appendChild(introBlockButtons);

        const
            introTitleTop = document.getElementById('introTitleTop'),
            introTitleBottom = document.getElementById('introTitleBottom'),
            wrapperBottomMenu = document.querySelectorAll('.wrapper__bottom_menu > li')
        ;

        function introAnim() {
            let tl = gsap.timeline();
            tl
                .from([introTitleBottom, introTitleTop], {
                    duration: 1,
                    delay: '-0.4',
                    stagger: '0.05',
                    y: '-10%',
                    autoAlpha: 0
                })
                .from(wrapperBottomMenu, {
                    duration: 0.4,
                    delay: '-0.6',
                    stagger: '0.05',
                    autoAlpha: 0
                })

            ;
        }
        introAnim();
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
            familyTextGirl = document.createElement('div')
        ;

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

        const
            manPhoto = document.getElementById('familyMan'),
            manText = document.getElementById('familyTextMan'),
            womanPhoto = document.getElementById('familyWoman'),
            womanText = document.getElementById('familyTextWoman'),
            girlPhoto = document.getElementById('familyGirl'),
            girlText = document.getElementById('familyTextGirl')
        ;

        function familyAnim() {
            let tl = gsap.timeline({
                onComplete: () => {

                }
            });
            tl
                .from([manPhoto, manText], {
                    duration: 0.6,
                    autoAlpha: 0,
                    stagger: '0.1'
                })
                .from([womanPhoto, womanText], {
                    duration: 0.6,
                    delay: '-0.5',
                    autoAlpha: 0,
                    stagger: '0.1'
                })
                .from([girlPhoto, girlText], {
                    duration: 0.6,
                    delay: '-0.5',
                    autoAlpha: 0,
                    stagger: '0.1'
                })
            ;
        }
        familyAnim();
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