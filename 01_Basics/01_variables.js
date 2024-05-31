const accountId = 414141;
let accountEmail = "lakshay@google.com";
var accountPass = "123456";
accountCity = "Jaipur";
// accountId = 1234

// Variable declare but not initialised
let accountState;


// Prefer not to use var 
// Because of issue in block scope and functional scope

console.log(accountId);
console.log(accountEmail);
console.log(accountPass);
console.log(accountCity);

accountEmail = "sindhu@gmail.com";
accountPass = "987654";
accountCity = "Bengaluru";

// Displaying all variables values using single console statement

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);


