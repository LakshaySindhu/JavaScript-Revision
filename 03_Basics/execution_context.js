function three(){
    console.log("Inside Three");
}

function two(){
    three();
    console.log("Inside Two");
}

function one(){
    two();
    console.log("Inside One");
}

one();

// Execution Context - Refers to the environement within which javascript code is executed 

// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context



let num1 = 10;
let num2 = 5;

function addNum(val1,val2){
    let total = val1+val2;
    return total;
}

console.log(addNum(num1,num2));
console.log(addNum(10,29));

