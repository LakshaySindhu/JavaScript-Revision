// for of 

["", "", "", ""]; // => Array of strings
[{}, {}, {}, {}]; // => Array of objects 

const arr = [1,2,3,4,5];
const str = "hello world!";

for (const val of arr) {
    // console.log(val);   
}

for(const ch of str){
    if(ch==" "){
        continue;
    }
    // console.log(ch);
}
// const someArr = [6,7,8,9,10];
// console.log(...arr,...someArr);

// Maps => unique ordered collection of key,value pair  

// The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys.

// Use the set method to add key-value pairs to a Map.
// Use the get method to retrieve values.
// Use for...of to iterate over entries.
// Use has to check for the existence of a key.
// Use delete to remove a key-value pair.
// Use clear to empty the Map.

const map = new Map();
map.set("IN","India");
map.set("USA","United States of America");
map.set("Fr","France");
map.set("Ch","China");
map.set("UK","United Kingdom");

// console.log(map);

for(const [key,val] of map){
    // console.log(key," : ",val);
}

const myObj = {
    name: "Lakshay",
    age: 22,
    username: "ray",
    email: "lakshay.sindhu11@gmail.com"
};

// console.log(Object.keys(myObj));

// for of loop doesn't work with objects 

// for(const val of myObj){ // Throws an error
//     console.log(val); 
// }


// Different way of using for of loop to iterate an object
for(const key of Object.keys(myObj)){
    // console.log(key," : ",myObj[key]);
}

// In general, for iterating an object for in loop is used
const lang = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}

for (const key in lang) {
    // console.log(key," : ",lang[key]); 
}

const programming = ["js","rb","py","cpp","java"];

for(let key in programming){
    // console.log(key);
};

// Does prints anything because in js maps are not iterables
// for(let key in map){
//     console.log(key);
// }





