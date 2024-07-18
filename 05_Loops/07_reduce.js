const myNums = [1,2,3];
let sumValue = 0;
let initialValue = 0;

// Reduce method

// Accumulator variable stores the previous return value 
// currentValue variable stores the current item or value of variable

// initialValue after callback or implicit return statement 

// At the start of function execution initialValue is assigned to Accumulator variable only once 


// sumValue = myNums.reduce(
//     (accumulator,currentValue) => (accumulator+currentValue),initialValue  );

// console.log();
// using function expression 
// let myTotal = myNums.reduce( function(acc,currVal){
//     console.log(`Accumulator Value : ${acc}, Current Value : ${currVal}`);
//     return acc + currVal;
// },0);

// In the above statement
// first acc variable will be initialized to 0
// then it starts iterating 
// in every iteration return value will be stored in acc 
// At the end, value in acc variable will be retured

// console.log(myTotal);


myTotal = myNums.reduce( (acc,currVal) => {
    return acc+currVal;
},10)

// console.log(myTotal);


// usecase of reduce 

const courseShoppingCart = [
    {
        courseName: "Js course Hindi",
        coursePrice: 10000
    },
    {
        courseName: "Web Dev Cohort 3.0",
        coursePrice: 6000
    },
    {
        courseName: "TLE Level 3",
        coursePrice: 3500
    },
    {
        courseName: "Complete Web Development Bootcamp",
        coursePrice: 1199
    }
]

const cartTotal = courseShoppingCart.reduce((acc,item) => (acc+item.coursePrice),0);

console.log(cartTotal);