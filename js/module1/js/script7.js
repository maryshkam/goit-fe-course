'use strict';

let number = prompt('Введите произвольное целое число');
if (number === null) {
  alert('Приходите еще!');
} else if (Number.isInteger(+number)){
  alert('Спасибо!');
} else {
  alert('Необходимо было ввести целое число!');
}