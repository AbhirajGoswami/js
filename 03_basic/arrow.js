const user ={
    username: "Abhiraj",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website `);
        console.log(this);

    }

}

// user.welcomeMessage()
// user.username = "Manish"
// user.welcomeMessage()

//console.log(this);  // it will refer and produce output empty object {}
  

// function ChaiAurCode(){
//     let username = "manish"
//     console.log(this.username);  // it will show undefined in js 
// }
// ChaiAurCode()




// const  chai = function () {
//     let username ="rahul kumar"
//     console.log(this.username);
// }


// Arrow function basic 

const  chai = () => {
    let username ="rahul kumar"
    console.log(this);
}

chai()

// pure Arrow function basic  

//  const AddTwoNumber1 =  (num1,num2) => {

//     return num1 +num2      // explicit return 
//  } 

// implicit return arrow function where we no need to define the return type 

//  const AddTwoNumber1 =  (num1,num2) =>  num1 +num2

// const AddTwoNumber1 =  (num1,num2) =>  (num1 +num2)

// Object declaration in js arrow function


const AddTwoNumber1 =  (num1,num2) =>  ({username: "hitesh"})

 console.log(AddTwoNumber1(7,7));



 