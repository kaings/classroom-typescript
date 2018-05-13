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


/* Abstract Classes */
console.log('Abstract Classes...');

abstract class Project {
    projectName: string = 'Default';
    budget: number;

    abstract changeName(name: string): void;

    calcBudget(){
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);

newProject.changeName('Super IT Project');
console.log(newProject);

newProject.budget = 1000;
console.log(newProject);
console.log(newProject.calcBudget());


/* Private Constructors & Singletons */
console.log('Private Constructors & Singletons...');
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public name: string){}; //this equals to public name: string; plus this.name = name;

    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('The Only One Instance/ Singleton');
        }
        return OnlyOne.instance;
    }
}

//let thisiswrong = new OnlyOne('The Only One Instance'); //this is wrong. Compilation will cause error
let thisisright = OnlyOne.getInstance();
console.log(thisisright);
thisisright.name = 'change the name via accessing name property because its modifier is public';
console.log(thisisright);

/* readonly property */
console.log('readonly property...');
class AnotherOnlyOne {
    private static instance: AnotherOnlyOne;
    public readonly name: string;

    private constructor(name: string){
        this.name = name;
    };

    static getInstance(){
        if(!AnotherOnlyOne.instance){
            AnotherOnlyOne.instance = new AnotherOnlyOne('The Only One Instance/ Singleton');
        }
        return AnotherOnlyOne.instance;
    }
}

//let anotherthisiswrong = new AnotherOnlyOne('The Only One Instance'); //this is wrong. Compilation will cause error
let anotherthisisright = AnotherOnlyOne.getInstance();
console.log(anotherthisisright);
//anotherthisisright.name = 'change the name via accessing name property because its modifier is public'; //reassign the name property is impossible because now then name property is readonly
console.log(anotherthisisright);

