// ************************* Objects in JS *************************

// To Learn more about objects - Link : https://chatgpt.com/share f54ed778-4cac-4d09-aa6a-5ab5ba8bfde1

// Objects - In JavaScript, objects are a fundamental data structure that allows you to store collections of key-value pairs. They are incredibly versatile and serve as the basis for many other structures and functionalities in the language.

// Creating Objects 

// 1. Object Literals 
const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 3
};

// 2. Object constructor
const obj2 = new Object();
obj2.key1 = 'value1';
obj2.key2 = 'value2';
obj2.key3 = 3;

// 3. Using Object.create
const proto = {key1: 'value1'};
const obj3 = Object.create(proto);
obj3.key2 = 'value2';

// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// Accessing and Modidfying Properties

const myObj = {
    name: "lakshay",
    age: 20
}

// Dot notation
// console.log(myObj.key1); // value1 // Access
myObj.name = "Lakshay Sindhu" // modifying
// console.log(myObj);

// Bracket Notation
// Bracket Notation is a better way to access the properties of object
// In bracket name we have to enclose key in quotes because by default all keys are interpreted as string by js

// console.log(myObj['age']);
myObj['age'] = 20;

// Reason why bracket notation is better
const myNewObj ={
    "first name": "Lakshay",
    age: 20
} 
// In the above myNewObj you cannot access the first name property by using dot notation but you can access it by bracket notation

// console.log(myNewObj["first name"]);

// Use of Symbol Datatype as object property

const mySym = Symbol("SymbolKey1")

const anotherObj = {
    name: "Lakshay",
    age: 20, 
    mySym1: Symbol("Symbol Key"), // one way storing symbol key
    // mySym: "SymbolKey2", // here mySym key is a string not a symbol key
    [mySym]:"SymbolKey2",
    location: "Delhi"
}

// console.log(anotherObj);

// Singleton 
// Created using Object.create()


// Literal Object 

const emptyObj = {}; // Created an empty object
// console.log(emptyObj); // {}

// Creating an object with properties 
// properties of objects in js are accessed using object keys defined
// In Arrays keys are of interger form i.e from 0 to ...
// const jsUser = {
//     name: "Lakshay",
//     age: 22,
//     location: "Delhi",
//     email: "lakshay@gmail.com",
//     isLoggedIn:  true,
//     lastLoggedInDays: ["Monday","Saturday"]
// };


// Objects can also contains functions, which are then refered to as methods

const person = {
    firstName: "Lakshay",
    lastName: "Sindhu",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(typeof person.fullName); // returns a function reference
console.log(typeof person.fullName()); // returns a string
console.log(person.fullName()); // Lakshay Sindhu

person.age = 20; // Adding new properties

console.log(person);

Object.freeze(person); // To Freeze the properties of object

person.age = 22;

console.log(person);


    

