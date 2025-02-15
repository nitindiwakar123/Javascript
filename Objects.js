//Objects in JavaScript
//The object is a non-primitive data type in JavaScript. It is used to store unordered collections of data or properties. Each of these properties is basically key and value pairs.

/*
//Creating an object
//1.using object literal
const person = {
    name: "Nitin",
    age: 18,
    gender: "male"
  }
  console.log(person);

  //2. using new keyword
  const student = new Object();
  student.name = "Shivam";
  student.age = 17;
  console.log(student);


//3. using Constructor  
  function User(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
  }
  const user1 = new User("Deepak", 19, "deepak@gmail.com");
  console.log(user1);
 */

//add new Properties
// const obj = {
//     name: "Bruce",
//     age: 21
// }  
// obj.gender = "Male";
// obj["fullName"] = "Bruce Wayne";
// console.log(obj);  
/*
//Access Specific Property
const obj2 = {
    name: "Batman",
    RealName: "Bruce Wayne",
    age: 21,
    city: "Gotham",
    suit: "Black" 
};
console.log(obj2.state); //If you try to access a property which is not defined inside the object, the output shows ‘undefined’.
 console.log(obj2.RealName); //using dot(.) operator
 console.log(obj2["RealName"]); //using square([ ]) brackets

//you can use the dot operator as it is much more convenient than using square brackets. But there are some instances in which you have no choice other than to use square brackets. 
*/

//Existence of a property 
//To check if a property exists inside an object or not, 'in' operator is used.
//If the property exists the operator returns true, otherwise false.
  // const obj3 = {
  //   name: "Harry",
  //   age: 25,
  //   gender: "Male",
  //   work: "Programmer"
  // };
  // console.log("name" in obj3);
  // console.log("city" in obj3);

//Onjects Methods
/*
//Method is an Object property, which contains a function definition. Therefore, Methods are used to add functionality to Objects.
// let student = {
//   name: "Nitin",
//   age: 18,
//   id: 1002,
//   speak: function(){
//     console.log("Hi! I an" + this.name + "and my student id is" + this.id);
//   },
//   study: function(){
//     console.log("I am currently studying!");
//   }
// };

// student.play = function(){
//   console.log("I am currenty playing");
// }

// student.speak();
// student.study();
// student.play();
  */
 /*
//Removing property of an Object
//To delete a specific property of an object, we use the ‘delete’ operator:

const dailyUser = {
  name: "Michel",
  id: 587,
  email: "some@gmail.com",
}
console.log(dailyUser);
delete dailyUser.email;
console.log(dailyUser);
*/  

//Objects in JavaScript are reference types. And reference types don't hold values, they are a pointer to the value in memory. 
// let obj = {
//   name: "Harrison",
//   Id: "123abc"
// }  
// let obj2 = obj;
// console.log(obj);
// console.log(obj2);
// obj2.Id = "ABC!@$#";
// console.log(obj);
// console.log(obj2);
//In the above example, we can clearly see that if we make any change in the first object, it gets reflected in the new object as well. This is because both the objects are referencing the same memory location

//To copy an object in JavaScript, we have three significant options. Let’s see them one by one.

//Object.assign() Method
const mcuMovies = {
  2012: "The Avengers",
  2017: "Avengers Age of Ultron",
  2019: "Avengers Infinity War",
  2021: "Avengera Endgame"
}  

const dceuMovies = {
  2013: "Man of Steel",
  2015: "Batman vs Superman",
  2017: "Justice League",
  2021: "Zack Snyder's Justice Leage"
}
// let allMovies = Object.assign({}, mcuMovies, dceuMovies);
//   console.log(allMovies);

//using spread operator
//We can perform object copying by using the spread operator introduced in ES6.

// let allMovies2 = {...mcuMovies, ...dceuMovies};
// console.log(mcuMovies);
// console.log(dceuMovies);
// console.log(allMovies2);

