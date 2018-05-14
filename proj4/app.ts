namespace MyMath{
    const PI = 3.14;

    export function calcCircumference(diameter: number) {
        return PI * diameter;
    }

    export function calcRectangle(width: number, length: number) {
        return length * width;
    }
}

const PI = 30; //example only. PI inside vs outside MyMath are different

console.log('Circle', MyMath.calcCircumference(10));
console.log('Rectangle', MyMath.calcRectangle(2,10));
console.log('PI outside Mymath', PI);