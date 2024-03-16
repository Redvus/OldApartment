class Category {

    categoryQuest(categoryTitle, categoryBackID, categoryBackTopID) {
        const
            wrapperCategoryBack = document.createElement('picture'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperCategoryTitle = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top'),
            wrapperCategoryBackTop = document.createElement('div')
        ;

        wrapperCategoryBack.className = 'wrapper__back_category';
        wrapperCategoryBackTop.className = 'wrapper__back_category wrapper__back_category--top';
        wrapperCategoryBack.id = `${categoryBackID}`;
        wrapperCategoryBackTop.id = `${categoryBackTopID}`;
        wrapperCategoryTitle.className = 'wrapper__top_title';

        wrapperBack.appendChild(wrapperCategoryBack);
        wrapperBack.appendChild(wrapperCategoryBackTop);
        wrapperTop.appendChild(wrapperCategoryTitle);

        wrapperCategoryTitle.innerHTML = `
            <h1>${categoryTitle}</h1>
        `;

        const
            wrapperCatBack = document.querySelector('.wrapper__back_category'),
            wrapperCatTitle = document.querySelector('.wrapper__top_title')
        ;

        function catQuestAnim() {
            let tl = gsap.timeline();

            tl
                .from(wrapperCatBack, {
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