'use strict';

const adminLogin = 'admin';
const adminPassword = 'qwe';

let login = prompt('Введите логин');
let pass;

if (login === null) {
  alert('Отменено пользователем!');
} else if (login === adminLogin) {
    pass = prompt('Введите пароль');
    if (pass === null) {
      alert('Отменено пользователем!');
    } else if (pass === adminPassword) {
      alert('Добро пожаловать!');
    } else {
      alert('Доступ запрещен, неверный пароль!');
    }
} else {
    alert('Доступ запрещен, неверный логин!');
}