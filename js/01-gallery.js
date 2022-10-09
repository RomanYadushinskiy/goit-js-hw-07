import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const markup = galleryItems.map((image) => 
    `<div class="gallery__item">
        <a class="gallery__link" href=${image.original}>
            <img class="gallery__image"
                 src=${image.preview}
                 data-source=${image.original}
                 alt=${image.description}/>
        </a>
    </div>`)
    .join('');

galleryRef.innerHTML = markup;

galleryRef.addEventListener('click', onImageClick);

let instance = '';

function onImageClick(event) {
   event.preventDefault();
   if (event.target.nodeName !== 'IMG') {
     return
   }
   
     instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`);
     instance.show();
     
}

galleryRef.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        instance.close()
    }
})

