// immidiately invoked function expreaaion IIFE

// to remove the global scope pollution we used IIFE 
(function Tea(){
    // named IIFE 
    console.log(`database Connected`);

})();
( (name) =>{
console.log(`DB CONNECTED TWO ${name}`);
})('manish')
 
