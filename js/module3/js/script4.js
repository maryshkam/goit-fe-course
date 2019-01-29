'use strict';
/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

function getPx (str) {
  if (typeof str === 'string') {
    let string = parseFloat(str);
    return string;
  }
  return null;
}

// Вызовы функции для проверки
console.log( getPx("10px") ); // должно быть:  true
console.log( getPx("10.5") ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null
