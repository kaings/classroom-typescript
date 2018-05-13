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
/* Abstract Classes */
console.log('Abstract Classes...');
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
newProject.budget = 1000;
console.log(newProject);
console.log(newProject.calcBudget());
/* Private Constructors & Singletons */
console.log('Private Constructors & Singletons...');
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    ; //this equals to public name: string; plus this.name = name;
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One Instance/ Singleton');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let thisiswrong = new OnlyOne('The Only One Instance'); //this is wrong. Compilation will cause error
var thisisright = OnlyOne.getInstance();
console.log(thisisright);
thisisright.name = 'change the name via accessing name property because its modifier is public';
console.log(thisisright);
/* readonly property */
console.log('readonly property...');
var AnotherOnlyOne = /** @class */ (function () {
    function AnotherOnlyOne(name) {
        this.name = name;
    }
    ;
    AnotherOnlyOne.getInstance = function () {
        if (!AnotherOnlyOne.instance) {
            AnotherOnlyOne.instance = new AnotherOnlyOne('The Only One Instance/ Singleton');
        }
        return AnotherOnlyOne.instance;
    };
    return AnotherOnlyOne;
}());
//let anotherthisiswrong = new AnotherOnlyOne('The Only One Instance'); //this is wrong. Compilation will cause error
var anotherthisisright = AnotherOnlyOne.getInstance();
console.log(anotherthisisright);
//anotherthisisright.name = 'change the name via accessing name property because its modifier is public'; //reassign the name property is impossible because now then name property is readonly
console.log(anotherthisisright);
