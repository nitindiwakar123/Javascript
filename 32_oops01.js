// Object Oriented Programming

//Object litral
// const user = {
//     username: "Nitin",
//     email: "some@gmail.com",
//     password: "1234dfg"
// }


// const user2 = {
//     username: "Nitin",
//     email: "some@gmail.com",
//     password: "1234dfg",

//     details: function(){
// console.log("Details Accessed!");
// // console.log(`username ${this.username}`);
// // console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.details());

//Constructor
function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.greet = function(){
        console.log(`Welcome: ${this.username}`);
    }
    return this;
}

const userOne = new user("Niittn", "dsome@gmail.com", "dfjhhd")
const userTwo = new user("chai", "chai@gmailcom", "chai1234")
// console.log(userOne);
// console.log(userTwo);
// console.log(userOne.greet());
// console.log(userTwo.greet());

console.log(userOne.constructor);
console.log(userOne instanceof user);

//The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. 

//new keyword
// the new keyword is used to create an instance of an object that has a constructor function. When the new keyword is used, it does the following:

//1. Creates a new empty object.
//2. Sets the prototype of the new object to the prototype property of the constructor function.
//3. Binds `this` to the new object inside the constructor function.
//4. Executes the constructor function with the provided arguments.
//5. Returns the new object, unless the constructor function returns a non-primitive value (in which case, that value is returned instead).


//four pillars of oops
// 1. Encapsulation - Encapsulation is the concept of bundling data (variables) and methods (functions) that operate on the data into a single unit or object. 

// 2. Abstraction - Abstraction involves hiding the complex implementation details and showing only the necessary features of an object.

//3. Inheritance - Inheritance is a mechanism where a new class derives properties and behavior from an existing class.

//4. Polymorphism - Polymorphism allows objects of different classes to be treated as objects of a common super class. 

//this keyword
// In JavaScript, the this keyword refers to the context in which the current code is being executed.
