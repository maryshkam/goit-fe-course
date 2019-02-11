'use strict';
/*
  Напишите ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в поле value.
  
  Добавьте классу следующие методы:
  
    - getValue() - возвращает текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/

class StringBuilder {
  constructor (value) {
    this.value = value;
  }
  getValue () {
    return this.value;
  }
  append (str) {
    const result = this.value + str;
    this.value = result;
    return this.value;
  }
  prepend (str) {
    const result = str + this.value;
    this.value = result;
    return this.value;
  }
  pad (str) {
    const result = str + this.value + str;
    this.value = result;
    return this.value;
  }
}

const builder = new StringBuilder('.');
// console.log(builder.value);

builder.append('^'); 
console.log(builder.getValue()); // '.^'

builder.prepend('^'); 
console.log(builder.getValue()); // '^.^'

builder.pad('='); 
console.log(builder.getValue()); // '=^.^='
