'use strict';
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/




// console.log(getRandomColor());

function createBoxes(num) {
  const container = document.querySelector('#root');

  const box = document.createElement('div');
  box.classList.add('container');
  let width = 30;
  let height = 30;
  for (let i = 1; i <= num; i +=1) {
    const boxNew = document.createElement('div');
      boxNew.classList.add('box');
      const widthProp = width + 'px';
      const heightProp = height + 'px';
      boxNew.style.width = widthProp;
      boxNew.style.height = heightProp;
      boxNew.style.backgroundColor = getRandomColor();
      width = width + 10;
      height = height + 10;
      // boxNew.setAttribute('backgroundColor:', getRandomColor());
      box.append(boxNew);
  }
  container.append(box);
}

function getRandomColor() {
  var chars = '0123456789ABCDEF'.split('');
  var hex = '#';
  for (var i = 0; i < 6; i++) {
      hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
}
createBoxes(10);
