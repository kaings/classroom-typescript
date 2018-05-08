class Person {
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string, public username: string){
        this.name = name;
    }

    setAge(age: number){
        this.age = age;
    }

    getAge(){
        return this.age;
    }

    setType(type: string){
        this.type = type;
    }

    getType(){
        return this.type;
    }
}

const john = new Person('John', 'john123');
console.log(john);
console.log(john.username, john.name);

john.setAge(30);
console.log(john.getAge());

john.setType('Cool bro!');
console.log(john.getType());


/* Inheritance */
class Will extends Person{
    //name = 'Will';

    constructor(willUsername: string){
        super('WillTj',willUsername);     //you need to call super() when you create constructor for your extended class
    }

}
var will =  new Will('will12345');

console.log(will);



/* Getter & Setter */
class Plant {
    private speciesName: string = 'Default';

    get species(){
        return this.speciesName;
    }

    set species(input: string){
        if(input.length >= 5) {
            this.speciesName = input;
        } else {
            this.speciesName = 'Default';
        }
    }
}

let plant = new Plant();

console.log('line1', plant);
console.log(plant.species);

plant.species = 'Aloe Vera'; // set the value for setter
console.log(plant.species);
console.log('line2', plant);


/* Static Properties & Methods */
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number):number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(10));