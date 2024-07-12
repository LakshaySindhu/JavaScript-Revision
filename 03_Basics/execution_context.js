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

// The execution context for the above JavaScript program can be broken down into several steps:

// Global Execution Context Creation:

// The JavaScript engine creates the global execution context when the script is first loaded.
// The global execution context consists of two phases: the creation phase and the execution phase.

// 1. Creation Phase:

// -> Global Object: In a browser environment, this would be the window object.
// -> this Binding: In the global context, this refers to the global object.

// -> Memory Allocation:
// Variables and functions are allocated memory.
// num1 is initialized to undefined.
// num2 is initialized to undefined.
// addNum is initialized with a reference to the function.

// Execution Phase:

// Variable Assignment:
// num1 is assigned the value 10.
// num2 is assigned the value 5.
// Function Definitions: The function addNum is defined and ready to be called.

// Function Execution Context:

// When addNum(num1, num2) is called:
// A new execution context for addNum is created.

// Creation Phase:
// The function's arguments (val1 and val2) are created and initialized with num1 (10) and num2 (5) respectively.
// The total variable is created and initialized to undefined.

// Execution Phase:
// total is assigned the value val1 + val2, which is 10 + 5 = 15.
// The function returns total, which is 15.
// console.log(addNum(num1, num2)) outputs 15 to the console.

// Second Function Call:
// When addNum(10, 29) is called:

// A new execution context for addNum is created.

// Creation Phase:
// The function's arguments (val1 and val2) are created and initialized with 10 and 29 respectively.
// The total variable is created and initialized to undefined.

// Execution Phase:
// total is assigned the value val1 + val2, which is 10 + 29 = 39.
// The function returns total, which is 39.
// console.log(addNum(10, 29)) outputs 39 to the console.

// Final Output:
// 15
// 39


// Key Points:
// -> The global execution context is created first, setting up global variables and functions.
// -> Each function call creates a new execution context.
// -> Variables within the function context are scoped to that function call.
// -> The console.log statements output the results of the function calls.

