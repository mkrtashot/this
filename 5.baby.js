"use strict";

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (food) {
  if (this.stomach.length >= 9) {
    return `${this.name} is not hungry`;
  }
  this.stomach.push(food);
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype.__proto__ = Person.prototype;

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

let bby1 = new Baby("Larisa", 3, "Barbie");
