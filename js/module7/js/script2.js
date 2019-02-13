'use strict';
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// const element = document.querySelector('li');

// element.style.color = 'red';

// const last = document.querySelector('.menu').lastElementChild;

// last.style.color = 'blue';

const element = document.querySelectorAll('.list');
 const arr = Array.from(element);
 const first = arr[0];
//  console.log(first);
 first.style.color = 'red';
 const last = arr[(arr.length - 1)];
 last.style.color = 'blue';