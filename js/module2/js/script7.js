'use strict';

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const string = "May the force be with you";
let longestWord = "";
// console.log(longestWord.length);

let newString = string.split(" ");
console.log(newString);
for (const value of newString) {
  if (value.length >longestWord.length) {
    longestWord = value;
  }
}

console.log(longestWord); // 'force'