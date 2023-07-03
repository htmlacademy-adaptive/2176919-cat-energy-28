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
  iconHeight,
  mapZoom,
  iconOffsetX,
  iconOffsetY;

  if (viewportWidth < 768) {
    iconWidth = 57;
    iconHeight = 53;
    mapZoom = 14.2;
    iconOffsetX = -25;
    iconOffsetY = -42;
  } else {
    if (viewportWidth > 768 && viewportWidth < 1440) {
      iconWidth = 113;
      iconHeight = 106;
      mapZoom = 15.5;
      iconOffsetX = -50;
      iconOffsetY = -55;
  } else {
      iconWidth = 113;
      iconHeight = 106;
      mapZoom = 17;
      iconOffsetX = 187;
      iconOffsetY = -70;
    }
  }

  function init(){
    myMap = new ymaps.Map(map, {
      center: [59.938631, 30.323037],
      zoom: mapZoom,
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
          iconImageOffset: [iconOffsetX, iconOffsetY]
        });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  }
}
