// reduce ()

const myNumber = [1, 2, 3]
//  const mytotal =  myNumber.reduce( function (accumulator, currentvalue, ) {
//     console.log(`accumulator:${accumulator} and currentvalue:${currentvalue}`);
//            return accumulator + currentvalue

//  }, 0)


const mytotal = myNumber.reduce( (accumulator, currentvalue)=> accumulator+currentvalue, 0)
 console.log(mytotal);


 const shoppingCart = [
    {
        itemName: "Js course",
        price: 1999

    },
    {
        itemName: "cpp course",
        price: 5999

    },
    {
        itemName: "python course",
        price: 2999

    },
    {
        itemName: "Mobile development",
        price: 10999

    },

 ]

 const priceToPay = shoppingCart.reduce( (accumulator,item)=> accumulator + item.price , 0)


 console.log(priceToPay);