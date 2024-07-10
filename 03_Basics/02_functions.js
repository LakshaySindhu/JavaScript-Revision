function calculateCartPrice(n){
    return n;
}


// ... rest operator
function calculateTotalCartPrice(...items){
    let totalCartPrice = 0;
    for(let i=0; i<items.length; i++){
        totalCartPrice += items[i];
    }
    return totalCartPrice;
}

// Link to Learn Rest and Spread Operator in deep. : https://chatgpt.com/share/9519a6b4-3f95-46c5-8caa-8ee47aafdc50


// console.log(calculateCartPrice(100)) // => 100 
// console.log(calculateCartPrice(100,200,300)); // => 200

// console.log(calculateTotalCartPrice(100,200,300)); // 


// How to pass object as argument to function

const user = {
    username: "Lakshay",
    prices: 199
}

function handleObjects(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

// handleObjects(user);


// Passing arrays to function as argument

users = ["Lakshay","Shubham","Yuvraj","Ujjwal","Gautam"];

function countUsers(usersList){
    return(usersList.length);
}

// console.log("Number of active user : ",countUsers(users));

const myNewArray = [200,400,100,800];

function returnSecondValue(someArray){
    return someArray[1];
}

console.log(returnSecondValue(myNewArray));

// another way of passing array

console.log(returnSecondValue([200,400,100,800]));