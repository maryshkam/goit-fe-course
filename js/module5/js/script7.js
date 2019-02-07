'use strict';
/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
const order = {
  bread: 10,
  apples: 25,
  chicken: 60,
  milk: 15,
  cheese: 40
};

const getSumm = (obj) => {
 const arr = Object.values(obj);
 const result = arr.reduce((acc, value) => acc + value, 0);
 return result;
}

console.log(getSumm(order)); // 150