'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a').href;

  largeImg.src = link;
});
