//Activity 1: Array Creation and Access
//Task 1:
const arr = [1, 2, 3, 4, 5];
console.log(`Your Array is `, arr);

//Task 2:
console.log(`First Element of the Array is ${arr[0]}`);
console.log(`Last Element of the Array is ${arr[4]}`);

//Activity 2: Array Methods(Basic)
//Task 3:
arr.push(6);
console.log('After Push Updated Array is ', arr);

// Task 4:
arr.pop();
console.log('After POP Updated Array is ', arr);

//Task 5:
arr.shift();
console.log('After Shift Updated Array is ', arr);

//Task 6:
arr.unshift(9);
console.log('After Unshift Updated Array is ', arr);

//Activity 3: Array Methods(Intermediate)
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Task 7:
const newArray = array.map((element) => element * 2);
console.log('After Using Map Method New Array:', newArray);

//Task 8:
const newArray2 = array.filter((element) => element % 2 === 0);
console.log('After Using Filter Method New Array:', newArray2);

//Task 9:
const newArray3 = array.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log('After Reduce Method Result is:', newArray3);

//Activity 4: Array Iteration
//Task 10:
console.log('Using for loop:');
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`Index: ${i}, Element: ${element}`);

}
console.log('\n');
//Task 11:
console.log('Using forEach Method:');
array.forEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
})

//Activity 5: Multi-dimensional Arrays
// Task 12:
const matrix = [[1, 2, 3, 4], [5, 6, 7, 8]];
console.log('two dimensional array is: ', matrix);
console.log('Accessing Specific Element: ', matrix[0][1]);