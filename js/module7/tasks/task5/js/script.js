'use strict';
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
const check = document.querySelectorAll('input'); 
let arr = Array.from(check);
console.log(arr);

const inputs = arr.filter(el => el.checked);


function collectInputData(inputs) {
  return inputs.map(el => el.value);

}

console.log(collectInputData(inputs));
// collectInputData(inputs);
