function HiMyName (){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("J");
}
//HiMyName()

// function AddTwoNumber (number1, number2){

//     console.log(number1 + number2);
// }


function AddTwoNumber (number1, number2){

    // let result = number1 + number2
    // return result

    return number1+number2
}
const result = AddTwoNumber(8,5)

// console.log("Result is", result);


function LogInUserMessage (username ="Manish"){
    if (username === undefined) {

        console.log("Please Enter a Username");
        return
    }

    return `${username} just loggedIn ` 
}

// console.log(LogInUserMessage());  // without parameter


// console.log(LogInUserMessage("Abhiraj")); // with parameter

function calculateCartPrice (...num1){  // here we used rest operator for taking lots of parameter 

    return num1
}
//console.log(calculateCartPrice(200, 300, 600))

function calculateCartPrice (val1, val2, ...num1){  // here we get output 600 and 2000  operator for taking lots of parameter 

    return num1
}
//console.log(calculateCartPrice(200, 300, 600, 2000))  

 const user = {
    username: "Abhiraj",
    price: 299


}
function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)
 // object pass in function
handleObject({
    username: "manish",
    price: 499
})

// array pass in function 

const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200, 300, 400, 600]));