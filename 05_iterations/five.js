//+++++++++++++++++++++   FOREACH   +++++++++++++++++++++++++++++
const coding=["JS","C++","Ruby","C","Python","Java"]

// coding.forEach(function(val)
// {
//     console.log(val)
// }
// )

// coding.forEach ( (item) => {
//     console.log(item)



// // })
// function PrintMe(item){
//     console.log(item)
// }

// coding.forEach(PrintMe)

// coding.forEach( (item,arr,index)=> {
// console.log(item,arr,index)

//  }

// )


const myArr=[

    {
        name:"hiten",
        course:"js",
        id:5648,
    },
    {
        name:"Arthur",
        course:"art",
        id:1899,
    },
    {
        name:"John Martson",
        course:"philosphy",
        id:1911,
    }

]

myArr.forEach( (item) => {
    console.log(item.course)
});