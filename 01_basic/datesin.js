let myDate = new Date()
//console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate); // object 

// let CreatedDate = new Date(2023, 0, 23);
// let CreatedDate = new Date(2023, 0, 23, 6, 5);
// let CreatedDate = new Date("2023-02-24");
let CreatedDate = new Date("02-24-2023");
// console.log(CreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(CreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());



// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})







