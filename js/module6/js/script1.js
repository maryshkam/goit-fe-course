'use strict';
/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

function Account (login, email, friendsCount) {
  this.login = login;
  this.email = email;
  this.friendsCount = friendsCount;
}

Account.prototype.getAccountInfo = function () {
  console.log(`
  login: ${this.login}
  email: ${this.email}
  friends: ${this.friendsCount}`)
};

const user1 = new Account ('Mark', 'mark@ukr.net', '26');
const user2 = new Account ('Anna', 'anna@gmail.com', '126');
user1.getAccountInfo();
user2.getAccountInfo();
