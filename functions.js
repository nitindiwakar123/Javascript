//JavaScript Functions
//a function is a block of code that we use to perform a specific task

//create a function in JavaScript
function greet() {
    console.log("Hello User");
}

//Returning values from a function.
//In JavaScript Functions, we don’t have to mention the return type in method definition that gives us the freedom to return any data type from the function without changing the method definition again and again.

//Returning integer variable from the function.
// function sum(num1, num2){
//     return num1+num2;
// }
// let Output = sum(4, 5);
// console.log(Output);

//Returning string from the same function
// function sum(num1, num2){
//     let res = num1+num2;
//     return `The sum of two numbers is ${res}`;
// }
// let Output2 = sum(4, 5);
// console.log(Output2);

//parameters and Arguments in functions
//Parameters are the variables passed to the function or the variable which gets defined while declaring a function.
//Function arguments are the real values passed to (and received by) the function.
//
// function cube(number){ //here number in parantheses is parameter
//     console.log(number*number*number);
// }
// cube(2) //here 2 is Argument

// Anonymous Functions
//“Anonymous” Function as the name indicates these are the functions in javascript without a name.

// let subtract = function(a, b){
//     return a-b;
// }
// console.log(subtract(2, 3));

//Inbuilt Functions in JavaScript
//JavaScript has a whole range of different built-in functions available. To mention a few, I have explained below some common functions:

//charAt(index)
// let string = "My String";
// console.log(string.charAt(1))

//concat()
// let str1 = ['a', 'b', 'c'];
// let str2 = [1, 2, 3, 4];
// let str3 = str1.concat(str2);
// console.log(str3);

//strike()
// let str = "Hello World";
// console.log(str.strike());

//+++++++++++++++++++++++++++++++++++++++++++++++++++
// let name = "nitin";

// function greet(name) {
//     console.log(`Good Morning ${name}`);
// }

// greet(name);

// function addTwoNumbers(num1, num2){
//    console.log(num1+num2);
// }
// function addTwoNumbers(num1, num2){
//    let result = num1+num2;
//    return result;
// }

// // addTwoNumbers(4, 6)
// const result = addTwoNumbers(4,6);
// console.log(result);

// function userLoggedIn(userName){
// if(userName === undefined){
//     console.log("Please enter a username");
//     return
// }
//     return  `${userName} is logged-in`;
// }

// console.log(userLoggedIn());
// // let logged = userLoggedIn("Nitin");
// // console.log(logged);

//functions with objects and array

// function calculateCartPrice(val1, val2, ...num){
//  return num;
// }
// console.log(calculateCartPrice(200, 500, 700, 899, 999, 1999))

// const user = {
//     username: "Nitin Diwakar",
//     prices: 999
// }

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// handleObject({
//     username: "Haukhan",
//     price: 90
// });

// let arr = [200, 300, 400];

// function DisplayArrayValue(getArray){
//     return getArray[1];
// }
// console.log(DisplayArrayValue([23, 45, 65]));
