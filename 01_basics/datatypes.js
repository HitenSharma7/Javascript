// Primitive Datatypes : String,Number,Boolean,Null,Symbol,Undefined,BigInt



const score =100
const isLoggedIn =false
const outsideTemp=null

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId)



// Non Primitive Datatypes(Reference): Array,Objects,Functions

const GOATS=["Arthur Morgan","Niko Bellic","Tommy Vercciti","Carl Johnson","John Martson"]

console.log(GOATS)

let myObj={
    Name:"Hiten",
    Age:20,
}
console.log(myObj)

const myFunction=function()
{
console.log("My name is John Martson deu deu deu ")
}


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


