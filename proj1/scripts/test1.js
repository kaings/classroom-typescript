"use strict";
var Greet = /** @class */ (function () {
    function Greet(name) {
        this.name = name;
    }
    Greet.prototype.greetStart = function () {
        console.log('Hello ' + this.name);
    };
    Greet.prototype.greetEnd = function () {
        console.log('See you ' + this.name);
    };
    return Greet;
}());
window.onload = function () {
    var greet = new Greet('Tom');
    greet.greetStart();
    greet.greetEnd();
};
