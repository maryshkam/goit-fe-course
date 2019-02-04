/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "javascriht";
// delete user.premium;

// console.log(user);

for (key in user) {
  console.log(`${key}:  ${user[key]} `);
}

const userNew = Object.keys(user);
// console.log(userNew);

for (const key of userNew) {
  console.log(key, user[key]);
}

const userLast = Object.entries(user);
// console.log(userLast);
for (const key of userLast) {
  console.log(key);
}