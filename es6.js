//Old function

// function Circle(radius) {
//     this.radius = radius;

//     this.draq = function() {
//         console.log('draw');
//     }
// }



//Function using ES6

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.move = function() {}
//     }// define methods in the body of this class
//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle(1);



//Hoisting

//Function Declaration- raised to the top of the code
// sayHello();
// function sayHello() {}

// //Function Expression- need semicolon
// const sayGoodBye = function() {};


// //Class Declaration
// const c = new Circle(); //everyone uses this syntax
// class Circle {

// }

// //Class Expression
// const Square = class {
// };





//Static Methods

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.move = function() {}
//     }
//     //Instance method
//     draw() {
//         console.log('draw');
//     }

//     //static method- working with the class itself and I don't have to create an instance of a class
//     static parse(str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }

// const circle = new Circle(1);
// const circle1 = Circle.parse('{"radius": 1}');
// console.log(circle1);

//use static functions to create utility functions that aren't tied to a particular object





//This keyword

const Circle = function() {
    this.draw = function() {console.log(this);}
};

const c = new Circle();
//method call
c.draw();

const draw = c.draw;
//function call
draw();


class Circle {
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();