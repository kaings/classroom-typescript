"use strict";
console.log('Hello Learning Typescript!');
var username = ['Will', 'Don'];
username = ['1', 'John'];
//username = 'Tim';
/* enum */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1001] = "Green";
    Color[Color["Blue"] = 1002] = "Blue";
})(Color || (Color = {}));
var Name;
(function (Name) {
    Name[Name["Dan"] = 0] = "Dan";
    Name[Name["Tom"] = 1001] = "Tom";
    Name[Name["John"] = 1002] = "John";
})(Name || (Name = {}));
var myColor = Color.Blue;
var myColorRev = Color[1001];
console.log(myColor);
console.log(myColorRev);
var myName = Name.John;
console.log(myName);
/* functions */
var name1 = 'Tom';
var num1 = 12;
function returnName() {
    return name1;
}
console.log(returnName());
// void - to set function returns nothing
function sayHello() {
    console.log('Hello World!');
}
// argument types - to specify the types of arguments
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(5, 9));
// function types
var myMultiply1; // in case we do not specify function types, it can be assigned as any function types
myMultiply1 = sayHello;
myMultiply1();
myMultiply1 = multiply;
console.log('type any: ' + myMultiply1(5, 100));
var myMultiply2;
//myMultiply2 = sayHello; // error because not match the function type
//myMultiply2(); // error because not match the function type
myMultiply2 = multiply;
console.log(myMultiply2(5, 100));
/* Objects */
var userData = {
    name: 'Glen',
    age: 25
};
var userData2 = {
    name: 'Mary',
    age: 24
};
//userData = {}; // error - object type mismatch
//userData = { // error - object type & property mismatch
//    a: 'Marry',
//   b: 22
//}
/* complex objects */
var complex = {
    data: [100, 3, 99, 10],
    output: function (val) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3, 99, 10],
    output: function (val) {
        return this.data;
    }
};
/* union types */
var realAge; // if realAge is an array, you can assigned multiple types as `(string|number)[]`
realAge = '30';
realAge = 30;
//realAge = true; //error mismatch the type
//checking types
if (typeof realAge == "number") {
    console.log('realAge has content');
}
if (typeof realAge == "string") {
    console.log('realAge has content');
}
// never type - the function that never returns anything (not 'void' also)
function neverReturns() {
    throw new Error('Error Message!');
}
/* Nullable types */
var canBeNull = 12;
//canBeNull = null; // error - because 'strictNullChecks: true' in tsconfig.json makes the types checking strict
var canAlsoBeNull;
canAlsoBeNull = null; // this is valid, since type is any (value is undefined)
/* noEmitOnError */
var mrA = 'Tom';
//mrA = 50; //error but it is still compiled to js if 'noEmitOnError : false' in tsconfig.js. set 'noEmitOnError: true' to emit compiling js file if error on typescript occurs
/* Arrow Function */
console.log('Arrow Function!');
console.log('----------------');
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(2, 5));
var multiplyNumbers = function (num1, num2) { return num1 * num2; };
console.log(multiply(4, 5));
var multiplyNumbers2 = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(9, 8));
var greet = function () {
    console.log('Say Hello to Arrow Function!');
};
greet();
(function (user) { console.log(user + ' says Hello to Self-invoked Arrow Function!'); })('Will');
(function (user) { console.log(user + ' says Hello to Self-invoked Arrow Function!'); })('Will Tj');
var greetFriend = function (friend) { return console.log('Say Hello to ' + friend); };
greetFriend('Chang');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done! ', start);
};
countdown();
countdown(20);
/* REST & SPREAD */
console.log('SPREAD Operator');
var arrNum = [1, 2, 4, 56, 88];
console.log(Math.max(33, 45, 67, 78));
//console.log(Math.max(arrNum)); // error - the function expects number params, not array
console.log(Math.max.apply(Math, arrNum)); // ... spread operator converts the array of numbers into numbers
console.log('-------------------');
console.log('REST Operator');
function makeArray(arr1, arr2) {
    return [arr1, arr2];
}
function makeArray2() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr;
}
function makeArray3(name) {
    var arrNum = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arrNum[_i - 1] = arguments[_i];
    }
    arrNum.push(name);
    return arrNum;
}
console.log(makeArray(1, 2));
console.log(makeArray2(1, 2, 5, 9, 99, 1899));
console.log(makeArray3('Will', 99, 88, 999, 8989, 83085));
/* Destructuring */
console.log('DESTRUCTURING ARRAYS');
var myHobbies = ['Badminton', 'Outdoor', 'Music'];
//const myhobby1 = myHobbies[0]; // old ways
//const myhobby2 = myHobbies[1]; // old ways
var myhobby1 = myHobbies[0], myhobby2 = myHobbies[1]; //destructure the array and assign its value to variable(s). Simple way instead of const myhobby1 = myHobbies[0] etc. etc
console.log(myhobby1, myhobby2);
console.log('DESTRUCTURING OBJECTS');
var userInfo = {
    userName: 'Ironman',
    age: 35
};
//const userinfoname = userInfo.userName; //old way
//const userinfoage = userInfo.age; //old way
var userName = userInfo.userName, age = userInfo.age; // destructure the object and assign its property(s) to variable(s) - order DOES NOT MATTER. But, variable name MUST SAME as property name OR you an also rename as following line example
//const {age, userName} = userInfo // this one also valid - order DOES NOT MATTER
console.log('WITHOUT ALIAS -- ' + userName, age);
//const {userinfoname, userinfoage} = userInfo; // error - if we wanna do this, we need to rename it/ set alias
var userinfoname = userInfo.userName, userinfoage = userInfo.age;
console.log('USING ALIAS -- ' + userinfoname, userinfoage);
/* Template Literals */
var user_name = 'Will';
var greeting = "TEMPLATE LITERALS\nThis is Header...\nMy name is " + user_name + "...\nI am learning Typescript";
console.log(greeting);
/* Iterators & Generators */
console.log('ITERATORS & GENERATORS');
var myArr1 = [4, 5, 8, 9, 25];
var myObj1 = {
    name: 'Will',
    age: 30,
    job: 'Developer',
    hobbies: ['badminton', 'swim', 'outdoor', 'music']
};
console.log('x in myArr1');
for (var x in myArr1) {
    console.log(x);
}
console.log('---------------');
console.log('x of myArr1');
for (var _i = 0, myArr1_1 = myArr1; _i < myArr1_1.length; _i++) {
    var x = myArr1_1[_i];
    console.log(x);
}
console.log('---------------');
console.log('x in myObj1');
for (var x in myObj1) {
    console.log(x + ' = ' + myObj1[x]);
}
console.log('---------------');
console.log('x of myObj1 - error because myObj1 is not an array');
for (var _a = 0, myObj1_1 = myObj1; _a < myObj1_1.length; _a++) {
    var x = myObj1_1[_a];
    console.log(x);
}
console.log('---------------');
console.log('x of myObj1.hobbies');
for (var _b = 0, _c = myObj1.hobbies; _b < _c.length; _b++) {
    var x = _c[_b];
    console.log(x);
}
console.log('---------------');
