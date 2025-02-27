//Numbers and Maths
/*
//1.Numbers
//Defining a number
const num1 = 600;
console.log(num1);

const num2 = new Number(400);
console.log(num2);

//Number Methods
console.log(num2.toString()); //convert number into string
console.log(num2.toFixed(2)); //using to fixed you can specify how many digits after decimal will display

const num3 = 242.87656;
console.log(num3.toPrecision(3)); //Precision sepicify total number of digits

const num4 = 100000000;
console.log(num4.toLocaleString('en-IN'));
*/

//2. Math
/*
console.log(Math);
console.log(Math.abs(-5)); //abs() convert negative number into positive.
console.log(Math.round(9.7));
console.log(Math.ceil(9.2));
console.log(Math.floor(9.9));
console.log(Math.min(4, 5, 7, 8)); //return smallest number of the array
console.log(Math.max(3, 4, 7, 9)); //return biggest number of array
*/

//Math.random()
//
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
