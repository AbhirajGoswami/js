const name = "Abhiraj"
const repoonGithub = 50
// console.log(name + repoonGithub);

console.log(`my name is ${name} and my repo on github is ${repoonGithub}`);

// second method declare a string 
const gameName = new String('Abhirajag')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString =  gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(0,6)
console.log(anotherString);

const newstringOne = "    Abhiraj   "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://abhirajgoswami.com/abhiraj%20goswmai"
console.log(url.replace('%20','-'));

console.log(url.includes('kumar'));


console.log(gameName.split('-'));
