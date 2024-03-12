class Category {

    categoryQuest(categoryTitle, categoryBackID) {
        const
            wrapperCategoryBack = document.createElement('div'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperCategoryTitle = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top')
        ;

        wrapperCategoryBack.className = 'wrapper__back_category';
        wrapperCategoryBack.id = `${categoryBackID}`;
        wrapperCategoryTitle.className = 'wrapper__top_title';

        wrapperBack.appendChild(wrapperCategoryBack);
        wrapperTop.appendChild(wrapperCategoryTitle);

        wrapperCategoryTitle.innerHTML = `
            <h1>${categoryTitle}</h1>
        `;
    }
}