//But, this is definitely not the full proof solution, because the moment we start getting a nested object inside our first object, this will not work.
/*
const student = {
  name: "Nitin",
  fullName: {
    firstName: "Nitin",
    lastName: "Diwakar"
  }
}
const student2 = student;
console.log(student);
console.log(student2);
student2.fullName.firstName = "Harrison";
console.log(student);
console.log(student2);
*/


//The JSON.parse and stringify Method
//We can use the JSON’s parse method along with stringify method to fix the problem above. Let’s see with the help of an example.
/*
const student1 = {
  name: "Nitin",
  fullname: {
    firstname: "Nitin",
    lastname: "Diwakar"
  },
  age: 21
}
const student2 = JSON.parse(JSON.stringify(student1))
console.log(student1);
console.log(student2);

student2.fullname.firstname = "Jenifeir";

console.log(student1);
console.log(student2);

//So, in the above example, we are actually stringifying the first object into a JSON string and then again parsing that JSON string and creating another object from it? So, this is an example of deep cloning.
*/


 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //Tutotial code
  //Creating Objects
  // let mySym = Symbol("key1");
  // const user = {
  //   name: "Deepak",
  //   [mySym]: "fhhf",
  //   age: 18,
  //   location: "Jaipur",
  //   email: "nitindiwakar@gmail.com",
  //   isLoggedIn: false,
  //   lastLoginDays: ["Monday", "Saturday"],
  //   otherInfo: { city: "Moradabad", state: "UttarPradesh" },
  // };

  // console.log(user)
  // console.log(user[mySym]);
  // console.log(user.otherInfo.city)
  // user["email"] = "ndiwakar@gmail.com";
  // console.log(user);
  // Object.freeze(user);
  // user.name = "Deepak";
  // console.log(user);

  // user.greet = function greetings() {
  //   console.log("Hello Brother");
  // };
  // user.greet2 = function greetings() {
  //   console.log(`Hello Brother ${this.name}`);
  // };
  // console.log(user);
  // console.log(user.greet());
  // console.log(user.greet2());

  // const obj2 = {
  //   say: function () {
  //     console.log("Hello");
  //   },
  // };

  // console.log(obj2.say());
  // const family = {
  //   father: "Thomas Wayne",
  //   mother: "Martha Wayne",
  //   son: {
  //     name: "Bruce Wayne",
  //     sonfamily: {
  //       wife: "Selina Kyle",
  //       childs: {
  //         son: "Harry Wayne",
  //         daughter: "Jesica Wayne"
  //       }
  //     }
  //   }
  // }
  // console.log(family);
  // console.log(family.son);
  // console.log(family.son.sonfamily);
  // console.log(family.son.sonfamily.childs);
  // console.log(family.son.sonfamily.childs.son);
  // console.log(family["son"]["sonfamily"]["childs"]["son"]);

// const  obj1 = {1: "a", 2: "b"}
// const  obj2 = {3: "c", 4: "d"}
// const  obj3 = {5: "e", 6: "f"}
// const add =  Object.assign({}, obj1, obj2, obj3);
// console.log(obj1);
// console.log(add);
// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// let array = [
//   {
//     id: 123
//   },
//   {
//     name: "nitin"
//   },
//   {
//     email: "ndiwakar@gmail.com",
//     password: "Insane444"
//   }
// ]
// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[2].password);

// const appUser = {
//   id: "123abc",
//   password: "Inasane444",
//   email: "ndiwakar@gmail.com",
// }

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));
// console.log(appUser.hasOwnProperty('fullname'));
// console.log(appUser.hasOwnProperty('id'));

//Object Destructure
/*
const course = {
  courseName: "JavaScript Programming",
  coursePrice: 999,
  courseInstructor: "Hitesh"
};
console.log(course);
console.log(course.courseInstructor);

const {courseInstructor: Ins} = course;
console.log(Ins);
*/
