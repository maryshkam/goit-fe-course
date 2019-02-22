'use strict';
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/


// console.log(arr);

const handleClick = () => {
  
const num = document.querySelectorAll('input');
let arr = Array.from(num);
let summ = arr.reduce((acc, el) => acc + Number(el.value), 0 );
let result = document.querySelector('.result');
result.textContent = summ;
}

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);