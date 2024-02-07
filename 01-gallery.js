import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const fixedGalleryItems = galleryItems.map(
  (galleryItem) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}" 
        alt="${galleryItem.description}"
        data-source="${galleryItem.original}"
        >
        </img>
        </a>
     </li>`
);
.join("");

gallery.insertAdjacentHTML("afterbegin", fixedGalleryItems);
console.log(galleryItems);
