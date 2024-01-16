const userEmail = "A@bhiraj.gmail.com" // empty string retrun false in truth and falsy condition 
if (userEmail) {
    console.log("Got user Email");
    
}else{
    console.log("Don't have user email");
}
// falsy value 
// false, 0, -0, BigInt 0n, "", null,undefined,NaN,

// truthy values
// "0", 'false', " ", [],{},function (){}

// userData = []
// if(userData.length === 0){
//     console.log("Array is empty");
// }


const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
    
}

// Nullish Coalescing  Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 50



//console.log(val1);


// ternairy operator 

//condition? true : false

const teaPrice = 100
teaPrice <=80 ? console.log("less than 80") : console.log("more than 80 ");
