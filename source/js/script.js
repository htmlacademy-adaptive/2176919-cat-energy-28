const header = document.querySelector('.main-header__container');
const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-header__toggle-navigation');
const searchMap = document.querySelector('.map');
const map = document.querySelector('.map__wrapper');

if (header) {
  header.classList.remove('main-header__container--nojs');
}

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-navigation--opened');
  });
}

if (searchMap) {
  searchMap.classList.remove('map--nojs');
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  ymaps.ready(init);
  var myMap,
  myPlacemark;

  var iconWidth,
  iconHeight;

  if (viewportWidth < 768) {
    iconWidth = 57;
    iconHeight = 53;
  } else {
    iconWidth = 113;
    iconHeight = 106;
  }

  function init(){
    myMap = new ymaps.Map(map, {
      center: [59.938631, 30.323037],
      zoom: 16,
      controls: []
    },
    {suppressMapOpenBlock: true});

    myPlacemark = new ymaps.Placemark([59.938631, 30.323037], {
      hintContent: 'Добро пожаловать в наш офис!',
      balloonContent: ''
    }, {
          iconLayout: 'default#image',
          iconImageHref: './img/map-pin.png',
          iconImageSize: [iconWidth, iconHeight],
          iconImageOffset: [-25, -42]
        });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  }
}
