// console.log(2>1); // true
// console.log(2<1); // false
// console.log(2>=1); // true
// console.log(2<=1); // false
// console.log(2!=1); // true


// In some case camparison between strings and number can give unpredictable result 
// So avoid comparison of strings with numbers 

// console.log("2" > 1); // true
// console.log("02" > 1); // true

// Comparison with null

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// The reason is that an equality check (==) and comparison <,>,<=,>= works differently
// Comparison converts null to a number, treating it as a zero
// That's why null >= 0 returns true and null > 0 returns false 

// Comparison with undefined 
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined <= 0); // false
// console.log(undefined !=0 ); // true

// === -> Strict Equality check operator (checks both value and datatype )

console.log("2" == 2); // true -> Conversion 
console.log("2" === 2); // false
