//Strings in Javascript
//Characters or sequences of characters in JavaScript are stored as strings.
/*
let str = "nitin";
str[0] = "N";
console.log(str[0]); //str[0] value not changed because strings are immutable.
//This shows that we cannot alter the string once it is generated. To do so, we must create a new string and concatenate the previous one onto it as shown below.
str = "N" + str[1];
console.log(str);
*/

//string Representation
/*
//strings are represent using single quotes(''), double quotes(""), and backticks(``);
let single =  'hello';
let double =  "hello";
let backticks = `hello`;
//Backticks are much more versatile than both single and double-quotes. They allow multiline strings and also embed expressions into the string (by wrapping in ${…}.
let backticks2 = `string representation using single quotes ${single}, using double quotes ${double}`;
console.log(backticks2);
*/

//String Methods and Properties
/*
//basic Methods
const str1 = "Hitesh";
console.log(str1.length); //To find the string length, we use .length property which gives an integer output.
console.log(str1[0]); //Acccessing Characters of a String
console.log(str1.charAt(0)); //Acccessing Characters of a String
//Square brackets returns undefined when no character is found, while charAt just returns an empty string.
console.log(str1[10]);
console.log(str1.charAt(10));
*/

/*
//Changing case
//The methods used for changing case are simply toUpperCase() and toLowerCase().
let str3 = "Nitin Diwakar";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
*/

//Getting substrings
//Substrings are sub-parts within the given string, either a fragment of the string or the complete string itself.
//1.slice
/*
let str4 = "NitinDiwakar";
//It is written as string.slice(start, end), where start is the starting index and the second argument(specifying the end) is optional.
console.log(str4.slice(1, 5));
console.log(str4.slice(-5, 13));
//We can also pass negative indexes for start and end
*/

//2.Substring
//This works similar to slice, but the start and end positions can be interchanged.
/*
let str5 = "Hello";
console.log(str5.substring(1, 4));
console.log(str5.substring(4, 1)); //Agar start index bada hai end index se, to substring method unhe automatically swap kar deta hai. Isliye agar aap substring(4, 1) use karte hain, to yeh actually substring(1, 4) ban jaata hai.
console.log(-1, -5); //substring does not support negative arguments and treats them as 0.
*/

//3.substr()
//It is pretty similar to string.slice(), only one change has to perform that instead of specifying the end position, users need to specify the substring length.
/*
 let str6 = "nitin";
 console.log(str6.substr(1, 4));
*/

//Searching for Substrings
//Substrings can be searched using several methods.
/*
//.indexOf
//This searches within the string for the given substring starting from a given position. It will either return the position where the match is found or return -1 if it isn’t found.
let str7 = "This is a String";
console.log(str7.indexOf("This")); //the output will be 0.
console.log(str7.indexOf("string")); //// returns -1, as it is case-sensitive.
console.log(str7.indexOf('is', 5)); //here second parameter is position. it allows to specify startring position of searching.
*/



//Comparing strings
//The following are some important points we must remember for comparison between strings:
/*There is a character-by-character comparison between two strings.
Lowercase strings are greater than uppercase strings.
Diacritical marks on characters (á, é, ó, ü, ñ) in strings often cause unexpected results.
Both upper and lower-case characters in strings have specific numeric codes or ASCII codes. (Starting from 065 for uppercase alphabets and 097 for lowercase alphabets. Therefore a>A, h>H, etc)
 */
/*
console.log('a'>'A');
console.log('h'>'H');

//.codePointAt(pos)
//This takes the position as string.codePointAt(position), and returns the ASCII code for the character at the given position:
console.log("apple".codePointAt(3));

//String.fromCodePoint(code)
// it takes ASCII code and generate corresponding character
console.log(String.fromCodePoint(97)); //output 'a' because ASCII value of a is 97.
*/



/*
//Characters can be iterated using for..of.
const str2 = "iteration";
for(let x of str2)
    {
        console.log(x);
    }
*/
