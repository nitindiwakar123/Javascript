// const isUserLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (isUserLoggedIn && debitCard && 2 == 3) {
//     console.log("allow to buy courses");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("user logged in");
// }

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = "april";

// switch (month) {
//     case 1:
//         console.log("January");
//         break;

//     case 2:
//         console.log("Fabruary");
//         break;

//     case 3:
//         console.log("March");
//         // break;

//     case "april":
//         console.log("April");
//         break;

//     default:
//         console.log("dafault case match");
// }



// const userEmail = "some@gmail.com";

// if(userEmail){
//     console.log("Email Got it");
// }
// else{
//     console.log("don't have email");
// }

//falsy values and truthy values

//falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values: "0", "false", " ", [], {}, function(){}
//Any non-zero number including negative numbers is truthy.

// const userEmail = [];
// if(userEmail.length === 0){
//     console.log("array is empty");
// }

// const obj = {}

// if(Object.keys(obj).length === 0){
//     console.log("Object is empty");
// }

//Nullish Coalescing Operator (??)
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 55
// val1 = null ?? 10 ?? 80
// console.log(val1);

//Terniary Operator

//condition ? true : false
const price = 100
price < 80 ? console.log("less than 80") : console.log("more than 80");
