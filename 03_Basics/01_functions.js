function sayMyName(){

    console.log("L");
    console.log("a");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("y");

};

function displayEachChar(input){
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        console.log(element);
    }
}

// sayMyName("Lakshay"); // Doesn't throws an error
// sayMyName();

// displayEachChar("Yuvraj");

// sayMyName() // Function Call or invoke or execution
// sayMyName // Reference of function // function yaha pe rehta hai

// console.log(sayMyName); // [Function: sayMyName]

function addTwoNumbers(num1, num2){
    return num1+num2;
}
// console.log(addTwoNumbers()); // returns NaN
// console.log(addTwoNumbers(3,"4"));  // returns 34
// console.log(addTwoNumbers(3,"a"));  // returns 3a
// console.log(addTwoNumbers(3,null));  // returns 3
// console.log(addTwoNumbers(3,undefined));  // returns NaN 
// console.log(addTwoNumbers(5,10)); // returns 15
// console.log(addTwoNumbers());

function fun1(num1,num2){
    console.log(num1+num2);
}

function fun2(num1,num2){
    return (num1+num2);
}

// const result1 = fun1(3,5); // result1 => undefined , because fun1 is not returning any value just performing console.log() operation
// const result2 = fun2(3,5);
// console.log(result1); // undefined
// console.log(result2); // 8


function loginUserMessage(username){
    if(!username){
        console.log("Please Enter your Username");
        return;
    }
    return `${username} just logged in`;
}

loginUserMessage("Lakshay"); // 
// console.log(loginUserMessage("Lakshay"));
// console.log(loginUserMessage()); 

// ""-> false
// undefined -> false


















// const name = "Yusuf";
// const arr = ["Lakshay","Shubham"];
// console.log(name.length);
// console.log(typeof name);

// console.log(arr.length);
// console.log(typeof arr);

function returnSomething(n){
    return n%2;
}

returnSomething(5)

const res = returnSomething(5);
// console.log(res);


// To avoid returning undefined, we can pass default values of paramter in the function defination

function checkUserStatus(username="Ray"){
    // Control will never reach inside if 
    if(username === undefined){
        // Unreachable code due to default value of parameter passed during function call;
        console.log("Please Enter your username");
        return;   
    }

    return `${username} just logged in`;
}

let someName;
console.log(checkUserStatus(someName));
