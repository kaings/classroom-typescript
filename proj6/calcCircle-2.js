"use strict";
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
//# sourceMappingURL=calcCircle-2.js.map