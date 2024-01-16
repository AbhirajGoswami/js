// for of 

// ["", "", ""]
// [{},{},{}]

const arrayOne = [1, 2, 3, 4, 5]

for (const num of arrayOne) {

    console.log(num);
}

const greeting = "Hello Good Morning!"
for (const greet of greeting) {
   // console.log(`Each char is: ${greet}`);
    
}

// Maps

// map is a object that hold the key value pair and always gives unique value not duplicate 
const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America") 
map.set('Fr',"France")
//console.log(map);


for (const [key, value] of map) {
   // console.log(key, ':-', value);
    
}

const myObject = {
    game1: "templerun",
    game2: "NFS",
    game3: "freefire",
    game4: "PUBG"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);


    
// }

