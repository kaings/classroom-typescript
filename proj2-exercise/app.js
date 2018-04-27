"use strict";
console.log('---------------Module Exercise---------------');
/*
// Exercise 1
var double = function(value) {
    return value * 2;
};
console.log(double(10));
*/
var double = function (value) {
    return value * 2;
};
console.log(double(10));
/*
// Exercise 2
var greet = function (name) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
*/
var greet = function (name) {
    if (name === void 0) { name = 'Default'; }
    console.log('Hello, ' + name);
};
greet();
greet('Anna');
/*
// Exercise 3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
*/
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
/*
// Exercise 4
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
*/
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
/*
// Exercise 5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
*/
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
console.log([result1, result2, result3]);
/*
// Exercise 6
var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
*/
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
