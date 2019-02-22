'use strict';
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

const elem = document.querySelector('input');
elem.addEventListener('input', renderValue);
elem.addEventListener('focus', renderString);


function renderValue() {
  const res = document.querySelector('.input');
  // const newVal = document.querySelector('.input-value');
  // newVal.textContent = res.value;
  // input.oninput = function () {
    const el = document.querySelector('.input-value').innerHTML = res.value;
    const p = document.querySelector('.input-value');
    p.textContent = `Current input value: ` + el;
  }





function renderString () {
const string = document.querySelector('.message');
string.textContent = "Input is in focus!";
}