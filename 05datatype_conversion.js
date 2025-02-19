//DataType Conversion in JavaScript
/*
//to Number
let score = "56";
let value = Number.parseInt(score);
console.log(value);

//"89" => 89 (type => number) 
//"89abc" => 89 (type => number)
//"abc78cd" => NaN (type => number)
//null => NaN (type => number)
//undefined => NaN (type => number)
//true => 1, false => 0 (type => number)
//Symbol("abc") => TypeError: Cannot convert a Symbol value to a number
//BigInt(4573788340928475768032475) => 4.5737883409284757e+24 (type => number)
//{name: "rohit", marks: 67} => NaN
*/



//to String
/*
let val = 56
let string = String(val);
console.log(string);
console.log(typeof string);

//67 => "67"
//true => "true", false => "false"
//null => "null"
//undefined => "undefined"
//Symbol("abc") => "Symbol(abc)"
//BigInt(6455856457783476476537) => "6455856457783476476537"
//{ name: "Rohit", age: 24 }; => "object"
//[1, 3, 4, 5, 6]; => "1, 3, 4, 5, 6"
*/

/*
//to boolean
let val = Symbol("fghgfdjd");
let bool = Boolean(val);
console.log(bool);
console.log(typeof(bool));

//1 => true
//0 => false
//78(or any other number except 0) => true
//NaN => false
//"" => false
//"abc" => true
//null => false 
//undefined => false
//BigInt(764578346562354547864378) => true
//Symbol("fghgfdjd") => true
*/

/*
//to BigInt
let val = Symbol("dbf");
let big = BigInt(val);
console.log(big);
console.log(typeof big);

// 76 = 76n
//"abc"  = error
//"" = 0n
//true = 1n, false = 0n
//undefined, null = error
//Symbol("abc") = error
*/

/*
//to Symbol
let n = false
let sm = Symbol(n);
console.log(sm)
console.log(typeof sm)

//78 = Symbol(78)
//"djh" = Symbol(djh)
//undefined = Symbol()
//null = Symbol(null)
//BigInt(67465575575757575478665655) = Symbol(67465575575757575478665655)
//true = Symbol(true)
//false = Symbol(false)
*/

/*
//to Object
let val = undefined;
let obj = Object(val);
console.log(obj);
console.log(typeof obj);

//67 = [Number: 67]
//"abc" = [String:  "abc"]
//Symbol("abc") = [Symbol: Symbol(abc)]
//BigInt(46745354844534654848745877) = [BigInt: 46745354844534654848745877n]
//true = [Boolean: true]
//false = [Boolean: false]
//null, undefined = {}
*/

/*
//you cannot convert other datatypes to undefined and null 
let n = 87;
let un = undefined(n);
console.log(un);
console.log(typeof un);

let num = 87;
let nl = undefined(num);
console.log(nl);
console.log(typeof nl);

//this will throw an error
*/

