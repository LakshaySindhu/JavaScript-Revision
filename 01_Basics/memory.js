// ********************** Memory in JS ***************************

// Stack (Primitive) and Heap(Non-Primitive)

// Stack - Copy milti hai 
// Heap - Reference milta hai

// Primitive data types 

let myYoutube = "Lakshay Sindhu";
let anotherYoutube = myYoutube;

anotherYoutube = "Ray Gaming";

console.log(myYoutube);
console.log(anotherYoutube);

// Non Primitive Data Types 

let userOne = {
    email: "userone@gmail.com",
    upi: "userone@ybl"
};

let userTwo = userOne;  // userTwo ko userOne ka reference mila heap memory mein 
userTwo.email = "lakshay@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);


// Link for better understanding - > https://chatgpt.com/share/f50a44e1-44e0-4f97-b702-e6ea7b1833e5
