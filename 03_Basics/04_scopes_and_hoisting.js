function one(){
    const username = "ray04399";

    function two(){
        const website = " github";
        // console.log(username+website);
    }
    // console.log(website); // Throws an error because variable website is not defined and declared in the current scope
    two();
}

// console.log(username); // Throws an error because variable username is not defined and declared in the current scope

one();


if(true){
    const username = "Lakshay";

    if(username === "Lakshay"){
        const website = " Youtube";
        // console.log(username+website);
    }
    // console.log(website); // Throws an error
}
// console.log(username); // Throws an error


// +++++++++++++++++++++++++++++ Interesting Concept about functions 

// Function declarations are hoisted to the top of their scope, so you can call addOne before it is defined.

// Function declarations can lead to more potential conflicts in the global scope, as they always create a new function in the current scope

console.log(addOne(5)); 

function addOne(num){
    return num+1;
}

console.log(addOne(2));

// The function does not have a name and is assigned to the variable addTwo. This is known as an anonymous function

// The function is stored in the variable addTwo, making it a function expression. This allows the function to be treated like any other variable, enabling dynamic assignment and manipulation.

// Unlike function declarations, function expressions are not hoisted to the top of their scope. This means you cannot call addTwo before it is defined in the code.

// console.log(addTwo(7)); // Throws an error 

const addTwo = function(num){
    return num+2;
}

console.log(addTwo(1));