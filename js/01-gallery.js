import { galleryItems } from "./gallery-items.js";

// Dodanie zdjęć z klasami do DOM-u

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

// ----------------
let activeLightbox;

gallery.addEventListener("click", (event) => {
  event.preventDefault(); // Blokowanie przekierowania na inną stronę, po kliknięciu
  const clickedImage = event.target; // Zdarzenie kliknięcia
  if (clickedImage.nodeName !== "IMG") {
    return;
  } // Blokowanie powiększenia zdjęcia po kliknięciu w element kontenera (między IMG)

  const largeImage = clickedImage.dataset.source;

  //Otwarcie okna modalnego po kliknięciu w element galerii

  const instance = basicLightbox.create(
    `<img src="${largeImage}" class="gallery__image">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscape);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscape);
      },
    }
  );

  instance.show();
});

function onEscape(event) {
  if (event.key !== "Escape" || !activeLightbox) return;
  activeLightbox.close();
}

console.log(galleryItems);
