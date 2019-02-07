'use strict';
/*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/

const guestsA = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true }
];

const guestsB = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: true },
  { name: "Ajax", isActive: true }
];

const allGuestsActive = (arr) => {
  const result = arr.every(obj => obj.isActive === true);
  return result;
}

// Вызовы функции для проверки
console.log(allGuestsActive(guestsA)); // false

console.log(allGuestsActive(guestsB)); // true