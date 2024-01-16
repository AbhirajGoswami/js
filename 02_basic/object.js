// singleton
// object.create

// Object literals
const mySym = Symbol("myKey1")
const JsUser = {
    name: "Abhiraj",
    "full name": "Abhiraj Kumar Giri",
    [mySym]: "myKey1",
    age: "19",
    location: "Chandigarh",
    email: "abh@gmail.com",
    isLoggedIn: false,
    LastLogedIn: ["monday", "saturday"]
}
console.log(JsUser.email);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email ="abhiraj@gmail.com"
// Object.freeze(JsUser)
JsUser.email ="abhirajchatgpt.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user Good morning");

}

console.log(JsUser.greeting);


JsUser.greeting2 = function(){
    console.log(`hello js user Good morning, ${this.name} `);

}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

