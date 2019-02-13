'use strict';
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const list = document.querySelector('.list');
elements.forEach(val => {
  const item = document.createElement('li');
  item.textContent = val;
  list.append(item);
});
