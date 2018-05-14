// compile everything into one file app.js: 'tsc app.ts --outFile app.js'

/// <reference path = 'calcCircle.ts' />
/// <reference path = 'calcRectangle.ts' />

/// <reference path = 'calcCircle-2.ts' />
/// <reference path = 'calcRectangle-2.ts' />

const PI = 30; //example only. PI inside vs outside MyMath are different

console.log('Circle', MyMath.calcCircumference(10));
console.log('Rectangle', MyMath.calcRectangle(2,10));
console.log('PI outside Mymath', PI);




import Rectangle2 = MyMath.Rectangle; //create an alias also works

console.log('Circle2', MyMath.Circle.calcCircumference2(50));
console.log('Rectangle2', Rectangle2.calcRectangle2(2,50));