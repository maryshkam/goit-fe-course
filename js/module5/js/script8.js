'use strict';
/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 3
};

const getTotalPrice = (arr, order) => {
  const result = [];
  for (const keys in order) {
    result.push(order[keys] * arr[keys]);
  }
  const summ = result.reduce((acc, value) => acc + value, 0);
  return summ;
}

// Вызовы функции для проверки
console.log(getTotalPrice(products, orderA)); // 140

console.log(getTotalPrice(products, orderB)); // 130