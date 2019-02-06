'use strict';
/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

function isObjectEmpty(a) {
  // console.log(a);
  // let count = 0;
  // for (const key in a) {
  //   count++;
  // }
  // let result;
  if (Object.keys(a).length > 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}


// Вызовы функции для проверки
console.log(
  isObjectEmpty({})
); // true

console.log(
  isObjectEmpty({
    a: 1
  })
); // false

console.log(
  isObjectEmpty({
    a: 1,
    b: 2
  })
); // false