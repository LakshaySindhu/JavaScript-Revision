// Different ways of declaring variable

let a = 10;
const b = 20;
var c = 30;

console.log(a);  // 10
console.log(b);  // 20
console.log(c);  // 30

// The above coding is working perfectly, but about become uncertain and ambiguous when we use var with blocks or scopes



let d = 100;
const e = 200;
var f = 300;

if(true){
    let d = 1000;
    const e = 2000;
    var f = 3000;
}

console.log(d); // 100
console.log(e); // 200
console.log(f); // 3000 => Issue => value should be 300 because f has value 3000 inside the scope of if only and we are printing the value outside if

// Avoid using var 
// Using var for variable declaration in JavaScript is generally discouraged in favor of let and const for several reasons

// Function Scope vs. Block Scope: var is function-scoped, meaning it is scoped to the function in which it is declared. This can lead to unintended behavior, especially within loops and conditional statements. In contrast, let and const are block-scoped, meaning they are limited to the block (e.g., { ... }) in which they are defined.

// function example() {
//     if (true) {
//       var x = 10;
//     }
//     console.log(x); // 10 (accessible outside the block)
//   }
//   example();
  
//   function example2() {
//     if (true) {
//       let y = 10;
//     }
//     console.log(y); // ReferenceError: y is not defined
//   }
//   example2();


// Link to learn more : https://chatgpt.com/share/b0a257bd-d057-4ea8-a5bd-544961ea1d08


// var a = 5
// a = 5
// Both are same 
  



