// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: () => {
//         console.log('draw');
//     }
// };

//curly braces - object literal syntax

// circle.draw();

//Factory function

// const createCircle = (radius) => {
//     return {
//         radius,
//         draw: () => {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1)




// //Constructor Function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = () => {
//         console.log('draw');
//     }
// }

// const another = new Circle(1);



//Constructor Property

// let x = {}; // let x = new Object();
// new String(); // or we can use string literals '', "", or ``
// new Boolean(); // true or false(bool literals)
// new Number(); //1, 2, 3 , etc.

//Summary: every object has a constructor property that and that references the function that was used to correct that object.




//Functions are Objects

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = () => {
//         console.log('draw');
//     }
// }

// const Circle1 = new Function('radius', `
// this.radius = radius;
//     this.draw = () => {
//         console.log('draw');
//     }`
// );

// const circle = new Circle(1);
// const another = new Circle(1);



//Vale vs Reference Types

//Value: Number, String, Boolean, Symbol, Undefined, Null
//Reference: Object, Function, Array

// let x = 10;
// let y = x;

// x.value = 20;
// console.log(x);
// console.log(y);
//Primitives are copied by their value- Value
//Objects are copied by their reference- objects




//Adding and removing properties

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = () => {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10); //objects are dynamic
// circle.location = {x: 1};
// console.log(circle)



//Enumerating Properties

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10); 

// //iterate over the properties in an object use a for in loop
// for (let key in circle) {
//     if(typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }
// //use bracket notation to get the values
// //to get all the keys in an object use object.keys
// const keys = Object.keys(circle);
// console.log(keys);

// //to check for an existing property or method in an object use 'in operator'
// if('radius' in circle)
// console.log('Circle has a radius')




//Abstraction- hide the details and complexity and show the essentials
// function Circle(radius) {
//     this.radius = radius;
    
//     this.defaultLocation = {x: 0, y: 0};

//     this.computeOptimumLocation = function(factor){
//         //...
//     }

//     this.draw = function() {
//         this.computeOptimumLocation(0.1)
//         console.log('draw');
//     }
// }

// const circle = new Circle(10); 
// circle.draw();
//only want to expose the draw and radius method




//Stopwatch

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if(running)
         throw new Error('Stopwatch has already started.');

        running = true;
        startTime = new Date();
    }

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not started.')
        
        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
      
    }

    this.reset = function() {

    }

    Object.defineProperty(this, 'duration', {
    });
}

const sw = new Stopwatch();

console.log(sw);

