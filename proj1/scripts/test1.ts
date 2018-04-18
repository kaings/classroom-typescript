class Greet {
    name: string;

    constructor(name) {
        this.name = name;
    }

    greetStart() {
        console.log('Hello ' + this.name);
    }

    greetEnd() {
        console.log('See you ' + this.name);
    }
}

window.onload = function() {
    var greet = new Greet('Tom');
    greet.greetStart();
    greet.greetEnd();
}