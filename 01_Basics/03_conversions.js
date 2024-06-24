let score = 100; // number 
let yourScore = "100abc" // string

// console.log(typeof score);
// console.log(typeof(yourScore));

let newScore = Number(yourScore); // value of yourScore = 100abc 
// Its conversion is not possible, but in javascript it is converted that why when its value is displayed using console.log(newScore) -> NaN is getting displayed which means not a number

// But the datatype of newScore will number only
// console.log(newScore);
// console.log(typeof(newScore));

let nullValue = null;
let valueInNumber = Number(nullValue); // valueInNumber = 0
// When null value is converted to number then it gives or returns zero(0).
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

let undefinedValue = undefined;
let valueInNumber2 = Number(undefinedValue); 
// valueInNumber2 = NaN
// console.log(valueInNumber2);
// console.log(typeof valueInNumber2);

// Conversions to Number
// "33" => 33 
// "11abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0 


let isUserStatus = -123;

let valueInBoolean = Boolean(isUserStatus);

// console.log(valueInBoolean);
// console.log(typeof valueInBoolean);

// Conversions to Boolean 
// 1 => true
// 0 => false
// 123 => true
// -123 => true
// "lakshay" => true
// "" => false
// null => false
// undefined => false


let someValue = true;

let valueInString = String(someValue);

// console.log(valueInString);
// console.log(typeof valueInString);

// Conversion to strings

// 123 => "123"
// 0 => "0"
// null => null
// undefined => undefined
// true => "true"

let someString = "Lakshay";
console.log(someString);
console.log(typeof someString);






