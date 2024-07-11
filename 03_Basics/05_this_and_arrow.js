// "use strict"

const user = {
    username : "Lakshay",
    age : 21,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(`${username}, Welcome to website`); // Throws an error
        console.log(this);
    },
}

// user.welcomeMessage();
// user.username = "Ray";
// user.welcomeMessage();

// console.log(user);
// user.username = "Ray";
// console.log(user.username);
// user.welcomeMessage();


// console.log(this); // =>  {} - current context
// In node enivironment this will return an empty context
// But in console of browser it will return window context
// Global object in browser is window object


// this inside function

function chai(){
    const username = "Lakshay";
    // console.log(this); // => global object or global context
    // console.log(this.username); // returns undefined
    function code(){
        // console.log(this.username); // returns undefined
        // console.log(username); // Lakshay
    }
    code();
}

chai();


// To Learn more about this : https://chatgpt.com/share/b4dd6590-6f1f-4a36-bfe9-0187fd7b6374


// ++++++++++++++++++++++ Arrow Functions +++++++++++++++++++++++++++++++ 


const someFunction = function(){
    let username = "Lakshay";
    // console.log(username);
    console.log(this.username); // undefined
}

// someFunction();

// console.log(someFunction);
// console.log(someFunction());


// In JavaScript, when you use the function keyword to define a function, the this keyword inside that function will refer to the global object (in a browser, this is window). Since username is defined with let inside the function, it is not a property of the global object, and this.username will be undefined.

// If you want to log the username variable, you can do so directly without using this.


// If you want to use this inside a method of an object

const obj = {
    username: "Lakshay",
    someFunction: function(){
        console.log(this.username);
    }
}

// obj.someFunction();

const someNonArrowFunction = function(){
    let username = "DevelopwithLakshay";
    console.log(this); // global object or global context
    console.log(this.username); // undefined
    console.log(username);  // DevelopwithLakshay
}

// someNonArrowFunction();

function someNewFunction(){
    let username = "Yuvraj";
    console.log(this); // global object or global context
    console.log(this.username); // undefined
    console.log(username); // Yuvraj
}

// someNewFunction();

// Arrow Functions 

const someArrowFunction = () => {
    let username = "Ray";
    // console.log(this.username); // undefined
    console.log(this); // empty parenthesis // empty context 
}

// someArrowFunction();


// Different ways of declaring arrow functions 

// 1. Simple Arrow Function
const add = (a,b) =>{
    return a+b;
}

// console.log(add(5,4));

// 2. Implicit return using omitting curly braces and return 

const subtract = (a,b) => a-b;

// const subtract = (a,b) => (a-b); // code ko parenthesis mein wrap kiya to return use nhi karna padega 
// agar curly braces mein wrap kiya to use karna padega

// console.log(subtract(5,2));

// 3. Single Parameter without parenthesis

const square = a => a*a;

// console.log(square(4));

// No parameter 

const greet = () => console.log("Hey, welcome");

// console.log(greet());


// Object return in arrow function 

const objFunction = () => {username : "Lakshay"};

console.log(objFunction()); // undefined because object is not wrapped inside parenthesis

const someObjFunction = () => ({username : "Lakshay"});

console.log(someObjFunction()); // { username: 'Lakshay' }


