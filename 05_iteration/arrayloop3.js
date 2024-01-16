// foreach

const codingLang = ["js", "pyhton", "c++", "ruby", "java", "c language", "php"]

// codingLang.forEach(function (value){
//     console.log(value);

// })


// codingLang.forEach( (language)=> {
// console.log(language);
// })


// function PrintMe (item){
//     console.log(item);
// }

// codingLang.forEach(PrintMe);


codingLang.forEach( (item, index, arr)=>{
console.log(item, index, arr);
})

const mycodingLang = [
    {
        languageName : "javascript",
        filenameextension: "js"

},
{
    languageName : "C++",
    filenameextension: "cpp"

},
{
    languageName : "programing in php",
    filenameextension: "php"

},
{
    languageName : "Python",
    filenameextension: "py"

}

]

mycodingLang.forEach( (item) => {
console.log(item.filenameextension);
})