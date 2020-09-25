const printSmiley = () => {
    document.getElementById('hello').innerHTML = ':-)';
};

const numbers = [3, 4];
//End
numbers.push(5, 6);


//Beginning 
numbers.unshift(1, 2);

//Middle

numbers.splice(2, 0, 'a', 'b');
console.log(numbers);




//Find element in an array

const numbers1 = [1, 2, 3, 1, 4];

console.log(numbers1.indexOf(1));
console.log(numbers1.lastIndexOf(1));
console.log(numbers1.indexOf(1) !== -1);
console.log(numbers1.includes(1));


const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 1, name: 'a'},
];

console.log(courses.includes({id: 1, name: 'a'}));

const course = courses.find( course => course.name === 'a');


console.log(course);



//Remove elements

const numbers2 = [1, 2, 3, 1, 4];
const last = numbers2.pop();

const begin = numbers2.shift()

const mid = numbers2.splice(1, 1);

// console.log(numbers2)
// console.log(mid);



//Emptying an array

let numbers3 = [1, 2, 3, 1, 4];
let another = numbers3;
numbers3 = []; // solution 1
numbers.length = 0 //solution 2

console.log(another, numbers3);




//Slicing Arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const slice = combined.slice(2, 4);
console.log(combined, slice);


// Spread Operator


const combined1 = [...first, ...second];


//Iterating an array

let numbers4 = [10, 11, 12, 13];

for (let number of numbers4){
    console.log(number);
}

numbers4.forEach((number, index) => { // can get the index as well
    console.log(number, index);
})



//Joining arrays

const joined = numbers4.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);
const together  = parts.join('-');
console.log(together);


//Sorting Arrays

numbers4.sort();
numbers4.reverse();
console.log(numbers4);

const subjects = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Javascript'},
];



subjects.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return  1;
    return 0;
});
console.log(subjects);



//Testing elements of an array

const numbers5 = [1, 2, 3, -1];

const allPositive = numbers5.every((value) => { //checks to see if this has a positive value/NUMBER
    return value >= 0;
})

console.log(allPositive);

const atLeastOnePostitive = numbers5.some((value) => { //checks to see if this has at least one that meets the criteria positive value/NUMBER
    return value >= 0;
})

console.log(atLeastOnePostitive);




//Filter an Array

const nums = [1, -1, 2, 3, 5];

const filtered = nums.filter((value) => value >= 0);

console.log(filtered);



//Mapping an array

const items = filtered.map(number => `'<li>' ${number} '</li>`);

console.log(items);

const html = '<ul>' + items.join('') + '</ul>';

console.log(html)

//Reducing an Array

const difNums = [1, -1, 2, 3];

// let sum = 0;

// for(let n of difNums){
//     sum += n;
//     console.log(sum);
// }

//simpler way to reduce all numbers into one number
// reduce accepts 2 params, a callback function and the initial value for the accumulator
const sum = difNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0) //can get rid of 0 and a will be set to 1(first num in array)
console.log(sum);
//a=0, c = 1=> a = 1
//a=1, c= -1 => a = 0
//a=0, c= 2 => a =2
//a=2, c=2 => a => 5

// refactored
// const sum = difNums.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);



//Array from range exercise

// const arrayFromRange = (min, max) =>{
//     const output = [];
//     for(let i = min; i <= max; i++)
//     output.push(i);
//     return output;
// };

// const nums10 = arrayFromRange(1, 10);
// console.log(nums10);


//Includes exercise
//const nums10 = [1, 2, 3, 4];
// const includes = (array, searchElement) => {
//     if(array.includes(searchElement)){
//        return true;
//     } else {
//         return false;
//     }
// };

//or
// const includes = (array, searchElement) => {
//     for(let element of array)
//     if(element === searchElement)
//         return true;
//     return false;
// };

// console.log(includes(nums10, 10));


//Except Exercise
// const except = (array, excluded) => {
//     const output = [];

//     for(let element of array)
//         if(!excluded.includes(element))
//             output.push(element);
//         return output;
      
// }

// const nums10 = [1, 2, 3, 4, 1, 1];
// const output = except(nums10, [1, 2]);

// console.log(output);


//Moving an Element

// const nums10 = [1, 2, 3, 4];

// const move = (array, index, offset) => {
//     const newArray = [...array];
//     const element = newArray.splice(index, 1)[0];
//     console.log(element)
//     newArray.splice(index + offset, 0, element);
//         return newArray;
// };

// const output = move(nums10, 0, 1);

// console.log(output);



//count occurrences exercise

// const nums10 = [1,2,3,4,1];

// const countOccurences = (array, searchElement) => {
//     // let count = 0;
//     // for(let element of array)
//     //     if(element === searchElement){
//     //     count++
//     //     }  
//     //     return count;
//    return array.reduce((accumulator, current) => {
//         const occurrence = (current === searchElement) ? 1 : 0;
//         console.log(accumulator, current, searchElement)
//         return accumulator + occurrence;
//     }, 0);
// }

// const count = countOccurences(nums10, 1);
// console.log(count);


//Get Max Exercise

// const nums10= [1, 2, 3, 4, 5];

// const getMax = (array) => {
//     // for(let element of array)
//     //return Math.max.apply(null, array); //my solution

//     // if(array.length === 0) return undefined; //his solution
//     // let max = array[0];
//     // for(let i = 1; i < array.length; i++)
//     //     if(array[i] > max)
//     //         max = array[i];
//     //     return max;

//     if(array.length === 0) return undefined; //his 2nd solution
//         return array.reduce((a, b) => (a > b) ?  a : b);
    
// }

// const max = getMax(nums10);
// console.log(max);



//Movies exercise

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

//All the movies in 2018 with rating > 4
//sORT them by their rating in descending order
//pick their title



   const titles = movies.filter(m => m.year === 2018 && m.rating >= 4)
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map(m => m.title);
        console.log(titles)
