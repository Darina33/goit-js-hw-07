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
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
        </a></li>`
    }).join('');
}

function onImageClick(event) {
    event.preventDefault();
    
    const isImageSwatchEl = event.target.classList.contains('gallery__image');

    if (!isImageSwatchEl) {
        return;
    }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
    captionDelay: 250,
});