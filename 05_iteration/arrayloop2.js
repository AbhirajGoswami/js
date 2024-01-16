const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python',
    swift: 'swift by app'
}

for (const key in myObject) {
  // console.log(key);
   console.log(`${key} file extension for ${myObject[key]}`);
}

const programingLanguage =  ["rb", "py", "cpp", "java", "js", "swift"]

for (const key in programingLanguage) {
   console.log(programingLanguage[key]);
}

// const map = new Map() 
// map.set('IN', "India")
// map.set('USA', "United States of America") 
// map.set('Fr',"France")
// for (const key in map) {
//   console.log(key);
//     }
