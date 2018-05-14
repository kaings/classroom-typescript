var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return PI * diameter;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calcRectangle(width, length) {
        return length * width;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        //const PI = 3.14;
        function calcCircumference2(diameter) {
            return PI * diameter;
        }
        Circle.calcCircumference2 = calcCircumference2;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var Rectangle;
    (function (Rectangle) {
        function calcRectangle2(width, length) {
            return length * width;
        }
        Rectangle.calcRectangle2 = calcRectangle2;
    })(Rectangle = MyMath.Rectangle || (MyMath.Rectangle = {}));
})(MyMath || (MyMath = {}));
// compile everything into one file app.js: 'tsc app.ts --outFile app.js'
/// <reference path = 'calcCircle.ts' />
/// <reference path = 'calcRectangle.ts' />
/// <reference path = 'calcCircle-2.ts' />
/// <reference path = 'calcRectangle-2.ts' />
var PI = 30; //example only. PI inside vs outside MyMath are different
console.log('Circle', MyMath.calcCircumference(10));
console.log('Rectangle', MyMath.calcRectangle(2, 10));
console.log('PI outside Mymath', PI);
var Rectangle2 = MyMath.Rectangle; //create an alias also works
console.log('Circle2', MyMath.Circle.calcCircumference2(50));
console.log('Rectangle2', Rectangle2.calcRectangle2(2, 50));
