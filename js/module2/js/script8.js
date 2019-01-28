/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

'use strict';

 const input = [];
// console.log(input.length);
//  input.push = prompt('Введіть число');
let sum = 0;
do {
 var num = prompt('Введіть число');
//  console.log(num);
input.push(Number(num));
// console.log(input);
} while (num !== null) ;

// console.log(input);

if (input.length > 0) {
  for (const value of input) {
    if (!isNaN(value)) {

      sum += Number(value);
    }
  }
}
console.log(sum);


