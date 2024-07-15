//Activity 1: If-Else Statements
//Task 1:
const num = -1;
if (num < 0) {
    console.log(`${num} is a negative integer`);
}
else if (num > 0) {
    console.log(`${num} is a positive integer`);
}
else {
    console.log(`${num} is equal to 0`);
}

//Task 2:
const personAge = 18;
if (personAge >= 18) {
    console.log("you can vote!");
}
else {
    console.log("you cannot vote!");
}

//Activity 2: Nested If-Else Statements
//Task 3:
const a = 80;
const b = 100;
const c = 30;
if (a > b) {

    if (a > c) {
        console.log(`${a} is Greater!`);
    }
}
else if (b > c) {
    console.log(`${b} is Greater!`);
}
else {
    console.log(`${c} is Greater!`);
}

//Activity 3: Switch Case
//Task 4:
const number = 7;
switch (number) {

    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Wrong Input!");
        break;
}

//Task 5:
const marks = 20;
switch (true) {
    case (marks >= 90):
        console.log(`Grade A+`);
        break;
    case (marks >= 80):
        console.log(`Grade A`);
        break;
    case (marks >= 70):
        console.log(`Grade B+`);
        break;
    case (marks >= 60):
        console.log(`Grade B`);
        break;
    case (marks >= 50):
        console.log(`Grade C+`);
        break;
    case (marks >= 40):
        console.log(`Grade C`);
        break;
    case (marks >= 35):
        console.log(`Grade D`);
        break;
    case (marks >= 30):
        console.log(`Grade E`);
        break;

    default:
        console.log(`Grade F`);
        break;
}

//Activity 4: Conditional(Ternary) Operator
//Task 6:
const val = 375;
(val % 2 == 0) ? console.log(`${val} is a even number!`) : console.log(`${val} is a odd number!`);

//Activity 5: Combining Conditions
// Task 7:
const year = 2000;
if (year % 4 === 0 || (year % 100 != 0 && year % 400 === 0)) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`);
}
