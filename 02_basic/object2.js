//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = 234356
tinderUser.name = "Abhiraj Kumar"
tinderUser.IsLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"raj12@gmail.com",
    fullName: {
        userfullName: { 
            firstName: "Abhiraj",
            lastName: "Goswami"

        }
    }
}
// console.log(regularUser.fullName.userfullName.firstName);
const obj1 = {a: "1", b:"2"}
const obj2 = {c: "3", d:"4"}
const obj3 = {e: "5", f:"6"}

//const obj4 = {obj1, obj2, obj3}  
// console.log(obj4);

//const obj5 = Object.assign({}, obj1, obj2, obj3, ); // combine the two object using assign() function 
// console.log(obj5);

const obj6 ={...obj1, ...obj2, ...obj3}  // combine the two object using spread operator
// console.log(obj6);

User =[
    {
        id: 1,
        email: "ab12@gmail.com"
    },

    {
        id: 2,
        email: "ab1234@gmail.com"
    },
    
    {
        id: 3,
        email: "ab123@gmail.com"
    },

    {
        id: 4,
        email: "ab121@gmail.com"
    },
]
 //User[1].email  // access the array object 

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // access the keys of a object=>(tinderUser) from database 
// console.log(Object.values(tinderUser)); // access the value of a object=>(tinderUser) from database 
// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty('IsLoggedIn')); // check the value-property  is exist or not in the object 


const course ={
    name: "Javascript tutorial in hindi",
    price: "1000",
    courseTeacher: "Abhiraj Goswami",
    time: "01 month"
}

// course.courseTeacher
const {courseTeacher: teacher} = course // object destructure 

// console.log(courseTeacher);
console.log(teacher);


//+++++++++++++++++++++++++ API data format in form of object json   ++++++++++++++++++++++++

// {
//     "name": "Abhiraj Kumar Giri",
//     "course": "Js in Hindi",
//     "price": "Free ON Youtube"
// }

//++++++++++++++++++++++++++ ApI data in the form of array object json ++++++++++++++++++++

// [
//     {},
//     {},
//     {}, 
// ]



