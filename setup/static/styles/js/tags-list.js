document.addEventListener('DOMContentLoaded', function () {
    const availableTags = document.querySelectorAll('.available-tags .tag');
    const tagContainers = document.querySelectorAll('.tag-container');
    const selectedTagsContainers = document.querySelectorAll('.selected-tags');

    availableTags.forEach(tag => {
        tag.addEventListener('click', function () {
            if (!this.classList.contains('selected')) {
                const selectedTag = createSelectedTagElement(this.textContent);
                const tagCategory = this.getAttribute('data-category');
                const selectedTagsContainer = document.querySelector(`.selected-tags[data-category="${tagCategory}"]`);
                selectedTagsContainer.appendChild(selectedTag);
                this.classList.add('selected');
            }
        });
    });

    tagContainers.forEach(tagsContainer => {
        tagsContainer.addEventListener('click', (event) => {
            const clickedTag = event.target;
            if (clickedTag.classList.contains('tag')) {
                clickedTag.classList.toggle('selected');
            }
        });
    });

    selectedTagsContainers.forEach(selectedTagsContainer => {
        selectedTagsContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('delete-tag')) {
                const selectedTag = event.target.parentElement;
                const tagText = selectedTag.textContent;
                const correspondingAvailableTag = findCorrespondingAvailableTag(tagText);
                if (correspondingAvailableTag) {
                    correspondingAvailableTag.classList.remove('selected');
                    selectedTag.remove();
                }
            }
        });
    });

    function createSelectedTagElement(text) {
        const selectedTag = document.createElement('div');
        selectedTag.classList.add('selected-tag');
        selectedTag.textContent = text;
        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('delete-tag');
        deleteIcon.innerHTML = '&#10006;';
        selectedTag.appendChild(deleteIcon);
        return selectedTag;
    }

    function findCorrespondingAvailableTag(tagText) {
        return document.querySelector(`.available-tags .tag:contains('${tagText}')`);
    }
});
