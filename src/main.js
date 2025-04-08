import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

document.querySelector('.span.loader').classList.remove('loader');

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  showLoader();
  const usersRequest = event.target.elements.text.value.trim();
  if (!usersRequest) {
    return;
  }

  let galleryLightBox;

  getImagesByQuery(usersRequest)
    .then(response => {
      const array = response.data.hits;
      if (!array.length) {
        iziToast.show({
          iconColor: '#ffffff',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#B51B1B',
          messageColor: '#ffffff',
          iconUrl: './img/error.svg',
        });
        clearGallery();
        hideLoader();
        return;
      }
      createGallery(array);
      hideLoader();

      galleryLightBox = new SimpleLightbox('.gallery li a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      galleryLightBox.refresh();
    })
    .catch(error => console.log(error.message));

  form.reset();
}
