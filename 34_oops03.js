//Prototype

const myHero = ["Batman", "Superman"];

const powers = {
    Batman: "Money",
    Superman: "God",

    getBatmanPower: function () {
        console.log(`Batman Power is ${this.Batman}`);
    },
};

Object.prototype.nitin = function () {
    console.log("Nitin is Presented!");
};

Array.prototype.hitest = function () {
    console.log("Hitest is Presented!");
};

// powers.nitin();
// myHero.nitin();

// myHero.hitest();
// powers.hitest();

//Inheritance
const user = {
    name: "chai",
    email: "some@gmaail.com",
};

const teacher = {
    makeVideos: true,
};

const support = {
    available: false,
};

const TASupport = {
    assignment: "JS",
    fullTime: true,
    __proto__: support,
};

teacher.__proto__ = user;

//modern syntax

Object.setPrototypeOf(support, teacher);

//our task - create a new property for string
let anotherUsername = "Nitin Diwakar   ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"chaiAurCode".trueLength();
"MyTrueLength".trueLength();
