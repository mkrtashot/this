"use strict";

function Car(model, milesPerGallon) {
  this.tank = 0;
  this.odometer = 0;
  this.milesPerGallon = milesPerGallon;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons * this.milesPerGallon;
  return `tank filled with ${gallons * 4.5} litre fuel, ${
    this.tank
  } miles left`;
};

Car.prototype.drive = function (distance) {
  this.tank -= distance;
  this.odometer += distance;
  if (this.tank <= 0) {
    this.odometer += this.tank;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
  return `tank = ${this.tank} miles left, odometer = ${this.odometer} miles`;
};

const car1 = new Car("BMW", 20);

console.log(car1.fill(4));
console.log(car1.drive(40));
console.log(car1.fill(3));
console.log(car1.drive(150));
console.log(car1.drive(30));
console.log(car1.fill(13));
console.log(car1.drive(100));
