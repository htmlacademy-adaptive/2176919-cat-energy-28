const header = document.querySelector('.main-header__container');
const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-header__toggle-navigation');

if (header) {
  header.classList.remove('main-header__container--nojs');
}

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-navigation--opened');
  });
}
