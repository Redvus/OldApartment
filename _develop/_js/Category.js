class Category {

    categoryQuest(
        categoryTitle,
        categoryBackID,
        questItem_1,
        questItem_2,
        questItem_3) {
        const
            wrapperCategoryBack = document.createElement('div'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperCategoryTitle = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top'),
            containerQuest = document.querySelector('.container-quest')
        ;

        wrapperCategoryBack.className = 'wrapper__back_category';
        wrapperCategoryBack.id = `${categoryBackID}`;
        wrapperCategoryTitle.className = 'wrapper__top_title';

        wrapperBack.appendChild(wrapperCategoryBack);
        wrapperTop.appendChild(wrapperCategoryTitle);
        container.appendChild(containerQuest);

        wrapperCategoryTitle.innerHTML = `
            <h1>${categoryTitle}</h1>
        `;

        containerQuest.innerHTML = `
            <img id="${questItem_1}" class="container-quest__item" src="assets/games/oldApartment/images/${questItem_1}.png" alt="">
            <img id="${questItem_2}" class="container-quest__item" src="assets/games/oldApartment/images/${questItem_2}.png" alt="">
            <img id="${questItem_3}" class="container-quest__item" src="assets/games/oldApartment/images/${questItem_3}.png" alt="">
        `;

        const
            wrapperCatBack = document.querySelector('.wrapper__back_category'),
            wrapperCatTitle = document.querySelector('.wrapper__top_title'),
            containerQuestItem = document.querySelector('.container-quest__item')
        ;

        function catQuestAnim() {
            let tl = gsap.timeline();

            tl
                .from([wrapperCatBack, containerQuestItem], {
                    duration: '0.6',
                    autoAlpha: 0,
                    // scale: '1.05'
                })
                .from(wrapperCatTitle, {
                    duration: '0.3',
                    delay: '-0.1',
                    autoAlpha: 0,
                    y: '-10%'
                })
            ;
        }
        catQuestAnim();
    }
}