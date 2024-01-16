//const coding = ["js", "pyhton", "c++", "ruby", "java", "c language", "php"]

// const values = coding.forEach( (item) => {
// // console.log(item);
// return item // forEach loop never return anythings values
// })
// console.log(values);


const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// const newNumber = myNumber.filter( (num)=> {

//     return num > 5
// })
// console.log(newNumber);


const newNum = []
myNumber.forEach( (num)=>{
    if (num > 4) {
        newNum.push(num)
        
    }
})

console.log(newNum);



const book = [
    {
        title: 'Book-one', genre: 'fiction', publish: 1983, edition: 2004
    },

    {
        title: 'Book-two', genre: 'non-fiction', publish: 2002, edition: 2007
    },
    {
        title: 'Book-three', genre: 'history', publish: 1984, edition: 2006
    },
    {
        title: 'Book-four', genre: 'science', publish: 1999, edition: 2008
    },
    {
        title: 'Book-five', genre: 'history', publish: 1998, edition: 2009
    },
    {
        title: 'Book-six', genre: 'science', publish: 2007, edition: 2010
    },
    {
        title: 'Book-seven', genre: 'fiction', publish: 2005, edition: 2011
    },
    {
        title: 'Book-eight', genre: 'non-fiction', publish: 1978, edition: 2007
    },

    {
        title: 'Book-nine', genre: 'fiction', publish: 1991, edition: 2006
    },
]

//const bookUser = book.filter( (bk) => bk.genre === 'science')

//const bookUser = book.filter( (bk) => {return bk.publish >= 1994})
const bookUser = book.filter( (bk)=> 
{return bk.publish <=2004 && bk.genre === "fiction"}
)
console.log(bookUser);
