//Objects

let person = {
    firstName:'Charity',
    lastName: 'Bunyon',
    age: 30
}

person.firstName = 'Lisa';

console.log(person);

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors.push('green');
console.log(selectedColors.length);

//Functions

const greet = (firstName, lastName) => {
    console.log(`Hello ${firstName} ${lastName}.`);
}

greet('Charity', 'Bunyon');

//Calculates

const square = (number) => {
    return number * number;
}

console.log(square(2));

let a = 'red';
let b = 'blue';


console.log(a);
console.log(b);

//if/else
let hour = 20;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning!');
}
else if (hour > 12 && hour < 18 ){
    console.log('Good aternoon!');
}
else{
    console.log('Good evening!');
}

//switch/case

let role = 'girl';

switch(role) {
    case 'guest':
        console.log('Greet user');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

//For loop

for (let i = 5; i >= 1; i--) {
    if(i % 2 !== 0) console.log(i);
}

//While loop

let i = 0;
while(i >= 10 ){
    if(i % 2 !== 0) console.log(i);
    i++;
}

//DO while loop

let j = 9;
do {
    if(j % 2 !== 0) console.log(j);
    j++;
} while (j <= 10);


//For In to interate of items in an array

const persons = {
    name: 'Charity',
    age: 30
};

for (let key in persons)
console.log(key, persons[key]);

const colors = ['red', 'green', 'blue'];

for (let index in colors)
console.log(index, colors[index]);


//For -of - iterate over elements in an array
for (let color of colors)
console.log(color);


//Break and continue

//Max of two numbers

const maxOfNum = (num1, num2) => {
    return (num1 > num2) ? num1 : num2;
}

console.log(maxOfNum(10, 4));

const isLandscape = (width, height) => {
   return (width > height);
}

console.log(isLandscape(5, 1));

const fizzBuzz = (input) => {
    if (typeof input !== 'number'){
        return 'Not a number';
    }
    if(input % 3 === 0 && input % 5 === 0) {
        console.log('FizzBuzz')
    } else if (input % 5 === 0) {
        console.log('Buzz')
    } else if (input % 3 === 0){
        console.log('Fizz')
    } else {
        console.log(input)
    }
}

fizzBuzz('hello');


const checkSpeed = (speed) => {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint){
        console.log('Ok');
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points >= 12){
        console.log('License Suspended!')
    } else {
        console.log(`Points: ${points}`);
    }
    }

checkSpeed(80);

const showNumbers = (limit) => {
    for(let i = 0; i <= limit; i++){
        if(i % 2 === 0){
            console.log(i, 'EVEN');
        } else {
            console.log(i, 'ODD');
        }
    }
}

showNumbers(10);


const array = [ 1, 2, 3];

const countTruty = (array) => {
    let count = 0;
    for(let value of array)
        if(value)
            count++
    return count;
}

console.log(countTruty(array));


const movie = {
    title: 'Mulan',
    releaseYear: 2020,
    rating: 4.5,
    director: 'Spielberg'
};

const showProperties = (obj) => {
    for(let key in obj)
        if (typeof obj[key] === 'string')
        console.log(key, obj[key])
    
}

showProperties(movie);

const sum = (limit) =>{
    let sum = 0;
    for (let i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0){
           sum += i;
        }
    }
    return sum;
}

console.log(sum(10));

const marks = [80, 80, 50];

const calculateGrade = (marks) => {
   const average = calculateAverage(marks)
        if(average < 60) return 'F';
        if(average < 70) return 'D';
        if(average < 80) return 'C';
        if(average < 90) return 'B';
        return 'A';
        
}

const calculateAverage = (array) => {
    let sum = 0;
    for(let value in array){
        sum += value;
        return average = sum / array.length;
    }
}

console.log(calculateGrade(marks));