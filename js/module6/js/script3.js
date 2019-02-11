'use strict';
/*
  Создайте класс Car с указанными полями и методами.
*/

class Car {
  constructor(maxSpeed) {/* першопочатковий параметр maxSpeed (потрібно уточнити)
    /*
      Добавьте свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        
        - maxSpeed - для хранения максимальной скорости 
        
        - running - для отслеживания заведен ли автомобиль, 
          возможные значения true или false. Изначально false.
          
        - distance - содержит общий киллометраж, изначально с 0
    */

    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  }

  turnOn() {
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    this.running = true;
    return this.running;
  }

  turnOff() {
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    this.running = false;
    return this.running;
  }
  
  accelerate(spd) {
    if (spd < this.maxSpeed){
      this.speed = spd;
    } return this.speed;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }
  
  decelerate(spd) {
    if (Number(spd) > 0 && Number(spd) < this.maxSpeed){
      this.speed = spd;
    } return this.speed;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    this.distance = hours * this.speed;
    return this.distance;
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }
}


const mazda = new Car('240');
console.log(mazda);
mazda.turnOn();
console.log(mazda);
mazda.turnOff();
console.log(mazda);
mazda.accelerate(120);
console.log(mazda);
mazda.accelerate(60);
console.log(mazda);
mazda.decelerate(-10);
console.log(mazda);
mazda.drive(2);
console.log(mazda);

// чи потрібні перевірки на те чи увімкнений двигун і чи швидкість нуль