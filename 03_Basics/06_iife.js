// Immediately Invoked Function Expression (IIFE)

// Global scope pollution in JavaScript occurs when variables, functions, or objects are unintentionally defined in the global scope, leading to potential conflicts and unexpected behavior in the code. This can happen for several reasons, including:

// -> Accidental global variable declarations: Forgetting to use var, let, or const when declaring a variable.

// -> Using global objects or functions: Overwriting or modifying built-in global objects or functions.

// -> Third-party libraries: Libraries that define variables or functions in the global scope.

// Use terminator or semicolon (;) after iife to notify the run time that context has ended

// Function declarations in iife
(function (arr){
    for(let i=arr.length-1; i>=0; i--){
        console.log(arr[i]);
    }

})([1,2,3,4,5,6,7,8,9]);

// arrow functions in iife

( () =>{
    console.log("Welcome to github")
} )();


// Link to learn more :  https://chatgpt.com/share/e837763c-415b-4b48-8fa6-e2125d5aabdf


// Types of iife

// 1. Named iife 

(function greet(){
    console.log("Welcome");
})();

// 2. Unamed iife

(()=>{
    console.log("This is Lakshay");
})();

// 3. Paramterized iife

const some = (function isLoggedIn(username){
    return`${username}, just logged in.`;
})("Ray");

console.log(some);


    
