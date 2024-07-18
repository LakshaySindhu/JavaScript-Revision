const coding = ["js","cpp","py","rb","java"];
const myNums = [1,2,3,4,5,6,7,8,9,10];

// forEach() method doesn't return anything

const values = coding.forEach( (item) =>{
    // console.log(item);
    // return item;  // doesn't work

} );

// console.log(values); // undefined because forEach() method doesn't return anything


const someCoding = coding.filter( (val)=> val);

// console.log(someCoding);

// filter returns all the num for which the codition num>5 is true
const newNums = myNums.filter( (num) => num > 5 );
// console.log(newNums);

const someArr = []
// To store elements without using filter method
// using forEach()

myNums.forEach( (val) => {
    if(val>4){
        someArr.push(val);
    }
});

// console.log(someArr);

function returnSomething(val){
    return val%2 == 0;
}

const someNums = myNums.filter(returnSomething);
// console.log(someNums);


const nums = newNums.filter( (item)=> {
    // item > 5; // implicit return statement without return keyword doesn't work inside scope

    return item > 5;  // use this instead
});

// console.log((nums)); // returns [], because item > 5 without return works in case of implicit return only 
// (item) => item > 5 // implicit return 

// In this kind of situation, we have to use return keyword to make sure that it works as expected


const books = [
    { 
        title : "Midset",
        genre : "Non Fiction",
        publish : 1981,
        edition : 2004
    },

    { 
        title : "Zero to One",
        genre : "Non Fiction",
        publish : 1992,
        edition : 2008
    },

    { 
        title : "Diary of Wimppy Kid",
        genre : "Fiction",
        publish : 1985,
        edition : 2002
    },

    { 
        title : "The Contemporary History",
        genre : "History",
        publish : 1974,
        edition : 2016
    },

    { 
        title : "Steve Jobs",
        genre : "Biography",
        publish : 2001,
        edition : 2014
    },

    { 
        title : "Cracking the Coding Interview",
        genre : "Computer Science",
        publish : 2004,
        edition : 2018
    },
];

let userBooks = books.filter((item) => item.genre === "Non Fiction" );

userBooks = books.filter( (item) => {
    return item.publish > 2000
});

userBooks = books.filter( (item) => {
    // Multiple condition evaluation using Logical && Operator
    return item.publish >= 1995 && item.genre == "Biography";
})

console.log(userBooks);



