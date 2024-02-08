import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

// Dodanie zdjęć z klasami do DOM-u

const galleryList = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryList);

// SimpleLightBox + podpisy pod zdjęciami

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
