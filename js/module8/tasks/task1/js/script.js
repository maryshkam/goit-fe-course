'use strict';
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const btnNum = document.querySelector('.button');
let count = 0;

const handleClick = () => {
  count += 1;
  btnNum.textContent = count;
}


btnNum.addEventListener('click', handleClick);
