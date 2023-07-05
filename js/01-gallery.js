import { galleryItems } from './gallery-items.js';
// Change code below this line
  
const gallerySkelet = document.querySelector('ul');
const cardsGallery = galleryCreator(galleryItems);
gallerySkelet.innerHTML = cardsGallery;

function galleryCreator(galleryItems) {
    return galleryItems.map(({ preview, description, original }) => {
        return `
            <li class="gallery__image:hover ">
                <a  href="${original}">
                    <img
                        class="gallery__image gallery__item"
                        src="${preview}"
                        alt="${description}"
                        height="100%"
                        data-source="${original}"
                       
                    />
                </a>
            </li>
        `;
    }).join('');
}

gallerySkelet.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    const source = event.target.dataset.source;
    const fenster = basicLightbox.create(`
        <img width="1400" height="900" src="${source}">
    `) 

    const closeModal = () => {
        fenster.close();
        document.removeEventListener("keydown", pressKey);
    };

    const pressKey = (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    };

    fenster.show();
    document.addEventListener("keydown", pressKey);
    console.log(source)
};
 