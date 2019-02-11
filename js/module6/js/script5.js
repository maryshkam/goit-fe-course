'use strict';

/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущее значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/




class Car {
  constructor(maxSpeed, value) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this._value = value;
  }

  get value () {
    return this._value;
  }

  set value (value) {
    this._value = value;
    return this._value;
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

const myCar = new Car(50, 2000);
  // console.log(myCar);
// console.log(myCar.value);

  myCar.value; // 2000
  myCar.value = 4000;
  // console.log(myCar.value);
  myCar.value; // 4000