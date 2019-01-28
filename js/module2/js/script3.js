/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

let string = prompt('Input text:');
console.log(string);



// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
let arr = string.split(" ");
console.log(arr);

// Вывести в консоли общую длину массива arr
console.log(arr.length);

// Используя цикл, вывести в консоль все индексы массива arr
let a = 0;
while (a < arr.length){
  console.log(a);
  a += 1;
}


// Используя цикл, вывести в консоль все элементы массива arr
let i = 0;
while (i < arr.length){
  console.log(arr[i]);
  i += 1;
}

// Используя цикл, bывести в консоли все пары индекс:значение массива arr
let x = 0;
while (x < arr.length){
  console.log(`Index: ${x} - ${arr[x]}`);
  x += 1;
}


// console.log();