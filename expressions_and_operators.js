//Expressions in JavaScript
//An expression is any valid unit of code that resolves to a value. It can be as simple as a literal value or as complex as a combination of variables, operators, and function calls that ultimately produce a value.
// 5;
// 90;
// "nitin";
// true;
// undefined;
// null;
// 6+7;
//These are the example of valid expression

//Invalid Expression
// sgdygsfskhfhfgdjfjkdjfy

//Operators in JavaScript
// Operators are symbols used for performing mathematical operations, logical comparisons.

//1.Arithmetic Operator
// Arithmetic operations are performed on the operands using the arithmetic operators.
/*
let a = 60;
let b = 5;

console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b); //used to find the power
console.log("a++ is ", a++); //first print old value and then increase value. Output=60, value=61
console.log("++a is ", ++a); //first increase value and then print value. output=62, value=62
console.log("a-- is ", a--); //first print old value and then decrease the value. output=62, value=61
console.log("--a is ", --a); //first decrease value and then print value. output=60, value=60
*/

//2.Comparison Operator
//They are used to compare the two operands, and the result is always true or false.
/*
let x = 11.6;
let y = 11.6;

console.log("x>y is ", x>y);
console.log("x>=y is ", x>=y);
console.log("x<y is ", x<y);
console.log("x<=y is ", x<=y);
console.log("x==y is ", x==y); //returns the value true if the operands are equal.
console.log("x===y is ", x===y); //returns the value true if the operands are equal and of the same type.
console.log("x!=y is ", x!=y); // returns the value true if the operands are not equal.
console.log("x!==y is ", x!==y); // returns the value true if the operands are not equal or are of different types.
*/

//3. Logical Operator
//Logical operations like AND, OR, and NOT are performed on the operands using the logical operators
/*
let x = true;
let y = false;

console.log("x && y = ", x && y); //	Logical AND returns the value true if both the operands/boolean values are true. Else false is returned.
console.log("x || y = ", x || y); //	Logical OR returns the value true if at least one of the operands/boolean values are true. Else false is returned
console.log("!x = ", !x); //	Logical NOT return the value true if the operand is false and vice-versa
console.log("!y = ", !y);
*/

//4. Bitwise Operator
//They are used to perform Bitwise operations on operands, firstly it converts the  operands values in binary form, perform operations and then convert result in decimal form.
/*
const x = 0; //binary form 0000000
const y = 1; //binary form 0000001
//Binary Logical AND(&) = 0000000 = 0
//Binary Logical OR(|) =  0000001 = 1
//Binary Logical XOR(^) = 0000001 = 1

console.log("x & y = ", x & y); //Bitwise Logical AND returns the 1(true) if both are 1(true) otherwise 0(false),
console.log("x | y = ", x | y); //Bitwise Logical OR returns the 1(true) if one of operand value is 1(true) otherwise 0(false),
console.log("x ^ y = ", x ^ y); //Bitwise Logical XOR returns the 1(true) if both are different values otherwise 0(false),
console.log("~x = ", ~x); //Bitwise NOT operator inverts the bits of its operand.
console.log("y<<1 = ", y << 2); //Output 4 = 0000100, It shifts the bits of the operand to the left by a specified number of positions, filling the vacated positions with zeroes.
console.log("y>>1 = ", y >> 2); //Output 0 = 0000000, It shifts the bits of the operand to the right by a specified number of positions. It fills the vacated positions with the sign bit (the leftmost bit).
console.log("y>>>1 = ", y >>> 2); //Output 0 = 0000000, It shifts the bits of the operand to the right by a specified number of positions. It fills the vacated positions with zeroes.
*/

//5.Assignment Operators
//They are used to assign values to the operand.
/*
let a;
a = 5; //a = 5
console.log(a);
a += 5; //a = a+5
console.log(a);
a -= 5; //a = a-5
console.log(a);
a *= 5; //a = a*5
console.log(a);
a /= 5; //a = a/5
console.log(a);
a %= 5; //a = a%5
console.log(a);
a **= 5; //a = a**5
console.log(a);
*/
