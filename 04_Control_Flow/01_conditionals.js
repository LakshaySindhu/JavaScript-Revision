// if(true){
//     // console.log("Lakshay");
// }

// // 2==2 returns true
// if(2==2){
//     // console.log("Ray");
// }

// // 2=="2" => returns true
// if(2=="2"){
//     // console.log("Sindhu");
// }

// // 2 === "2" => returns false 
// // === strict equality, checks both values and reference or datatype
// if(2 === "2"){
//     // console.log("hey");
// }

// // Comparison operators 
// // >,<,>=,<=,==,!=,===


// const temp = 43;

// if(temp<50){
//     console.log("Temperature Less than 50");
// }
// else{
//     console.log("Temperature greater than 50");
// }


// let score = 200;

// if(score>100){
//     const power = "fly";
//     console.log(`User Power : ${power}`);
// }

// // console.log(`User Power : ${power}`); // Throws an error


// let balance = 1000;

// if(balance<500){
//     console.log("Less than 500");
// }
// else if(balance<750){
//     console.log("Less than 750 but greater than 500");

// }
// else if(balance<900){
//     console.log("Less than 900 but greater than 750");
// }
// else{
//     console.log("Greater than 900");
// }

const userLoggedIn = false;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn || loggedInFromGoogle || loggedInFromEmail && debitCard){
    console.log("Allowed to buy courses");
}
















