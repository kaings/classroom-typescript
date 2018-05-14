"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return PI * diameter;
    }
    MyMath.calcCircumference = calcCircumference;
    function calcRectangle(width, length) {
        return length * width;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
var PI = 30; //example only. PI inside vs outside MyMath are different
console.log('Circle', MyMath.calcCircumference(10));
console.log('Rectangle', MyMath.calcRectangle(2, 10));
console.log('PI outside Mymath', PI);
//# sourceMappingURL=app.js.map