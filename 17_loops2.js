//for of
//The for...of loop, is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.). It iterates over the values of these iterable objects


// const arr = [1, 2, 3, 4, 5]
// for (const num of arr]) {
//     console.log(num);
// }

// const greetings = "Hello World!";

// for (const greet of greetings) {
//     if(greet == " "){
//         break
//     }
//     console.log(greet);
// }

//Maps
// const map = new Map();
// map.set('IN', "India")
// map.set('USA', "United states of america")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     game1: "NFS",
//     game2: "Spiderman"
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

//for in
// The for...in loop is used to iterate over the enumerable properties of an object. It iterates over the keys (property names) of an object, including those inherited through the prototype chain (unless the property is non-enumerable).

// const myObject = {
//     js: "JavaScript",
//     cpp: "C++",
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const coding = ["js", "rb", "py", "java", "cpp"]

// for (const key in coding) {
// console.log(coding[key]);
// }

// const map = new Map();
// map.set('IN', "India")
// map.set('USA', "United states of america")
// map.set('FR', "France")

// for (const key in map) {
//  console.log(map[key]);   
// }

//for each
//JavaScript mein forEach() method hai jo arrays, maps, sets, aur other iterable objects ke elements pe iterate karne ke liye use hota hai. Yeh ek method hai, loop nahi, lekin yeh internally ek loop ke tarah hi kaam karta hai

const coding = ["js", "ruby", "java", "python"];

// coding.forEach( (para) => {
//     console.log(para);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


// const database = [
//     {
//         name: "Nitin Diwakar",
//         age: "18"
//     },
//     {
//         name: "Jhannak Pathak",
//         age: 18
//     },
//     {
//         name: "Karan Gangwar",
//         age: 19
//     },
//     {
//         name: "Deepak Singh",
//         age: 19
//     }
// ]

// database.forEach( (item) => {
//     console.log(item.name);
// } )

/*
//Why for...in Works on Plain Objects
The for...in loop works on plain objects because it iterates over the properties of the object, not over an iterable. Every object in JavaScript has properties (even if it's just the ones inherited from Object.prototype), and the for...in loop is designed to enumerate those properties.

//Why for...of Does Not Work on Plain Objects
The for...of loop does not work on plain objects because it requires the object to implement the iterable protocol. This protocol necessitates the presence of a Symbol.iterator method that returns an iterator object. Plain objects do not have this method by default, so trying to use for...of with a plain object results in a TypeError.
*/
