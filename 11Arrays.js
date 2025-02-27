//Arrays in JavaScript
//In Javascript, an Array is used to store multiple values in a single variable. It is a data structure that stores a collection of values with different data types, such as numbers, strings, or objects. The array elements are indexed starting from 0, and they can be accessed via these indexes using various methods in Javascript.
/*
//Creating an Array
//1.using array literal
const arr = [1, 2, 3, 4, 5];
console.log(arr);
//Accessing Array Elements
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//2.using constructor
const arr1 = Array("Apple", "Mango", "Banana");
console.log(arr1);

//3.using constructor with new keyword
const arr2 = new Array("One", "Two", "Three");
console.log(arr2);

//length property
console.log(arr2.length); //returns the length of the array
*/

//Array Methods
//Many useful JavaScript functions help us to perform different works in an array. Some of the widely used methods are described below:
//.1 indexOf() method
//After the creation of the array, we now require to know the position of certain elements in the array. For this purpose, we use the indexOf() method.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3));
// console.log(arr.indexOf(9)); //if the element not present in the array then it will return -1
//.2 find() method
//We use this method for returning the first found element in the array, which satisfies the given condition
// const arr1 = ["1800", "123", "3598"];
// const ans = arr1.find(x=>x>=3000);
// console.log(ans);
// console.log(arr1);
//3. findIndex()
//returns the first element satisfying our conditions. What if we need its index? For this purpose, we have a method named the findIndex() method since this method returns the index of the first element that satisfies the condition.
// const ans2 = arr1.findIndex(x=>x>=3000);
// console.log(ans2);
//4. concat() method
//When we want to combine two or more arrays into one single array, we use the concat() method. It does not change the original arrays and rather returns a new array.
// let mcu = ["Ironman", "Spiderman", "Thor", "Captain America"];
// let dc = ["Batman", "Superman", "Aquaman", "Flash"];
// let allHeros = mcu.concat(dc);
// console.log(allHeros);
//another way to combine arrays
// let allHeros1 = [...mcu, ...dc];
// console.log(allHeros1);
//5.join() method
//it is used to join the elements of an array and returns a string. 
// let array = [1, 2, 3, 4, 5];
// array = array.join();
// console.log(array, typeof array)
//6.flat() method
//It is used to flatten an array. it used to convert a multidimensional array into a single dimensional array.
// let array2 = [1, 2, 3, [4, 5, [6, 7, 8,[9, 10]]]];
// console.log(array2.flat(Infinity));
//7.push() method
//It adds elements at the end of the array.
// let array3 = [1, 2, 3, 4, 5];
// console.log("OG Array ", array3);
// array3.push(6);
// console.log("After Push ", array3);
//8.pop() method
//We use this method to remove the last element of the array. 
// array3.pop();
// console.log("After POP ", array3);

//9.filter() method
//We use this method to extract only the elements which satisfy the required conditions. We are not changing the original array; it returns a new one.
// let array4 = [67, 35, 43, 65, 33, 86];
// let array5 = array4.filter(x=>x>50);
// console.log(array5);

//10. unshift() method
//it adds elements at the beginning of the array.
// let array6 = [56, 34, 57, 23];
// console.log("OG Array ", array6);
// array6.unshift(50);
// console.log("After Unshift ", array6);
//11. shift() method
//it removes the first element of the array.
// array6.shift();
// console.log("After Shift ", array6);

//12. slice() method
//it is used to extract a part of the array. it returns a new array.
// let array7 = [1, 2, 3, 4, 5, 6];
// console.log("Og Array ", array7);
// let n1 = array7.slice(1, 4);
// console.log("slice array ", n1);
// console.log("Og Array ", array7);
//13. splice() method
//The splice method in JavaScript is used to change the contents of an array by removing, replacing, or adding elements. It can be quite versatile, allowing for multiple operations in a single method call.
// let n2 = array7.splice(1, 4, 10, 20, 30, 40);
// console.log("splice array ", n2);
// console.log("Og Array ", array7);

//Some of the other useful methods are:
// let arr = [67, 35, 43, 65, 33, 86];
// console.log(arr.lastIndexOf(2));
// console.log(arr.reverse());
// console.log(arr.sort());
// console.log(arr.toString());
//console.log(arr.includes(67));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Tutorial Code
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// let arr2 = [1, 2, true, "jhhghd", false, null, undefined, Symbol("djh"), BigInt(458987n)]; //We can add any type of data in array
// console.log(arr2);

// let arr = [0, 1, 2, 3, 4, 5];
// let arr2 = ["Batman", "Superman", "Flash", "Wonder Woma"];
// let arr3 = new Array(1, 2, 3, 4, 5);
// console.log(arr);
// console.log(arr2);
// console.log(arr3);

//Array Methods
//let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.push(6);
// console.log(arr);
// arr.push(90);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(89);
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.includes(9));
// console.log(arr.includes(3));
// console.log(arr.indexOf(9));
// console.log(arr.indexOf(3));
// let newa = arr.join(" ");
// console.log(newa);

// console.log("A ", arr);
// let n1 = arr.slice(1, 3);
// console.log(n1);
// console.log("B ", arr);
// let n2 = arr.splice(1, 3);
// console.log(n2);
// console.log("C ", arr);

// const marvel_heros = ["Thor", "Ironman", "Spiderman", "Captain America"];
// const dc_heros = ["Batman", "Superman", "Aquaman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[4]);
// console.log(marvel_heros[4][1]);

// let All_Heros = marvel_heros.concat(dc_heros);
// console.log(All_Heros);
// console.log(All_Heros[0]);
// console.log(All_Heros[6]);
// let array = [1, 3, 6, 4, 6]
// let spread = [...marvel_heros, ...dc_heros, ...array]
// console.log(spread);

// let arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// let arr2 = arr.flat(Infinity);
// console.log(arr2);

// console.log(Array.isArray("jsjhfdbv"));
// console.log(Array.from("jsjhfdbv"));
// console.log(Array.from({name: "nitin"}));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));
