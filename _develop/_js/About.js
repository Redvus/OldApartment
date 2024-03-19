class About {

    aboutAuthors(personFirstTitle,
                 personFirstName,
                 personSecondTitle,
                 personSecondNameGone,
                 personSecondName,
                 personThirdTitle,
                 personThirdName) {
        const
            wrapperTitleAuthors = document.createElement('div'),
            containerAbout = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top')
        ;

        containerAbout.className = 'container__about_block';
        wrapperTitleAuthors.className = 'wrapper__top_title';
        container.className = 'container container__about';

        wrapperTitleAuthors.innerHTML = `
            <h1>Авторы</h1>
        `;

        containerAbout.innerHTML = `
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
        wrapperTop.appendChild(wrapperTitleAuthors);
        container.appendChild(containerAbout);

        let titleAuthors = document.querySelector('.wrapper__top_title'),
            containerAboutPerson = document.querySelectorAll('.container__about_person'),
            aboutBlock = document.querySelector('.container__about')
        ;

        function aboutAuthorsAnim() {
            let tl = new gsap.timeline();

            tl
                .from(aboutBlock, {
                    autoAlpha: 0,
                    duration: 0.4,
                    scale: 0.97
                })
                .from(titleAuthors, {
                    duration: '0.3',
                    delay: '-0.1',
                    autoAlpha: 0,
                    y: '-10%'
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
        aboutAuthorsAnim();
    }

    aboutLibrary(libraryLeftText, libraryRightText) {
        const
            wrapperTitleAuthors = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top'),
            containerAboutLeft = document.createElement('div'),
            containerAboutRight = document.createElement('div')
        ;

        containerAboutLeft.className = 'container__about_block container__about_left';
        containerAboutRight.className = 'container__about_block container__about_right';
        wrapperTitleAuthors.className = 'wrapper__top_title';
        container.className = 'container container__about';

        wrapperTitleAuthors.innerHTML = `
            <h2>О библиотеке</h2>
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
        wrapperTop.appendChild(wrapperTitleAuthors);
        container.appendChild(containerAboutLeft);
        container.appendChild(containerAboutRight);

        let titleAuthors = document.querySelector('.wrapper__top_title'),
            aboutBlock = document.querySelectorAll('.container__about_block')
        ;

        function aboutLibraryAnim() {
            let tl = new gsap.timeline();

            tl
                .from(aboutBlock, {
                    autoAlpha: 0,
                    duration: 0.4,
                    y: '-3%',
                    stagger: 0.08
                })
                .from(titleAuthors, {
                    duration: '0.3',
                    delay: '-0.1',
                    autoAlpha: 0,
                    y: '-10%'
                })
            ;
        }
        aboutLibraryAnim();
    }
}