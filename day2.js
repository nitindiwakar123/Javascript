//Activity 1: Arithmetic Operators
console.log("\nActivity 1: Arithmetic Operators:");
const num1 = 10;
const num2 = 20;
console.log(`${num1} + ${num2} = `, num1 + num2);
console.log(`${num1} - ${num2} = `, num1 - num2);
console.log(`${num1} * ${num2} = `, num1 * num2);
console.log(`${num1} / ${num2} = `, num1 / num2);
console.log(`${num1} % ${num2} = `, num1 % num2);

//Activity 2: Assignment Operators
console.log("\nActivity 2: Assignment Operators:");
let val = 30;
console.log(`${val} += 10 is`, val += 10);
console.log(`${val} -= 10 is`, val -= 10);

//Activity 3: Comparison Operators
console.log("\nctivity 3: Comparison Operators:");
const number1 = 5;
const number2 = 10;
console.log(`${number1} > ${number2} is`, number1 > number2);
console.log(`${number1} < ${number2} is`, number1 < number2);
console.log(`${number1} >= ${number2} is`, number1 >= number2);
console.log(`${number1} <= ${number2} is`, number1 <= number2);
console.log(`${number1} == ${number2} is`, number1 == number2);
console.log(`${number1} === ${number2} is`, number1 === number2);

//Activity 4: Logical Operators
console.log("\nActivity 4: Logical Operators:");
const bool1 = true;
const bool2 = false;
console.log(`${bool1} && ${bool2} is`, bool1 && bool2);
console.log(`${bool1} || ${bool2} is`, bool1 || bool2);
console.log(`!${bool1} is`, !bool1);
console.log(`!${bool2} is`, !bool2);

// Activity 5: Ternary Operator
console.log("\nActivity 5: Ternary Operator:");
const value1 = 50;
const value2 = 100;
(value1 > value2) ? console.log(`${value1} is Greater`) : console.log(`${value2} is Greater`);