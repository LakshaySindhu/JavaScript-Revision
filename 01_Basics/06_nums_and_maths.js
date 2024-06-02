// ********************** Numbers in JS ****************************

const num = 400; // Number 
// console.log(num); // 400
// console.log(typeof num); // number 
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);


// Another way of declaration of Number Variable

const someNum = new Number(40); // Number Object
// console.log(someNum); // [Number: 40]
// console.log(typeof someNum); // object

// Various functions or methods can be used with Primitive number or Number object

const newNum = 30.894;
// console.log(newNum.toPrecision(3)); // Using builtin methods with primitive number variables

const balance = new Number(123.849);
// console.log(balance); // [Number: 123]

/*
Number {40} [[Prototype]] : Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0
[[PrimitiveValue]]: 40
*/

// balance = 123.849
// console.log(balance.toFixed(0)); // 124 Round off Up to 0 decimal places

// console.log(balance.toFixed(1)); // 123.8 Round off Up to 1 decimal places

// console.log(balance.toString()); // To convert it into string

// console.log(balance.toString.length); // 1

// console.log(balance.toString().length); // 7

const accountBalance = 10000000; // Difficult to understand the number 
// To solve the above issue we have a method : 
// console.log(accountBalance.toLocaleString()); // By default US -> 10,000,000

// console.log(accountBalance.toLocaleString('en-IN')); // Indian ->
// 1,00,00,000

const someValue = 123.456;
// console.log(someValue.toPrecision(4)); // 123.5
// console.log(someValue.toPrecision(3)); // 123
// console.log(someValue.toPrecision(2)); // 1.2e+2 -> 1.2 * 10^2 = 120


// ************************ Maths in JS ****************************

// console.log(Math);

/*

Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
clz32: ƒ clz32()
cos: ƒ cos()
cosh: ƒ cosh()
exp: ƒ exp()
expm1: ƒ expm1()
floor: ƒ floor()
fround: ƒ fround()
hypot: ƒ hypot()
imul: ƒ imul()
log: ƒ log()
log1p: ƒ log1p()
log2: ƒ log2()
log10: ƒ log10()
max: ƒ max()
min: ƒ min()
pow: ƒ pow()
random: ƒ random()
round: ƒ round()
sign: ƒ sign()
sin: ƒ sin()
sinh: ƒ sinh()
sqrt: ƒ sqrt()
tan: ƒ tan()
tanh: ƒ tanh()
trunc: ƒ trunc()
Symbol(Symbol.toStringTag): "Math"

*/

// console.log(Math.abs(-11+5)) // 6
// console.log(Math.PI) // 3.14............
// console.log(Math.pow(2,4)); // 16
// console.log(Math.round(4.6)); // 5
// console.log(Math.floor(5.9)); // 5
// console.log(Math.floor(6.1)); // 6
// console.log(Math.min(2,3,11,7)); // 2
// console.log(Math.max(8,4,2,1)); // 8

// Most Important
// console.log(Math.random()); // gives values between 0 and 1

// console.log(Math.random()*10); // to get values greater than 0

console.log(Math.floor(Math.random()*10)+1); // To avoid zero

let min = 10;
let max = 20;

console.log(Math.floor((Math.random()*(max - min + 1)))+min);

