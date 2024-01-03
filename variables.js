const accountId = 832798493
let accountEmail = "ab@gmail.com"
var accountPassword = "122324"
accountCity = "Chandigarh"
let accountState; // undefined


// accountId = 383; // not allowed

console.log(accountId);

/* prefer not to use var 
because of issue in block scope and functional scope */

accountEmail = "abhi@gmail.com"
accountPassword ="12345556"
accountCity = "Mohali"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


