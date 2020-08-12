//Object-oriented programming (oop)
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: () => {
//         console.log('draw');
//     }
// };

// circle.draw(); //Method

// Factory Function

// const createCircle = (radius) => {
//     return {
//         radius, //same thing as radius: radius
//         draw: () => {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);

// Constructor Function


//  function Circle(radius) {
//     this.radius = radius; //adding a new propery to empty object
//     this.draw = () => {
//         console.log('draw');
//     }
// }

// const another = new Circle(1);
// 1. creates an empty object
// 2. set this to point to object and then return the object to this function


//Dynamic Nature of Objects

// const circle = {
//     radius: 1
// }

// circle.color = 'yellow';
// circle.draw = () => {

// }

// delete circle.color;
// delete circle.draw;

// console.log(circle);

// Constructor Property

// let x = {} //let x = new Object();


function Circle(radius) {
    this.radius = radius; //adding a new propery to empty object
    this.draw = () => {
        console.log('draw');
    }
}

// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = () => {
//     console.log('draw');
//     }`
// );

// const circle = new Circle(1);

// Circle.call({}, 1); //same thing as line 82
// const another = new Circle(1);


//Value vs. Reference Types

// let x = { value: 10};
// let y = x;

// x.value = 20;

// // Primitives are copied by their value. Objects are copied by their reference
// let obj = { value: 10};
// const increase = (obj) => {
//     obj.value++;
// }

// console.log(increase(obj));
// console.log(obj);


// Enumerating properties of an Object

// const circle = {
//     radius: 1,
//     draw () {
//         console.log('draw');
//     }
// };

// for (let key in circle){
//     console.log(key, circle[key]);
// }

// for (let key of circle){ //objects are not iteratable... so can't use for of loop
//     console.log(key);
// }
//use this instead
// for (let key of Object.keys(circle)){
//     console.log(key)
// };

// for (let entry of Object.entries(circle)){
//     console.log(entry)
// };

// if('radius' in circle){
//     console.log('yes') // if this property is in circle the log yes
// }



//Cloning an object

const circle = {
    radius: 1,
    draw () {
        console.log('draw');
    }
};

// const another = {}
// for (let key in circle){ //old way of doing stuff
//     another[key] = circle[key];
// }

// const another = Object.assign({
//     color: 'yellow'
// }, circle); // this method takes all the properties in circle and copy them in a new object

// const another = { ...circle };
// console.log(another);



// Math (methods)

// Math.round(), .max, .floor, .pi, .sqrt, .random, .max and .min




//String


//strin primitive
const message = 'hi';

//.length, [0] to get first letter, .includes, .startsWith, endsWith, indexOf, replace, toUpperCase(), toLowerCase(), 
//trim() gets rid of white space, split, esacpe notation

//string object
const whoa = new String('hi'); //constructor functions




//Template Literals

const message1 = 'This is my first message';

const mes = `This is my 
first message`;


const name = 'Charity';
const newMes = `${name} ${mes}.`



//Date

const now = new Date();

const date1 = new Date('May 11 2018 09:00');

const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);

// toDateString(), toTimeString, toISOString,



//Exercises

//1. Show Address

const address = {
    street: '111 Heaven Drive',
    city: 'Nashville',
    zipcode: 32221
}

const showAddress = (address) => {
    for (let key in address){
        console.log(key, address[key]);
    }
}

showAddress(address);


//2. Factory Function /Constructor Function

const createAddress = (street, city, zipcode) => {
    return {
        street,
        city,
        zipcode
    };
}

const petesAddress = createAddress('111', 'memphis', 35555);

console.log(petesAddress);

function CreateAddress (street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

const samsAddress = new CreateAddress('Maury Lane', 'Knoxville', 43423);

console.log(samsAddress);

const post = {
    title: 'Learning JavaScript',
    body: 'Learning JavaScript is so fun!',
    author: 'Charity Bunyon',
    views: 255,
    comments: [
        { author: 'Jake From State Farm', body: 'You go girl!'},
        { author: 'MJ', body: "Don't ever give up!"},
    ],
    isLive: true
}

console.log(post);

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post1 = new Post('a', 'b', 'c');
console.log(post1);


let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];

let resturants = [
    {averagePerPerson: 5}
]