//Datatypes and Objects
//there is 7 primitive datatypes in javascript 
//null, number, boolean, BigInt, string, symbol, undefined

//let's discuss about number, number contains both integer and floating point numbers
//The number data type represents both integer and floating-point numbers. Operations like addition, subtraction, multiplication, etc., can be performed on them. It also consists of "special numeric values" like Infinity, -Infinity, and NaN.

/*
let num1 = 89; //integer
let num2 = 90.7; //float
console.log(typeof(num1));
console.log(typeof(num2));
*/

//let discuss about BigInt

//the data type BigInt was recently introduced to represent integers of arbitrary length. It is created by appending n to the end of an integer.
// n indicates it's a BigInt

/*
const big = 568479802398679458746487548835848374983n;
console.log(big);
console.log(typeof(big));
*/

//let discuss about string
//The string data type is textual content surrounded by quotes. The quotes can be single quotes, double quotes, and backticks,

/*
//double quotes
const name = "Nitin Diwakar";
console.log(typeof(name));
//single quotes 
const clg = 'IFTM University';
console.log(typeof(clg));

//Backticks are extended functionality quotes that embed variables and expressions into a string by wrapping them in ${…}. Let's look at an example
const info = `${name} at ${clg}`;
console.log(info);
console.log(typeof(info));
*/

// let discuss about boolean
//The boolean data type is a logical value with two values: true and false
/*
let T = true;
let F = false;
console.log(typeof(T));
console.log(typeof(F));
*/

//let discuss about null
//The null data type has exactly one value: null.

//let name = null;

//let discuss about undefined
//undefined is a special value like null. If a variable is declared but not assigned, then its value is undefined. 
/*
let name;
console.log(name);

let age = undefined;
console.log(age);
*/

//let discuss about symbol
//They are created using the factory function Symbol(). Every time the factory function is called, it is guaranteed that a new and unique symbol is created.
/*
let name = Symbol("This is name");
console.log(name);
console.log(typeof(name));
*/

//let's Discuss about Objects
//An object is a value in the memory which is possibly referenced by an identifier. It is an entity having a state and behavior. As mentioned above, an object is a non-primitive data type and must be created by the programmer.
/*
let student = {
    "name": "Nitin",
    age: 18,
    course: "BCA"
}
console.log(student); //display full object
console.log(student.name); //display  single value
*/


//Datatype Summary
//Primitive Data Types
//7: string, Number, boolean, null, undefined, symbol, bigint
/*
let str = "Hello World";
console.log(str)
console.log(typeof str)

let number = 10;
let number2 = 10.5;
console.log(number, number2);
console.log(typeof number, typeof number2);

let bool1 = true;
let bool2 = false;
console.log(bool1, bool2);
co
nsole.log(typeof bool1, typeof bool2);

let n = null;
console.log(n);
console.log(typeof n);

let user=undefined;
let user2;
console.log(user, user2);
console.log(typeof user, typeof user2);

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //Symboles are unique.

const  a = BigInt(2545445545445455454554455454n);
console.log(a)
console.log(typeof a)
*/

//Reference Data type or Non-primitive Data type
//Object, Array, Function
/*
const heros = ["Batman", "Superman", "Spiderman", "Ironman"];
console.log(heros);
console.log(typeof heros);

const obj={
  name: {Nitin: "Diwakar"}, 
  age: 18
};
console.log(obj);
console.log(typeof obj);

const my=function (){
  console.log("Hello World");
}
console.log(typeof my);
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack and Heap
//Stack memoery is used for storing primitive data types and Heap memory is used for storing non-primitive(Reference) data types.

//Stack Memoery Example
/*
let name = "Nitin";
let name2 = name;
name2 = "Diwakar";
console.log(name2);
console.log(name);
*/ //Here name2 is a copy of name that's why name is not changed.

//Heap Memory Example
/*
let user = {
  email: "user123@gmail.com",
  password: "123"
};

let user2 = user;
user2.password = "12345678";

console.log(user.password);
console.log(user2.password);
console.log(user);
console.log(user2);
*/ //Here we can see that both the user and user2 are pointing to the same object.
