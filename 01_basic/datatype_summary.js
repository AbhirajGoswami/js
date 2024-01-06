// #primitive 
// 7 types => String, Number, Boolean, null, undefined, symbol,
//  BigInt

const score = 1001
const scoreValue = 100.34

const isLoggedIn =true 
const outsideTemp = null 

//let userEmail;

const id = Symbol('112')
const anotherId = Symbol('112')
//console.log(id === anotherId);

const bigNumber = 91808209073483n



// Reference (non Primitive)
// Array,  Object ,function

const actors = ["shaktiman", "krish", "naagraj", "bahubali"];

let myObj = {
    name: "Abhiraj kr",
    age: "20",
    }

    const myFunction = function (){

        console.log("Hello Good Morning");

    }

    console.log(typeof scoreValue);
 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack=>(primitive), Heap=>(non-primitive)

let myName = "Abhiraj Kumar Giri"

anotherName = myName
anotherName = "Golu Kumar"
 
console.log(myName);
console.log(anotherName);


let userOne = {
    email: "userone@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email="golu@goole.com"

console.log(userOne.email);
console.log(userTwo.email);
