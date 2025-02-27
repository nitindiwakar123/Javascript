//Map and Set in JavaScript

//Map
//Map is a data structure that stores key-value pairs, where each key must be unique. It allows for keys and values of any data type.

const map = new Map();
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "France")

// console.log(map);
// console.log(map.get('USA'));
// console.log(map.has('USA'));
// console.log(map.delete('USA'));
// console.log(map);
// map.forEach((value, key) => {
// console.log(value, key);
// })
// map.clear();
// console.log(map);
// console.log(map.size);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());


//Set
//Set is a data structure that stores unique values, where each value must be unique and duplicates are not allowed. It can store values of any data type.

const set = new Set();
set.add(1);
set.add("Batman");
// console.log(set);
// console.log(set.size);
// set.clear()
// console.log(set);
// set.delete("Batman")
// console.log(set);
// console.log(set.has("Batman"));
// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());
// set.forEach((value) => {
// console.log(value);
// })
