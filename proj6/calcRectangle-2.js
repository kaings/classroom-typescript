"use strict";
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
//# sourceMappingURL=calcRectangle-2.js.map