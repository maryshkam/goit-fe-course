'use strict';
/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

function findLargestNumber (numbers) {
  // const args = Array.from(numbers);
  let  num = 0;
  for (const value of numbers) {
    if (value > num) {
      num = value;
    }
  }
  return num;
}

// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3])
); // вернет 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // вернет 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // вернет 128
