const marvelHeroes = ["Ironman","Thor","Spiderman"];
const dcHeroes = ["Batman","Superman","Flash"]

marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

const superHeroes = marvelHeroes.concat(dcHeroes);
// console.log(marvelHeroes);

// console.log(superHeroes);

const firstArr = [1,2,3,4,5];
const secondArr = [6,7,8,9,10];

const someArr = firstArr.concat(secondArr);

// console.log(someArr);

// Another way of merging two arrays other than concat()
// Spread Operator (...)
// Array -> individual elements mein break kr diya 

const someAnotherArr = [...firstArr,...secondArr];
// console.log(someAnotherArr);


const newArr = [1, 2, 3, [4, 5], 6, [7, [8,9,10]]];

const anotherNewArr = newArr.flat(1); // Specify dept of nesting as argument to flat function
// console.log(anotherNewArr);

const anotherNewArrTwo = newArr.flat(2); // We can also pass infinity we dept of nesting in unknown 
// console.log(anotherNewArrTwo);


// To check whether the input from user is in the form of array or not 
// To convert the input from user to array

// console.log(Array.isArray("Lakshay")); // false
// console.log(Array.isArray([1,23,4])); // true

// console.log(Array.from("Lakshay")); // Converts the string to Array
/* [
  'L', 'a', 'k',
  's', 'h', 'a',
  'y'
]
*/

console.log(Array.from({name:"Lakshay"})); // Returns [] -> Because it is not able to decide which part of objects(keys or values) needs to converted to array 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // Returns array of values of variables which are passed to of() function as argument 