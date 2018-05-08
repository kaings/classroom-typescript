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
let realAge: string | number; // if realAge is an array, you can assigned multiple types as `(string|number)[]`
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




/* Arrow Function */
console.log('Arrow Function!');
console.log('----------------');
const addNumbers = function(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addNumbers(2,5));

const multiplyNumbers = (num1: number, num2: number): number => num1 * num2;
console.log(multiply(4,5))


const multiplyNumbers2 = (num1: number, num2: number): number => {
    return num1 * num2;
}
console.log(multiply(9,8))

const greet = () => {
    console.log('Say Hello to Arrow Function!');
}
greet();

((user: string)=>{ console.log(user + ' says Hello to Self-invoked Arrow Function!') })('Will');
((user: string): void =>{ console.log(user + ' says Hello to Self-invoked Arrow Function!') })('Will Tj');


const greetFriend = (friend: string) => console.log('Say Hello to ' + friend);
greetFriend('Chang');

const countdown = (start: number = 10): void => {
    console.log(start);
    while(start > 0) {
        start--;
    }
    console.log('Done! ',start);
};
countdown();
countdown(20);


/* REST & SPREAD */
console.log('SPREAD Operator');
const arrNum = [1,2,4,56,88];
console.log(Math.max(33,45,67,78));
//console.log(Math.max(arrNum)); // error - the function expects number params, not array
console.log(Math.max(...arrNum)); // ... spread operator converts the array of numbers into numbers
console.log('-------------------');

console.log('REST Operator');
function makeArray (arr1: number, arr2: number) { //creating array But, params that can be passed is limited
    return [arr1, arr2];
}

function makeArray2 (...arr: number[]) { // REST operator makes it easier to create array. you can pass as many as possible. in this case it is called REST operator
    return arr;
}

function makeArray3 (name: string, ...arrNum: (number|string)[] ) { //mixing also possible. But, REST operator must be at the last of param list
    arrNum.push(name);
    return arrNum;
}

console.log(makeArray(1,2));
console.log(makeArray2(1,2,5,9,99,1899));
console.log(makeArray3('Will',99,88,999,8989,83085));


/* Destructuring */
console.log('DESTRUCTURING ARRAYS');
const myHobbies = ['Badminton', 'Outdoor', 'Music'];
//const myhobby1 = myHobbies[0]; // old ways
//const myhobby2 = myHobbies[1]; // old ways
const [myhobby1, myhobby2] = myHobbies;  //destructure the array and assign its value to variable(s). Simple way instead of const myhobby1 = myHobbies[0] etc. etc
console.log(myhobby1, myhobby2);

console.log('DESTRUCTURING OBJECTS');
const userInfo = {
    userName: 'Ironman',
    age: 35
};
//const userinfoname = userInfo.userName; //old way
//const userinfoage = userInfo.age; //old way
const {userName, age} = userInfo; // destructure the object and assign its property(s) to variable(s) - order DOES NOT MATTER. But, variable name MUST SAME as property name OR you an also rename as following line example
//const {age, userName} = userInfo // this one also valid - order DOES NOT MATTER
console.log('WITHOUT ALIAS -- ' + userName, age);

//const {userinfoname, userinfoage} = userInfo; // error - if we wanna do this, we need to rename it/ set alias
const {userName: userinfoname, age: userinfoage} = userInfo;
console.log('USING ALIAS -- ' + userinfoname, userinfoage);


/* Template Literals */
const user_name = 'Will';
const greeting = `TEMPLATE LITERALS
This is Header...
My name is ${user_name}...
I am learning Typescript`;
console.log(greeting);


/* Iterators & Generators */
console.log('ITERATORS & GENERATORS');
let myArr1 = [4, 5, 8, 9, 25];
let myObj1: any = {
    name: 'Will',
    age: 30,
    job: 'Developer',
    hobbies: ['badminton','swim','outdoor','music']
};

console.log('x in myArr1');
for(let x in myArr1){
    console.log(x);
}
console.log('---------------');

console.log('x of myArr1');
for(let x of myArr1){
    console.log(x);
}
console.log('---------------');

console.log('x in myObj1');
for(let x in myObj1){
    console.log(x + ' = ' + myObj1[x]);
}
console.log('---------------');

console.log('x of myObj1 - error because myObj1 is not an array');
for(let x of myObj1){
    console.log(x);
}
console.log('---------------');

console.log('x of myObj1.hobbies');
for(let x of myObj1.hobbies){
    console.log(x);
}
console.log('---------------');


