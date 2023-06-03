const initNavigationMenu = () => {
  const navMain = document.querySelector('.main-navigation__list');
  const navToggle = document.querySelector('.main-navigation__toggle');

  if (!navToggle) {
    return;
  }

  navMain.classList.remove('main-navigation__list--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-navigation__list--close')) {
      navMain.classList.remove('main-navigation__list--close');
      navMain.classList.add('main-navigation__list--opened');
    } else {
      navMain.classList.add('main-navigation__list--close');
      navMain.classList.remove('main-navigation__list--opened');
    }
  });
};

initNavigationMenu();
