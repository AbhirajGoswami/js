 var c =  200
 let a =  300


if (true) {
   let a = 200
const b  = 23
//console.log("INNER:", a );
}
//console.log(a);
// //console.log(b);
// console.log(c);

// nested 

function One (){
    const username ="Abhiraj"

    function Two(){
        const website = "letsStudy"
   //    console.log(username);
    }
   // console.log(website);
    Two()
}

//One()

if (true) {
    const username = "Manish"
    if (username === "Manish") {
        const website = " Facebook"
      console.log(username + website);
        
    }
//console.log(website);
    
}
// console.log(username);


// ++++++++++++++++++++++++++++++INTRESTING ++++++++++++++++++++++++++++++++++++++
console.log(addOne(6));
function addOne(num){

    return num+1
}

// hoisting in js 
AddTwo(8)
const AddTwo = function (num){
    return num + 2

}


