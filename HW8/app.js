const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.lightbox');
const bigImg = document.querySelector('.lightbox__image');
const btnModal = document.querySelector('.lightbox__button');
const lightboxOverlayClick = document.querySelector('.lightbox__overlay');
const flipImg = window.addEventListener('keydown', flipBigImg);
const escBtn = window.addEventListener('keydown', onClickBtnEsc);


gallery.addEventListener('click', onOpenModal);
btnModal.addEventListener('click', onCloseBtnModal);
lightboxOverlayClick.addEventListener('click', onCloseBtnModal )
const cardsVarkUp = createImgCard(galleryItems);
gallery.insertAdjacentHTML('afterbegin', cardsVarkUp);

function createImgCard(imgs) {
  return imgs.map(({original, preview, description}) => {
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
  }).join('')
}

function onClickImg(e) {
  if (e.target.nodeName !== 'IMG') {
    return
  }  
}

function onOpenModal(a) {  
  lightbox.classList.add('is-open');
  bigImg.src = a.target.dataset.source;   
  bigImg.alt = a.target.alt;
   onClickImg(a)
  
}

function onCloseBtnModal() {
  lightbox.classList.remove('is-open');
  onClearSrc() 
}

function onClickBtnEsc(e) {  
  if (e.key =="Escape") {
    onCloseBtnModal();
    onClearSrc();
 };
  
}
function onClearSrc() {
  bigImg.src = ''; 
   bigImg.alt = '';
  
}

function flipBigImgRight() {
  for (let i = 0; i < galleryItems.length-1; i++) {
    if (galleryItems[i].original == bigImg.src) {
      i = i + 1;
      bigImg.src = galleryItems[i].original;
      bigImg.alt = galleryItems[i].description;
    }
  }
}

function flipBigImgLeft(e) {
  for (let i = 1; i < galleryItems.length; i++) {
    if (galleryItems[i].original == bigImg.src) {
      i = i - 1;
      bigImg.src = galleryItems[i].original;
      bigImg.alt = galleryItems[i].description;
    }
  }
}

function flipBigImg(e) {  
  if (e.key == "ArrowRight") {
    flipBigImgRight();
  }
  if (e.key == "ArrowLeft") {
    flipBigImgLeft();
  }  
}



 