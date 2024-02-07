import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const listItems = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            >
            </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", listItems);
