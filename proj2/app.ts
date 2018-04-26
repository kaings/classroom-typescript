console.log('Hello Learning Typescript!');

let username: string[] = ['Will','Don'];
username = ['1','John'];
//username = 'Tim';

/* enum */
enum Color{
    Red,
    Green = 1001,
    Blue
}

enum Name{
    'Dan',
    'Tom' = 1001,
    'John'
}

let myColor = Color.Blue;
let myColorRev = Color[1001];
console.log(myColor);
console.log(myColorRev);

let myName = Name.John;
console.log(myName);


/* functions */
let name1: string = 'Tom'
let num1: number = 12;

function returnName(): string{
    return name1;
}
console.log(returnName());

// void - to set function returns nothing
function sayHello(): void{
    console.log('Hello World!');
}

// argument types - to specify the types of arguments
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(5,9));

// function types
let myMultiply1; // in case we do not specify function types, it can be assigned as any function types
myMultiply1 = sayHello;
myMultiply1();
myMultiply1 = multiply;
console.log('type any: ' + myMultiply1(5, 100));

let myMultiply2: (val1: number, val2: number)=> number;
//myMultiply2 = sayHello; // error because not match the function type
//myMultiply2(); // error because not match the function type
myMultiply2 = multiply;
console.log(myMultiply2(5, 100));


/* Objects */
let userData = { //object type is {name: string, age: number} => same as userData2
    name: 'Glen',
    age: 25
};

let userData2: {name: string, age: number} = {
    name: 'Mary',
    age: 24
};

//userData = {}; // error - object type mismatch

//userData = { // error - object type & property mismatch
//    a: 'Marry',
//   b: 22
//}


/* complex objects */
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3, 99, 10],

    output: function(val: boolean): number[] {
        return this.data;
    }
};

//complex = {} // error - type mismatch

//we can also group the types into one variable as follows
type complexType = {data: number[], output: (all: boolean) => number[]};

let complex2: complexType = {
    data: [100, 3, 99, 10],

    output: function(val: boolean): number[] {
        return this.data;
    }
};


/* union types */
let realAge: string | number;
realAge = '30';
realAge = 30;
//realAge = true; //error mismatch the type

//checking types
if (typeof realAge == "number"){
    console.log('realAge has content');
}
if (typeof realAge == "string"){
    console.log('realAge has content');
}

// never type - the function that never returns anything (not 'void' also)
function neverReturns(): never{
    throw new Error('Error Message!');
}


/* Nullable types */
let canBeNull = 12;
//canBeNull = null; // error - because 'strictNullChecks: true' in tsconfig.json makes the types checking strict
let canAlsoBeNull;
canAlsoBeNull = null; // this is valid, since type is any (value is undefined)


/* noEmitOnError */
let mrA = 'Tom';
//mrA = 50; //error but it is still compiled to js if 'noEmitOnError : false' in tsconfig.js. set 'noEmitOnError: true' to emit compiling js file if error on typescript occurs




