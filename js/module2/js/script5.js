'use strict';
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

const min = 1;
const max = 100;

for ( let i = 1; i >= min && i <= max; i += 1) {
  if (i%3 ===0) {
    console.log('Fizz');
  } else if (i%5 === 0 && i%3 !==0) {
    console.log('Buzz');
  }
  else (console.log(i));
  }
  
