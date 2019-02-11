'use strict';
/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/

class Car {
  constructor(maxSpeed) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  }

  

  turnOn() {
    this.running = true;
    return this.running;
  }

  turnOff() {
    this.running = false;
    return this.running;
  }
  
  accelerate(spd) {
    if (spd <= this.maxSpeed){
      this.speed = spd;
    } return this.speed;
  }
  
  decelerate(spd) {
    if (Number(spd) > 0 && Number(spd) < this.maxSpeed){
      this.speed = spd;
    } return this.speed;
  }

  drive(hours) {
    this.distance = hours * this.speed;
    return this.distance;
  }

  static getSpecs (obj) {

    console.log(`maxSpeed: ${obj.maxSpeed}, running: ${obj.running}, distance: ${obj.distance}`);
  }
}


const someCar = new Car(100);
  someCar.turnOn();
  // someCar.accelerate(100);
  someCar.drive(2);
  
  // console.log(someCar);
  Car.getSpecs(someCar);