'use strict';

let hotel = prompt('Введите номер отеля от 1 до 5');
if (hotel === null) {
  alert('очень жаль, приходите еще!');
} else if (Number.isInteger(+hotel) && +hotel <= 5 && +hotel >= 1) {
  switch(hotel) {
    case '1':
      alert("Каталог хостелов");
      break;
    case '2':
      alert("Каталог бюджетных отелей");
      break;
    case '3':
      alert("Каталог отелей ***");
      break;
    case '4':
      alert("Каталог отелей ****");
      break;
    default:
      alert("Каталог лучших отелей");
      break;
  }
} else {
  alert('Неверный ввод, возможные варианты 1-5!');
}