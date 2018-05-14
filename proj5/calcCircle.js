"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return PI * diameter;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
//# sourceMappingURL=calcCircle.js.map