// Function Declaration
// const walk = () => {
//     console.log('walk');
// }

// //Anonymous Function Expression

// let run =
//  () => {
//     console.log('run')
// };//setting run to an object
// let move = run;
// run();
// move();


//Hoisting- process of moving function declarations to the top of the file

// walk();

// const walk = () => {
//     console.log('walk');
// }



//Arguments //doesn't work

// const sum = (a,b) => {
//     let total = 0;
//     for(let value of arguments)
//         total += value;
//         return total;
//     //console.log(arguments);
//     //return a + b; //  1 + undefined = NaN
// }

// console.log(sum(1, 2))



//Rest Operator, better version than arguments

// const sum = (discount,...prices) => {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30,))



//Default Parameters

// const interest = (principal, rate = 3.5, years = 5) => {
//     // rate = rate || 3.5;
//     // years = years || 5;
//     return principal * rate /100 * years;
// }

// console.log(interest(10000, ))



//Getters and Setters

// const person = {
//     firstName: 'Charity',
//     lastName: 'Bunyon',
//     fullName: () => {
//         return `${person.firstName} ${person.lastName}`
//     }
// };

// console.log(person.fullName())

//refactor
//getters => access properties
//setters => change (mutate) them
// const person = {
//     firstName: 'Charity',
//     lastName: 'Bunyon',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// person.fullName = 'John Smith'
// console.log(person)




//Try & Catch- defensive programming
// const person = {
//         firstName: 'Charity',
//         lastName: 'Bunyon',
//         set fullName(value) {
//             if(typeof value !== 'string')
//                 throw new Error('value is not a string.');

//             const parts = value.split(' ');
//             if(parts.length !== 2)
//                 throw new Error('Enter a first and last name.')
//             this.firstName = parts[0];
//             this.lastName = parts[1];
//         }
//     };
// try {
// person.fullName = '';
// }
// catch(e) {
//     alert(e);
// }

// console.log(person)



//Local and GLobal Scope

// const color = 'red';//global scope

// const start = () => {
//      const message = 'hi';
//      console.log(color)
    
// }

// const stop = () => {
//     const message = 'bye';
// }


// console.log(start());




//Let vs Var
// const start = () => {
//     for(var i = 0; i < 5; i++) {
//         if(true) {
//             let color = 'red';
//         }
//     }
//     console.log(color);
// }
//var => function-scoped
//ES6(ES2015): LET, CONST => block-scoped
// start();

// var color = 'red'; //can use the window object
// let age = 30;




//The this keyword: references the object that is executing the current function

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};
//video.play();
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('a');


