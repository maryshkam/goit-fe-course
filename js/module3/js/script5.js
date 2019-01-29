'use strict';
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/

// const findLongestWord = str => {
//   let longestWord = "";
//   let newString = str.split(" ");
//   for (const value of newString) {
//     if (value.length >longestWord.length) {
//       longestWord = value;
//     }
//   }
//   return longestWord;
// }


function findLongestWord (str) {
  let longestWord = "";
  let newString = str.split(" ");
  for (const value of newString) {
    if (value.length >longestWord.length) {
      longestWord = value;
    }
  }
  return longestWord;
}


// Вызовы функции для проверки
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
  findLongestWord("May the force be with you")
); // вернет 'force'
