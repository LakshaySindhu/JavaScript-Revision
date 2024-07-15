
let userEmail="lakshay@gmail.com";

// userEmail = undefined => false
// userEmail = null => false
// userEmail = "" => false
// userEmail = 0 => false 
// userEmail = [] => true


if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}


// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

let n;
let m = 5;
let t = n+m;
console.log(t);

if(t){
    console.log("Inside IF ");
}
else{
    console.log("Inside Else ");
}


// truthy values 

// "0", 'false', " ", [], {}, function(){}


let arr = [];
let obj = {};

if(arr.length === 0){
    console.log("Array is Empty");
}

if((Object.keys(obj).length) === 0){
    console.log("Object is Empty");
}


console.log(false == 0); // true
console.log(false == " "); // true
console.log('' == 0); // true

if(" "){
    console.log("Hey");
}





