'use strict';
/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account(login, password, type = "regular") {
  this.login = login;
  this.password = password;
  this.type = type;

  this.changePassword = function(newPassword) {
    this.password = newPassword;

    console.log(this.password);
  };

  this.getAccountInfo = function() {
    console.log(`
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword("asdzxc"); // 'asdzxc'

account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'