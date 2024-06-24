// ************************* Strings ****************************** 

// Strings - Sequence of characters enclosed in single or double quotes 

// Strings Primitives - When you declare a string using single quotes, double quotes, or backticks, you are creating a string primitive.

// Different ways of string declaration in js 

const string = "lakshay"  // Using doubles quotes
const anotherString = 'lakshay'; // Using single quotes
const backticksString = `Hey, ${string}`; // Using backticks
const repoCount = 7

// console.log(name + repoCount + " Value");

// Modern way of string concatenation or writing complex expression
// Backticks(``) - provides features like : 
// Strings interpolation 
// Multiline strings
// Complex Expression 
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const name = 'Alice';
const greeting = `Hello, ${name}!`; // String interpolation
const multilineString = `This is a string
that spans multiple lines.`; // Multi-line string

const price = 25.5;
const taxRate = 0.08;
const totalPrice = `Total price with tax: $${(price * (1 + taxRate)).toFixed(2)}`;
console.log(totalPrice); // Output: Total price with tax: $27.54


// String Objects 
// String Objects : When you use the String constructor with the new keyword, you create a string object, which is an object wrapper around a string primitive.

const gameName = new String('Lakshay') // String Objects 

const oneString = String("Lakshay") // String Primitive

const twoString = new String('Lakshay') // String Object 

console.log(typeof oneString); // string
console.log(typeof twoString); // object

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherStringOne = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   lakshay "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://lakshay.com/lakshay%20sindhu"

console.log(url.replace('%20', '-'))

console.log(url.includes('lakshay'))
console.log(url.includes('sundar'))

console.log(url.split('/'));