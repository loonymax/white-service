const openButton = document.querySelector('.header__nav-button');
const closeButton = document.querySelector('.header__close-button');
const menu = document.querySelector('.header__nav-container');

openButton.addEventListener('click', function () {
  menu.classList.remove('header__nav-container--closed');
  menu.classList.add('header__nav-container--open');
});

closeButton.addEventListener('click', function () {
  menu.classList.remove('header__nav-container--open');
  menu.classList.add('header__nav-container--closed');
})
