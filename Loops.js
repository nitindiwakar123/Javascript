//Loops in Javacript
//a loop is a sequence of instructions that can be made to continually repeat until a specific condition is met.

//1. for loop
//The for loop repeats a set of code until the condition that controls the evaluates the loop fails or becomes false.
/*
for (let i = 0; i < 5; i++){
  console.log(i);
}
*/
//2. for in loop
//The for...in loop in Javascript is used to loop through the properties of an object. 
/*
//Example 1
const obj = {
  name: "Nitin",
  age:  18,
  course: "BCA"
}

for (let a in obj){
  console.log("The value in " + a + " is " 
+ obj[a]);
}

//Example 2
const rectangle = {
  length: 25,
  width: 5,
  color: "Red"
};

let txt = "";

for (let x in rectangle){
  txt += rectangle[x] +  " ";
}
console.log(txt);

//Example 3 for in loop in array
const Basket = ["Apple", "Mango", "Banana", "Grapes"];
let fruit;
for (fruit in Basket){
  console.log(Basket[fruit]);
}
*/

//3. for of loop
//We can use the javascript for-of loop to loop through the values of an iterable object in Javascript.
/*
let name = [1, 2, 3, 4, 5];
for (let a of name){
  console.log(a);
}
*/

//4. While loop
//While loop execute a block of code as long as a specified condition is true.
/*
let a = 10;
let i = 0;
while (i<a)
  {
    console.log(i);
    i++;
    }
*/

//5. do while loop
//The do while loop is similar to the while loop, except that the condition is checked after the execution of the statements in the loop.
/*
let a = 10;
let i = 0;
do {
  console.log(i);
  i++;
} while(i<a);
*/
//do while loop executes the block of code atleaset once.
/*
let a = 0;
let i = 0;
do {
  console.log(i);
  i++;
} while(i<a);
*/
