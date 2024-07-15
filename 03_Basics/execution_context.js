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


// Whenever the execution of javascript code begin, firstly global execution context is created and this in javascript code in global scope points to global execution context, which depends on the environment in which the javascript code is executed

// In browser -> Window object is global execution context and this will point to window object

// In javascript runtime for eg - node -> the global object is the global execution context and this will point to this global object. But in case of strict it will point to null or empty object {}

// 


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



// The working of the JavaScript works on three phases:
// 1. Global Execution Context
// 2. Memory phase / Creation phase
// 3. Execution phase

// Phase 1: Global Execution Context
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

// Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

// Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
// 1. Memory phase 
// 2. Execution phase 
// The return value of the 'Function Execution' context is passed to the Global Execution Context