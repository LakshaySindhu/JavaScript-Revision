
const myNums = [1,2,3,4,5,6,7,8,9,10];

let newNums = myNums.map( (item) => item+10  );

newNums = myNums.map( (item) => {
    return item*4;
})

newNums = myNums.map( (item) => {item+10}); // return undefined , because inside scope return keyword is mandatory in case of explicit return 

// console.log(newNums);

myNums.map((item) => item*2); // returns a copy of array
// doesn't modify the original array

// console.log(myNums);


// method chaining 

const someNums = myNums.map((item) => (item*item)).filter((item) => item>50);

console.log(someNums);







