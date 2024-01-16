const indiaTeam = ["Rohit", "Virat", "subhman"]
const DelhiCap = ["Pant", "Prithvi", "Mukesh"]


// indiaTeam.push(DelhiCap)

// console.log(indiaTeam);
// console.log(indiaTeam[3][1]);

 const allInOne = indiaTeam.concat(DelhiCap)
console.log(allInOne);


const allTeams = [...indiaTeam, ...DelhiCap]
console.log(allTeams);



const third_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]
const real_third_array = third_array.flat(Infinity)
console.log(real_third_array);

console.log(Array.isArray("Abhiraj"));
console.log(Array.from("Abhiraj"));
console.log(Array.isArray({name: "Abhiraj"})); // intresting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
