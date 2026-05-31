'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const linkElement = e.target.closest('a');
  const linkElHRef = e.target.closest('a').href;

  linkElement.setAttribute('data-link', linkElHRef);

  if (!linkElement) {
    return;
  }

  largeImg.src = linkElement.getAttribute('data-link');
});
