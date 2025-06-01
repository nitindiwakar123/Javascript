//Objects and Prototype
function func(num) {
    return num * 5;
}

// func(5);
func.power = 2;

// console.log(func(5));
// console.log(func.power);
// console.log(func.prototype);

function user(username, score) {
    this.username = username;
    this.score = score;
}

user.prototype.increment = function () {
    this.score++;
};

user.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
};

const chai = new user("chai", 25);
const tea = new user("tea", 250);

// chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

Object.prototype.getStudentDetails = function () {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
};

function students(name, age) {
    this.name = name;
    this.age = age;

    return this;
}

const studentOne = new students("Nitin", 18);
const studentTwo = new students("Vansh", 19);
const studentThree = new students("Karan", 20);

studentOne.getStudentDetails();
studentTwo.getStudentDetails();
studentThree.getStudentDetails();
