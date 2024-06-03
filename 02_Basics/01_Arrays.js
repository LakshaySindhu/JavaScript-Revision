// *********************** Arrays in JS ***************************

const myArr = [1,2,3,4,5]; // Array of Homogeneous Elements
const newArr = [1,"Lakshay",true]; // Array of heterogeneous Elements

// Arrays in JS 

// -> Arrays can hold elements of different types simultaneously. An array can store numbers, strings, objects, and other arrays.

// -> Arrays are dynamic, meaning they can grow and shrink in size. You can add or remove elements without having to declare the size of the array initially.

// -> Arrays are implemented as objects with numeric keys. They are essentially hash tables with some array-like methods and properties.

// -> Arrays come with a rich set of built-in methods like push(), pop(), shift(), unshift(), splice(), slice(), map(), filter(), reduce(), and many more.

// -> Arrays can be sparse, meaning you can have "holes" where no value is assigned. For example, you can have an array where only the 10th element is defined, and the rest are undefined.

// -> Being a loosely-typed language, JavaScript does not enforce type checking on array elements. You can freely mix different data types within the same array.

// -> Due to the flexible and dynamic nature of JavaScript arrays, their performance can be less predictable and generally slower compared to statically-typed, fixed-size arrays in languages like C or Java.

const someArr = [1,2,"lakshay",{name:"lakshay"},[4,5]];

// console.log(someArr); // [ 1, 2, 'lakshay', { name: 'lakshay' }, [ 4, 5 ] ]
// console.log(someArr.length); // 5
// console.log(someArr[0]); // 1
// console.log(someArr[1]); // 2 
// console.log(someArr[2]); // lakshay
// console.log(someArr[3]); // someArr[3].name -> lakshay
// console.log(someArr[4]); // someArr[4][0] -> 4

// Declaring array using Array Constructor

const someAnotherArr = new Array(1,3,4,56,100);
// console.log(someAnotherArr);
// Array Methods 
someAnotherArr.push("lakshay"); // To insert an element at the end of Array
// console.log(someAnotherArr);
 
someAnotherArr.pop(); // To delete or remove element from the end of Array 
// console.log(someAnotherArr);

someAnotherArr.unshift(0); // To insert an element at start of Array
// Since Inserting element at the start requires shifting of all elements of array. So this is a time or processor consuming operation. Therefore avoid using it.
// console.log(someAnotherArr);

someAnotherArr.shift(); // To remove the element from the start of Array

// console.log(someAnotherArr);

// console.log(someAnotherArr.includes(5)); // returns False , since 5 is not present in the array

// console.log(someAnotherArr.indexOf(56)); // Returns index of the specified element passed to function as argument

// indexOf() function return -1 , if element is not present in the array

const newJoinArr = someAnotherArr.join(); // Binds the array and convert it to string
// console.log(newJoinArr);
// console.log(typeof newJoinArr);

const myArray = [0,1,2,3,4,5];
console.log("Before : ",myArr);

const myn1 = myArray.slice(1,3); // To create a shallow copy of a portion of an array into a new array without modifying the original array.
console.log("After Slice : ",myArray);
console.log(myn1);

const myn2 = myArray.splice(1,3); // To change the contents of an array by removing, replacing, or adding elements in place. This method modifies the original array.
console.log("After Splice : ",myArray); 
console.log(myn2);

