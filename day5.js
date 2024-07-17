//Activity 1: Function Declaration
//Task 1:
function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even Number!`);;
    }
    else {
        console.log(`${num} is odd Number!`);
    }
}
const num = 2;
evenOrOdd(num);

//Task 2:
function calculateSquare(num1) {
    return num1 * num1;
}
const num1 = 4;
const result = calculateSquare(num1);
console.log(`The Square of ${num1} is ${result}`);

//Activity 2: Function Expression
//Task 3:
const maximum = function (num2, num3) {
    console.log(`The Maximum of ${num2} and ${num3} is ${Math.max(num2, num3)}`);
}
const num2 = 11;
const num3 = 7;
maximum(num2, num3);

// Task 4:
const concatenateTwoStrings = function (str1, str2) {
    return str1 + ' ' + str2;
}
const str1 = "This is my";
const str2 = "String";
const result1 = concatenateTwoStrings(str1, str2);
console.log(`Concatenation of "${str1}" and "${str2}" is "${result1}"`);

//Activity 3: Arrow Function
//Task 5:
const sumOfTwoNumbers = (num4, num5) => (num4 + num5);
const num4 = 10;
const num5 = 20;
const result2 = sumOfTwoNumbers(num4, num5);
console.log(`Sum of ${num4} and ${num5} is ${result2}`);

//Task 6:
const checkString = (str3, char) => {
    return str3.includes(char);
}
const str3 = "Hello How are you".toLowerCase();
const char = "v".toLowerCase();
const result3 = checkString(str3, char);
console.log(result3);

//Activity 4: Function Parameters and Default Values
//Task 7:
function favouriteDish(name, dish = "Pizza") {
    return `${name} Favourite Dish is ${dish}`;
};
const name = "Nitin";
// const dish = "Panner Tikka";
const result4 = favouriteDish(name);
console.log(result4);

//Task 8:
function greet(name2, age = "22") {
    return `${name2} age ${age} Welcome sir!`;
};
const name2 = "Harrison";
// const dish = "Panner Tikka";
const result5 = greet(name2);
console.log(result5);

//Activity 5: Higher-Order Functions
//Task 9:
function higherOrderFunc1(func, number) {
    return func(number) * func(number)
};
const func = function (number) {
    return number * number;
};
const result6 = higherOrderFunc1(func, 8);
console.log(result6);

//Task 10:
function higherOrderFunc2(func2, func3, value) {
    const result = func2(value);
    const anotherResult = func3(result);
    console.log(anotherResult);
}

function func2(val) {
    return val - 1;
}
function func3(res) {
    return res - 1;
}
const value = 7;

higherOrderFunc2(func2, func3, value)