import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainer = document.querySelector(".gallery")
const createItems = createGalleryItems(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', createItems);
imagesContainer.addEventListener('click', onImageClick)

function createGalleryItems(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </li>`
    }).join('');
}

function onImageClick(event) {
    const isImageSwatchEl = event.target.classList.contains('gallery__image');

    event.preventDefault();

    if (!isImageSwatchEl) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)
    instance.show()

    document.addEventListener("keydown", ({ code }) => {
    if (code === "Escape") {
        instance.close();
    }
});
}

