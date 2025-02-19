//JavaScript 'this' keyword and Arrow functions
//'this' keyword
//In JavaScript, the this keyword refers to an object. The this keyword refers to different objects depending on how it is used:
/*
//this in a Method
//When used in an object method, this refers to the object.
const user = {
    userName: "Nitin",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} , Welcome to the Website`);
        // console.log(this);
    }
}
user.welcomeMessage();
user.userName = "Harison";
user.welcomeMessage();
*/


/*
//this Alone
// When used 'this' alone, this refers to the global object Because this is running in the global scope.
//in node.js 'this' refers to an empty object.
console.log(this);

// In a browser window the global object is [object Window]:
*/
/*
//this in a Function (Default)
//In a function, this refers to the global object.
// function add(){
//     console.log(this);
// }
// add();
//In a browser window the global object is [object Window]:
*/

//Quick Review

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


//+++++++++++++++++++++++++++++++++++++++++++++++++
//tutorial code

//this keyword
// const user = {
//     userName: "Nitin",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.userName} , Welcome to the Website`);
//         // console.log(this);
//     }
// }
// user.welcomeMessage();
// user.userName = "Harison";
// user.welcomeMessage();

// console.log(this);

// function one(){
//     // const userName = "Nitin";
//     console.log(this.userName);
// }
// one();

// const one = function(){
//     const userName = "Nitin";
//     console.log(this.userName);
// }
// one();


//Arrow functions
// const one = () => {
//     const userName = "Nitin";
//     console.log(this.userName);
// }
// one();

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }
// console.log(addTwo(4, 5));

// const addTwo = (num1, num2) => num1+num2;
// console.log(addTwo(2, 3));

// const addTwo = (num1, num2) => (num1+num2);
// console.log(addTwo(2, 3));

// const addTwo = () => ({username: "Nitin"});
// console.log(addTwo());

//Immediately Invoked Function Expressions(IIFE)
//Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

//syntax 
/*
(function(){
    //function logic here
})();
*/

//Example 1
(function func(){
    //Named IIFE
    console.log(`DB CONNECTED`);
})();

//Example 2
const result = (function() {
    const x = 10;
    const y = 20;
    return x+y;
})();

console.log(result);

//Example 3
( (name) => {
    //Anonymous IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("Nitin");

// Use Cases Of IIFE:
// Avoid polluting the global namespace.
// To create closures in JavaScript.
// IIFE is used to create private and  public variables and methods.
// It is used to execute the async and await function.
// It is used to work with require function.
