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
