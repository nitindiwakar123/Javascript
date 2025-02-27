let date = new Date(2023, 0, 25);
console.log(date.toDateString());
date  = date.toLocaleString('default', {
   weekday: 'long',
});
console.log(date);
//Date and Time
//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
/*
let mydate = new Date();
console.log(mydate, typeof mydate);
//Date Methodes
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
*/
/*
//Defining a Date Object
let myCreatedDate = new Date(2023, 0, 25); //year, month, date
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString()); //Output - Sun Jan 25 2023, The monthes are counted from 0 to 11.
let myCreatedDate2 = new Date(2023, 0, 25, 5, 30, 0); //year, month, date, hour, minute, second
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("2023-01-25"); //year, month, date. this is the format of date string
console.log(myCreatedDate3.toLocaleString());
let myCreatedDate4 = new Date("05-16-2006");
console.log(myCreatedDate4.toLocaleString());

//TimeStamp
let timeStamp = Date.now(); //returns the number of milliseconds since jan 1970, UTC.
console.log(timeStamp);
console.log(Math.floor(timeStamp/1000));
let date = new Date("2023-1-25");
console.log(date.getTime());

//Some other date methods
let newDate = new Date(2023, 0, 25, 5, 30, 30);
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());


let date = new Date(2023, 0, 25);
date = date.toLocaleString('default', {
   weekday: "short",
})

console.log(date);
*/
