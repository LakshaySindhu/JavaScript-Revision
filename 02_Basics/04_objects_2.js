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

// console.log(instructor);

// Link to Learn more : https://chatgpt.com/share/0b6c1d7b-ce95-46c2-bca2-f2c2cb9aa10c

// Basics of APIs 

// const Person = {
//     name: "Lakshay",
//     age: 22,
//     email: "lakshay@google.com",
//     address:{
//         city: "New Delhi",
//         pincode: 110046
//     }
// }

// Unpacking the properties of objects into distinct variables

// syntax

// const {name,age,email} = Person;

// console.log(name);
// console.log(age);
// console.log(email);


// Renaming the variables 

// const {name:firstName, age: yearsOld, email: gmail} = Person;

// console.log(firstName); // Lakshay
// console.log(yearsOld);  // 22
// console.log(gmail);     // lakshay@google.com

// destructing and assigning default values 

// const {name,age,phoneNo = "7303028589",email} = Person;

// console.log(name);
// console.log(age);
// console.log(phoneNo);
// console.log(email);

// destructuring object having nested properties

// const {name,age,address:{city,pincode}} = Person;

// console.log(name);
// console.log(age);
// // console.log(address);  // Error => address in not defined
// console.log(city);
// console.log(pincode);


// destruturing using res operator(...)

// const {name,email,...rest} = Person;
// console.log(name);
// console.log(email);
// console.log(rest);


// Using destructuring in Function Parameter

// const person = {
//     name: 'John Doe',
//     age: 30,
//     job: 'Developer'
//   };
  
//   function greet({ name, age }) {
//     console.log(`Hello, my name is ${name} and I am ${age} years old.`);
//   }
  
//   greet(person); // Output: Hello, my name is John Doe and I am 30 years old.

  const Employees = [
    {
        name: "Lakshay",
        age: 22,
        email: "lakshay@google.com"
    },
    {
        name: "Shubham",
        age: 22,
        email: "shubhamsinghkashyap@google.com"
    },
    {
        name: "Yuvraj",
        age: 22,
        email: "yuvirajput@google.com"
    }

  ]

  const [{name:firstName1, age: yearsOld1, email:gmail1},{name:firstName2, age: yearsOld2, email:gmail2},]=Employees;

  console.log(firstName1);
  console.log(yearsOld1);
  console.log(gmail1);

  console.log(firstName2);
  console.log(yearsOld2);
  console.log(gmail2);
  








