"use strict"; // treat all JS code as newer version

// alert(5+10); // we are using node js not browser

// console.log(3+3); console.log("Lakshay") // This code lacks readability

// Code Readable
console.log(3+3);
console.log("Lakshay");

// Datatypes in js

// number -> 2^52 -> maximum number that can be stored in memory

// bigint -> To store number larger than 2^53 (usually used in trading websites or large scale website like reddit, facebook ,meta)

// string => "" - Collection of characters 

// boolean => true or false

// null => standalone value - It is used to depict absence of value or representation of empty value.

/* Null Usecase - Lets say user requests the server for temperature value and if the server is  not able to fetch the value from sensor then in that case server will return a null value of user or client (not zero(0) because 0 is a valid temperature value) */ 

// undefined => When variable is declared but not initialised

// symbol => It is datatype used to find out uniqueness of components
/* Usecase of symbol datatype - Mostly used in react and angular. Used by websites like figma where it is required to uniquely identify components of the website */


let name = "Lakshay"; 
let age = 22;         
let isLoggedIn = false;
let serverStatus = null;

// User defined and derived datatypes

// Object 

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof serverStatus);






