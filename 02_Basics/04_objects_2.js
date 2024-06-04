const tinderUser = new Object({email:"abc@gmail.com"})
// console.log(tinderUser); // {} -> Singleton

// const tinderUser2 = {}
// console.log(tinderUser2); // {} -> Non Singleton

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const appUser = Object.create(tinderUser);
// console.log(appUser.isLoggedIn); // Inherits the property of regularUser

appUser.leftSwipes = 20;
// console.log(appUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName: {
            firstName: "Lakshay",
            lastName: "Sindhu"
        }
    }
};

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullName);
// console.log(regularUser.fullName.userfullName.firstName);
// console.log(regularUser.fullName.userfullName.lastName);

// console.log(regularUser.fullName?.userfullName); // ? -> used to provide protection. It basically ensure that it full name doesn't exists -> Used when extracting responses from API.

const obj1 = {
    firstName: "Lakshay",
    age: 22,
    email: "abc@gmail.com"
};

const obj2 = {
    lastName: "Sindhu",
    birthYear: 2002
};

const obj3 = {obj1, obj2}; // By this way we are not combining the properties of objects , instead we are storing two objects inside another object-3

// console.log(obj3);

const obj4 = Object.assign({},obj1,obj2); // {}-> target & obj1 & obj2 are source
// console.log(obj4);

const obj5 = {...obj1,...obj2}; // Using spread Operator
// console.log(obj5);

users = [
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    },
    {
        id: 3,
        email: "pqr@gmail.com"
    }
];

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));// Returns keys in the form of array
// console.log(Object.values(tinderUser)); // Return values in the form of array

// console.log(Object.entries(tinderUser)); // Returns Array of array where each array consists of key value pair of each property of an object

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// ******************* Destructuring of Objects in JS ****************

const course = {
    courseName: "JS in Hindi",
    price: "$99",
    courseInstructor: "Hitesh"
}

course.courseInstructor = "Lakshay";

const {courseInstructor : instructor} = course; // Destructuring 
// Now we are no longer required to write full course.courseInstructor to access the value of property courseInstructor

// here we have given alias name for courseInstructor : instructor

console.log(instructor);


// Basics of APIs 

