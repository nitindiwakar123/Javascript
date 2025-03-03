// map(), filter(), reduce() in Javascript
//The map(), reduce() and filter() methods are some of such array functions that perform the given operation on arrays and return the updated arrays.

/*
//map() Method
// .map() takes two arguments, a callback, along with some optional context. For each value, callback runs to return a new value in the resulting array, which is always the length of the original array itself.
const users = [
    {
        userName: "Nitin Diwakar",
        age: 18
    },
    {
        userName: "Karan Gangwar",
        age: 19
    },
    {
        userName: "Harsh Gangwar",
        age: 19
    },
    {
        userName: "Deepak Thakur",
        age: 20
    }
]

// const userName = users.map( (user) => user.userName )
// console.log(userName);

// We could approach this from various methods. We can either create an empty array, and use .forEach(), .for(...of), or just a .for() to get the desired output.

//using foreach()
// const userNames = [];
// users.forEach((user) => {
//     userNames.push(user.userName)
// })
// console.log(userNames);
*/

/*
//reduce() method
// .reduce() runs a callback for every array element just like .map() does. The only difference is that reduce() passes the result of this accumulator from one array element to the other

const shoppingCart = [
    {
        courseName: "Ultimate Javascript Course",
        price: 5999
    },
    {
        courseName: "Python Course",
        price: 4599
    },
    {
        courseName: "Golang Course",
        price: 9999
    },
    {
        courseName: "Blockchain Course",
        price: 12999
    }
]

const totalPrice = shoppingCart.reduce( (accumulator, value) => {
    return accumulator+value.price;
}, 0)
console.log(`Total Price is ${totalPrice}`);
*/

/*
//filter() in Javascript
//Now, if we just want some of the elements in the array we have, we can use .filter()
const members = [
    {

        id: 111,

        name: "Chelsea Foster",

        position: "Intern",

    },

    {

        id: 102,

        name: "Aggie Sparling",

        position: "Employee",

    },

    {

        id: 123,

        name: "Timmy Matthews",

        position: "Intern",

    },

    {

        id: 66,

        name: "Emmet Foster",

        position: "Employee",

    }

];

let interns = members.filter((intern) => {
    return intern.position === "Intern";
})
console.log(interns);
const employee = members.filter((Employee) => Employee.position === 'Employee')

console.log(employee);

*/

//Concept of Chaining
// .map(), .reduce() and .filter() are all used on arrays. In fact, map and filter return arrays too, meaning we can chain these calls very conveniently.
const members = [
    {
        id: 111,
        name: "Chelsea Foster",
        workExp: 7,
        deptExp: 6,
        isPermanent: true,
    },
    {
        id: 102,
        name: "Aggie Sparling",
        workExp: 13,
        deptExp: 10,
        isPermanent: false,
    },
    {
        id: 123,
        name: "Timmy Matthews",
        workExp: 23,
        deptExp: 15,
        isPermanent: false,
    },
    {
        id: 66,
        name: "Emmet Foster",
        workExp: 22,
        deptExp: 9,
        isPermanent: true,
    },
    {
        id: 89,
        name: "Brent Dolan",
        workExp: 16,
        deptExp: 12,
        isPermanent: true,
    },
];
/*
//Example 1:

const PermanentMembers = members.filter( (member) => member.isPermanent)
console.log(PermanentMembers);

const totalScore = PermanentMembers.map((totalYears) => {
    return totalYears.workExp+totalYears.deptExp;
})
console.log(totalScore);

const combinedTotalScore = totalScore.reduce((acc, total) => {
    return acc+total;
}, 0)
console.log(combinedTotalScore);
*/

/*
//Example 2:
const combinedTotalScore = members.filter( (member) => member.isPermanent === false).map((totalScore) => totalScore.workExp+totalScore.deptExp).reduce((acc, total) => (acc+total), 0)
console.log(combinedTotalScore);
*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Tutorial code

// const coding = ["js", "ruby", "py", "java", "cpp"];

// const code = coding.forEach( (item) => {
//    // console.log(item);
//    return item
// })
// console.log(code);

//filter() Method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num>4 )
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     return num>4;
// } )
// console.log(newNums);

// const newArr = [];
// myNums.forEach( (num) => {
//     if(num>4){
//            newArr.push(num);
//     }
// })
// console.log(newArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//   const userBooks = books.filter( (historyBooks) => historyBooks.genre === "History" )
//   console.log(userBooks);

// const userBooks = books.filter( (historyBooks) => {
//     return historyBooks.genre === "History"
// })
// console.log(userBooks);

// const userBooks2 = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.edition >=2000 
// });
// console.log(userBooks2);

// const userBooks3 = books.filter( (bk) => {
//     return bk.publish >= 1995 && bk.genre === "History" && bk.edition >= 2000
// })
// console.log(userBooks3);

//map() Method
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const returnedNumbers = arrayNumbers.map( (num) => {
//     return num;
// })
// console.log(returnedNumbers);


// const returnedNumbers2 = arrayNumbers.map((num) => num)
// console.log(returnedNumbers2);

//reduce() Method
/*
syntax - Array_Name.reduce( function(accumulator, currentValue){
    return accumulator+currentValue;
}, 0(intial value))
*/

const integers = [1, 2, 3]

// const total = integers.reduce( (accumulator, currentValue) => {
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
//     return accumulator+currentValue;
// }, 0)
// console.log(total);

// const total2 = integers.reduce( (acc, current) => (acc+current), 0)
// console.log(total2);
/*
const shoppingCart = [
    {
        courseName: "Ultimate Javascript Course",
        price: 5999
    },
    {
        courseName: "Python Course",
        price: 4599
    },
    {
        courseName: "Golang Course",
        price: 9999
    },
    {
        courseName: "Blockchain Course",
        price: 12999
    }
]

// const priceToPay = shoppingCart.reduce((acc, current) => (acc + current.price), 0);
// console.log(`Price to Pay is ${priceToPay}`);
*/
