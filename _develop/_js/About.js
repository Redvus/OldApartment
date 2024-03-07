class About {

    aboutAuthors(personFirstTitle,
                 personFirstName,
                 personSecondTitle,
                 personSecondNameGone,
                 personSecondName,
                 personThirdTitle,
                 personThirdName) {
        const
            containerWrapper = document.createElement('div'),
            containerTitle = document.createElement('div'),
            wrapperTitleAuthors = document.createElement('div'),
            containerAboutLeft = document.createElement('div'),
            containerAboutRight = document.createElement('div')
        ;

        containerWrapper.className = 'container__wrapper container__wrapper_about';
        containerTitle.className = 'container__title container__title_category';
        containerAboutLeft.className = 'container__about container__about_left';
        containerAboutRight.className = 'container__about container__about_right';
        wrapperTitleAuthors.className = 'wrapper__top';
        container.className = 'container container--about';

        wrapperTitleAuthors.innerHTML = `
            <picture id="authorsTitle" class="wrapper__top_title wrapper__top_title--about">
                <img src="assets/games/magicFeather/images/mf_titleAbout.png" alt="Волшебное перо. Об авторах">
            </picture>
        `;

        containerAboutLeft.innerHTML = `
            <div class="container__about_inside">
                <picture id="aboutSparkle">
                    <img src="assets/games/magicFeather/images/mf_featherSparkles.png" alt="Вспышка под пером">
                </picture>
                <picture id="aboutFeather">
                    <img src="assets/games/magicFeather/images/mf_featherStart.png" alt="Перо">
                </picture>
            </div>
        `;

        containerAboutRight.innerHTML = `
            <div class="container__about_inside container__about_text  container__about_text--center">
                <div class="container__about_person">
                    <h4>${personFirstTitle}</h4>
                    <p>${personFirstName}</p>
                </div>
                <div class="container__about_person">
                    <h4>${personSecondTitle}</h4>
                    <p class="container__about_person--gone">${personSecondNameGone}</p>
                    <p class="container__about_person">${personSecondName}</p>
                </div>
                <div class="container__about_person">
                    <h4>${personThirdTitle}</h4>
                    <p>${personThirdName}</p>
                </div>
            </div>
        `;
        wrapper.appendChild(wrapperTitleAuthors);
        container.appendChild(containerWrapper);
        containerWrapper.appendChild(containerAboutLeft);
        containerWrapper.appendChild(containerAboutRight);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__service';
        wrapper.appendChild(introBlockBack);

        // const wrapperAboutBack = document.createElement('div');
        // wrapperAboutBack.className = 'wrapper__back_about';
        // wrapper.appendChild(wrapperAboutBack);

        let titleAuthors = document.querySelector('.wrapper__top'),
            containerAboutPerson = document.querySelectorAll('.container__about_person'),
            aboutBack = document.querySelector('.wrapper__back_about'),
            aboutLeft = document.querySelector('.container__about_left'),
            aboutRight = document.querySelector('.container__about_right'),
            aboutSparkle = document.getElementById('aboutSparkle'),
            aboutFeather = document.getElementById('aboutFeather')
        ;

        function aboutAuthorsAnim() {
            let tl = new gsap.timeline();

            tl
                .from(introBlockBack, {
                    autoAlpha: 0,
                    duration: 0.4,
                    // scale: 0.98
                })
                .to(titleAuthors, {
                    duration: 0.4,
                    delay: '-0.4',
                    y: '2%',
                    autoAlpha: 1
                })
                .from(aboutLeft, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.3'
                })
                .from(aboutRight, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.3'
                })
                .from(containerAboutPerson, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2',
                    y: "-0.5rem",
                    stagger: 0.07
                })
                .from(aboutFeather, {
                    autoAlpha: 0,
                    duration: 1,
                    delay: '-0.2',
                    scale: 1.05
                })
                .from(aboutSparkle, {
                    autoAlpha: 0,
                    duration: 0.8,
                    delay: '-0.4',
                    scale: 0.90
                })
            ;
        }
        aboutAuthorsAnim();
    }

    aboutLibrary(libraryLeftText, libraryRightText) {
        const
            containerWrapper = document.createElement('div'),
            containerTitle = document.createElement('div'),
            wrapperTitleAuthors = document.createElement('div'),
            containerAboutLeft = document.createElement('div'),
            containerAboutRight = document.createElement('div')
        ;
        containerWrapper.className = 'container__wrapper container__wrapper_about';
        containerTitle.className = 'container__title container__title_category';
        containerAboutLeft.className = 'container__about container__about_left';
        containerAboutRight.className = 'container__about container__about_right';
        wrapperTitleAuthors.className = 'wrapper__top';
        container.className = 'container container--about';

        wrapperTitleAuthors.innerHTML = `
            <picture id="authorsTitle" class="wrapper__top_title wrapper__top_title--about">
                <img src="assets/games/magicFeather/images/mf_titleLibrary.png" alt="Волшебное перо. О библиотеке">
            </picture>
        `;

        containerAboutLeft.innerHTML = `
            <div class="container__about_inside container__about_text">
                <p>${libraryLeftText}</p>
            </div>
        `;

        containerAboutRight.innerHTML = `
            <div class="container__about_inside container__about_text">
                <p>${libraryRightText}</p>
            </div>
        `;
        wrapper.appendChild(wrapperTitleAuthors);
        container.appendChild(containerWrapper);
        containerWrapper.appendChild(containerAboutLeft);
        containerWrapper.appendChild(containerAboutRight);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__service';
        wrapper.appendChild(introBlockBack);

        // const wrapperAboutBack = document.createElement('div');
        // wrapperAboutBack.className = 'wrapper__back_about';
        // wrapper.appendChild(wrapperAboutBack);

        let titleAuthors = document.querySelector('.wrapper__top'),
            containerAboutPerson = document.querySelectorAll('.container__about_person'),
            aboutBack = document.querySelector('.wrapper__back_about'),
            aboutLeft = document.querySelector('.container__about_left'),
            aboutRight = document.querySelector('.container__about_right')
        ;

        function aboutLibraryAnim() {
            let tl = new gsap.timeline();

            tl
                .from(introBlockBack, {
                    autoAlpha: 0,
                    duration: 0.4,
                    // scale: 0.98
                })
                .to(titleAuthors, {
                    duration: 0.4,
                    delay: '-0.4',
                    y: '2%',
                    autoAlpha: 1
                })
                .from(aboutLeft, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.3'
                })
                .from(aboutRight, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.3'
                })
                .from(containerAboutPerson, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2',
                    y: "-0.5rem",
                    stagger: 0.07
                })
            ;
        }
        aboutLibraryAnim();
    }
}