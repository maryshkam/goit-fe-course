/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

let span = document.querySelector('.value');


 class Counter {
  constructor (onChange) {
    this.value = 0;
    this.change = onChange;
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment () {
    this.value += 1;
    this.change(this.value);

  }

  decrement () {
    this.value -= 1;
    this.change(this.value);
  }

 }

 
 function update (num) {
  span.textContent = num;
 }

 let obj = new Counter (update);

 const addIncr = document.querySelector('.btn[data-action="add"]');
 addIncr.addEventListener('click', obj.increment);

 const delIncr = document.querySelector('.btn[data-action="sub"]');
 delIncr.addEventListener('click', obj.decrement);