const myNum=[1,2,3]

// // //By ordinary function
// // const myTotal=myNum.reduce( function(acc,currval){
// //     console.log(`Acc: ${acc} and Currval: ${currval}`)
// //     return acc+currval
// },5)



//By Arrow Function
const myTotal= myNum.reduce((acc,currval)=> acc+currval,5)


// console.log(myTotal)

const shoppingCart=[

    {itemName:"Data Sci",
        price:11999,
    },
    {
        itemName:"App Dev",
        price:5999,
    },
    {itemName:"Python",
        price:2999,
    },
]

const Billing=shoppingCart.reduce((acc,item)=> acc+ item.price,0)
console.log(Billing)