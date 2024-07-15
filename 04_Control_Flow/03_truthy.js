
let userEmail="lakshay@gmail.com";

// userEmail = undefined => false
// userEmail = null => false
// userEmail = "" => false
// userEmail = 0 => false 
// userEmail = [] => true


if(userEmail){
    // console.log("Got user Email");
}
else{
    // console.log("Don't have user Email");
}


// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

let n;
let m = 5;
let t = n+m;
// console.log(t);

if(t){
    // console.log("Inside IF ");
}
else{
    // console.log("Inside Else ");
}


// truthy values 

// "0", 'false', " ", [], {}, function(){}


let arr = [];
let obj = {};

if(arr.length === 0){
    // console.log("Array is Empty");
}

if((Object.keys(obj).length) === 0){
    // console.log("Object is Empty");
}


// console.log(false == 0); // true
// console.log(false == " "); // true
// console.log('' == 0); // true

if(" "){
    // console.log("Hey");
}


// The Nullish Coalescing operator (??) is a logical operator in JavaScript that provides a way to handle null and undefined values. It allows you to set a default value when the original value is null or undefined 
let userStatus
let result = userStatus ?? false;

// console.log(result);

let foo1 = null;
let bar = foo1 ?? 'default string';
// console.log(bar); // Output: "default string"

foo2 = undefined;
bar = foo2 ?? 'default string';
// console.log(bar); // Output: "default string"

foo3 = 0;
bar = foo3 ?? 'default string';
// console.log(bar); // Output: 0

foo4 = '';
bar = foo4 ?? 'default string';
// console.log(bar); // Output: ''

foo5 = false;
bar = foo5 ?? 'default string';
// console.log(bar); // Output: false



function greet(name){
    name = name ?? "Guest";
    console.log(`Welcome, ${name}`);
}

// greet(); // Welcome, Guest
// greet(null); // Welcome, Guest
// greet("Ray"); // Welcome, Ray


let val1;

let res = val1 ?? 10 ?? 20; // takes the first value if va1 is null or undefined
console.log(res);

// Ternary Operator

age = 20

age > 18 ? console.log("Eligible for Driver License") : console.log("Not Eligible for driving License");









