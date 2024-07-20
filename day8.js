//Actiivity 1: Template Litrals
//Task 1:
const name = "Harrison";
const age = 26;
console.log(`Name: ${name}, age:${age}`);

// Task 2
const multiLineString = `My name is Nitin Diwakar
I am from Uttar Pradesh
I am Currently pursuing BCA`;
console.log(multiLineString);

//Activity 2: Destructing
// Task 3:
const array = [1, 2, 3, 4, 5];
let a, b;
[a, b] = [1, 2];

console.log(`Destructing Elements of Array is ${a}, ${b}`);

//Task 4:
const obj = {
    userName: "nitin123",
    email: "some@gmail.com",
    password: 1234
}

let { userName: u } = obj;
console.log(`Destructing obj value is ${u}`);

//Activity 3: Spread and Rest Operators
//Task 5:
const array2 = [10, 20, 30, 40, 50];
const newArray = [...array2, 60, 70, 80];
console.log(`New Created Array using Spread Operator: ${newArray}`);

//Task 6:
function sum(...para) {
    let total = 0;
    for (const iterator of para) {
        total += iterator;
    }
    return total;
}
console.log(`Total: ${sum(100, 200, 400)}`);

//Activity 4: Default Parameters
//Task 7:
function add(num1, num2 = 1) {
    return num1 + num2;
}
console.log(`With Second Parameter: ${add(5, 5)}`);
console.log(`Without Second Parameter: ${add(10)}`);

//Activity 5: Enhanced Object Literals
//Task 8:
const studentName = "Nitin Diwakar";
const studentAge = 18;
const studentSay = function () {
    console.log(`Hello I am from Moradabad`);
}
const student = { studentName, studentAge, studentSay };
console.log(student);
console.log(student.studentSay());

const object = {
    studentName: "Nitin",
    studentAge: 21
}
console.log(object);

//Task 9:
const key1 = "UserName";
const key2 = "age";
const value = "myvalue"

const obj2 = {
    [key1]: "Harri",
    [key2]: 19
}
console.log(obj2);