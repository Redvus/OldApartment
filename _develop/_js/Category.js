class Category {

    categoryQuest() {
        const
            wrapperCategoryBack = document.createElement('div'),
            wrapperBack = document.querySelector('.wrapper__back'),
            containerQuest = document.createElement('div'),
            containerQuestTop = document.createElement('div'),
            containerQuestBottom = document.createElement('div'),
            wrapperCategoryTitle = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top'),
            containerTopImage = document.createElement('picture')
        ;

        wrapperCategoryBack.className = 'wrapper__back_category';
        wrapperCategoryBack.id = 'categoryLivingRoom';
        containerQuest.className = 'container-quest';
        containerQuestTop.className = 'container-quest__top';
        containerQuestBottom.className = 'container-quest__bottom';
        wrapperCategoryTitle.className = 'wrapper__top_title';
        containerTopImage.className = 'container-quest__top_image';

        containerTopImage.innerHTML = `
            <img src="assets/games/oldApartment/images/oa_grammofon.png">
        `;

        wrapperBack.appendChild(wrapperCategoryBack);
        wrapper.appendChild(containerQuest);
        containerQuest.appendChild(containerQuestTop);
        containerQuest.appendChild(containerQuestBottom);
        wrapperTop.appendChild(wrapperCategoryTitle);
        containerQuestTop.appendChild(containerTopImage);

        wrapperCategoryTitle.innerHTML = `
            <h1>Гостиная</h1>
        `;
    }
}