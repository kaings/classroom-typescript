// Exercise 1 - How was your TypeScript Class?
/*
function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
*/
console.log('Exercise 1 - How was your TypeScript Class?');
class Car {
    private name: string;
    private acceleration: number = 0;

    constructor(name: string){
        this.name = name;
    }

    honk(){
        console.log('Tooooooootttt!!');
    }

    accelerate(speed: number){
        this.acceleration += speed;
    }

    getAcceleration(){
        return this.acceleration;
    }
}

const car = new Car('BMW');
car.honk();
console.log(car.getAcceleration());
car.accelerate(20);
console.log(car.getAcceleration());

// Exercise 2 - Two objects, based on each other ...
/*
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
*/

console.log('Exercise 2 - Two objects, based on each other ...');
class BaseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends BaseObject {
    calcSize(){
        return this.width*this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log('Rectangle size is ' + rectangle.calcSize());


// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
/*
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
*/

console.log('Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json) ...');
class Person1 {
    private _firstName: string = '';

    get firstName() {
        return this._firstName;
    }

    set firstName(name: string){
        this._firstName = name;
    }
}

const person1 = new Person1();
console.log(person1.firstName);
person1.firstName = 'Will';
console.log(person1.firstName);
