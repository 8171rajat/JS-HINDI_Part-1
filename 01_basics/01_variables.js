const accountId = 14453
let accountEmail = "Rajatkumar@gmail.com"
var accountPassword = "12345"
 accountCity = "jaipur"
 let accountState;

// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "23445533667"
accountCity = "Haridwar" 
// console.log(accountCity); 

/* 
 prefer not to use var 
 because of issue in block scope and functional scope 
  */

console.table([accountId,accountState, accountEmail, accountPassword, accountCity]);