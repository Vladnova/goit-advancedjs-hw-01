// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const list = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ description, original, preview }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src=${preview}
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`
    )
    .join("");
}

list.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

new SimpleLightbox(".gallery a", {captionsData:'alt', captionDelay: 250});