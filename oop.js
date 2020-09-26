//What is object oriented programming
// A programming paradignm centered around objects rather than functions.

//Four Pillars of OOP

//Encapsulation, Abstraction, Inheritance, Polymorphism



//Example Car:
//Properties: make, model, color
//Methods: start(), stop(), move()
//when we group related variables and functions that operate on them on objects = Encapsulation

//Encapsulation Example in Code-- functions have less params(Easier to maintain)- everything is one unit

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
console.log(employee.getWage());


//Abstraction: hide some properities and methods
    //- will make the interface simplier
    //- reduce the impact of change


//Inheritance- mechanism that allows you to eliminate redundant code

//Example

//HTMLElement(hidden, innerHTML, click(), focus())

//A textbox, select, or checkbox can inherit the methods and properties from the HTML so we don't have to write these over and over again




//Polymorphism: means many forms, allows you to get rid of if/else and switch/case 
//implement a render method 


//BENEFITS OF OOP SUMMARY

//Encapsulation- reduce complexity + increase resusability
//Abstraction- reduce complexity + isolate impact of changes
//Inheritance- Eliminates redundant code
//Polymorphism- refactor ugly switch/case statements


