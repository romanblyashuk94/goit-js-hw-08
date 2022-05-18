// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryList = document.querySelector('.gallery')

galleryList.innerHTML = createGalleryImagesMurkup(galleryItems)

let gallery = new SimpleLightbox('.gallery a');


function createGalleryImagesMurkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
      <div class="gallery__item">
        <a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
      </div>`;
      })
      .join("");
  }