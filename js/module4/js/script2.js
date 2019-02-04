/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

'use strict';

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};


const searchNum = Object.values(tasksCompleted);

let num = 0;
for (const value of searchNum) {
  if (Number(value) > num) {
    num = Number(value);
  }
}
// console.log(num);

const searchName = Object.entries(tasksCompleted);
for (const value of searchName){
  if (value.includes(num) ) {
    console.log(value);
  }
}