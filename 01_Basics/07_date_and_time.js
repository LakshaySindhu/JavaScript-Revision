// ************************ Dates in JS ****************************

let currentDate = new Date(); // Creates a date object with current date and time
// console.log(currentDate); // Returns a date string
// 2024-06-03T17:37:04.970Z

// console.log(currentDate.toString()); // Returns the date string in more readable format -> Mon Jun 03 2024 17:37:04 GMT+0000 (Coordinated Universal Time)

// console.log(currentDate.toDateString()); // Mon Jun 03 2024

// console.log(currentDate.toISOString()); // Standard date string format by ISO -> 2024-06-03T17:45:37.903Z

// console.log(currentDate.toJSON()); // Same as by default date string format -> 2024-06-03T17:45:37.903Z 

// console.log(currentDate.toLocaleString()); // 6/3/2024, 5:45:37 PM

// console.log(typeof currentDate); // object

// Creating Date object by explicitly specifying date - (YYYY,MM,DD)
let myDate = new Date(2023,0,11);

// console.log(myDate.toString()); // Wed Jan 11 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let myCreatedDate = new Date(2012,2,15,5,20);
// console.log(myCreatedDate.toLocaleString()); // -> 3/15/2012, 5:20:00 AM

// Creating Date object by passing Date string as argument 

let anotherDate = new Date("2023-01-26"); // -> YYYY-MM-DD
// console.log(anotherDate.toString());

let someAnotherDate = new Date("2023-00-11"); // -> YYYY-MM-DD
// console.log(someAnotherDate.toString()); // -> Returns Invalid Date

let someDate = new Date("01-14-2024"); // -> MM-DD-YYYY
// console.log(someDate.toString());


// *********************** Time Stamps in JS ***********************

let myTimeStamp = Date.now(); // Returns value in Miliseconds

// console.log(myTimeStamp); // Returns Milisecond value of current date from Jan 01 1970

// console.log(someDate.getTime());  // Used in Booking and Quiz Applications and time needs to be compared or recorded accurately 

// To convert miliseconds to seconds 

// console.log(Date.now()/1000); // converted to seconds
// console.log(Math.floor(Date.now()/1000)); // To Remove decimals

let newDate = new Date(); 

// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getMilliseconds());

// To customize Locale String Format as per your requirements
newDate.toLocaleString('default',{
    weekday:"long"
})




