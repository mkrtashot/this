"use strict";

function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
  this.stomach = [];
}

Baby.prototype.eat = function (food) {
  if (this.stomach.length >= 9) {
    return `${this.name} is not hungry`;
  }
  this.stomach.push(food);
};

Baby.prototype.poop = function () {
  this.stomach = [];
};

Baby.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

const bby1 = new Baby("Larisa", 3, "Barbie");
