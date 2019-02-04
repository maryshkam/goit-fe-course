'use strict';
/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

function countTotalSalary (a) {
  let count = Object.values(a);
  let result = 0;
  for (const value of count) {
    result += Number(value);
  } return result;
}

// Вызовы функции для проверки
console.log(
  countTotalSalary({})
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330
