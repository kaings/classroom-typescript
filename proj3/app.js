"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    Person.prototype.getType = function () {
        return this.type;
    };
    return Person;
}());
var john = new Person('John', 'john123');
console.log(john);
console.log(john.username, john.name);
john.setAge(30);
console.log(john.getAge());
john.setType('Cool bro!');
console.log(john.getType());
/* Inheritance */
var Will = /** @class */ (function (_super) {
    __extends(Will, _super);
    //name = 'Will';
    function Will(willUsername) {
        return _super.call(this, 'WillTj', willUsername) || this;
    }
    return Will;
}(Person));
var will = new Will('will12345');
console.log(will);
/* Getter & Setter */
var Plant = /** @class */ (function () {
    function Plant() {
        this.speciesName = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this.speciesName;
        },
        set: function (input) {
            if (input.length >= 5) {
                this.speciesName = input;
            }
            else {
                this.speciesName = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log('line1', plant);
console.log(plant.species);
plant.species = 'Aloe Vera'; // set the value for setter
console.log(plant.species);
console.log('line2', plant);
/* Static Properties & Methods */
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(10));
