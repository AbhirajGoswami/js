// const Array = [1, 2, 3, 4, 5, 6]

// const Movie = ["shaktiman", "krish", "nagraj"]


 const myArr2 = new Array(0, 1, 2, 3, 4, 5)

// console.log(myArr2[1]);

// Array method 

// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()

// myArr2.unshift(8)
// myArr2.shift()
// console.log(myArr2.includes(8));
// console.log(myArr2.indexOf(4));

// const newArray = myArr2.join()
// console.log(myArr2);
// console.log(typeof newArray);


// slice ,splice 
console.log("A", myArr2);

const mym1 = myArr2.slice(1, 3)
console.log(mym1);

console.log("B", myArr2);


const mym2 = myArr2.splice(1, 3)
console.log("C", myArr2);
console.log(mym2);
