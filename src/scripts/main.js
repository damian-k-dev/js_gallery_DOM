'use strict';

const listItemsLinks = document.querySelectorAll('.list-item__link');
const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  listItemsLinks.forEach((link) => {
    link.href = '#';
  });

  largeImg.src = e.target.src;
});
