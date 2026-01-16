function sayMyName ()
{
    console.log("A")
    console.log("R")
    console.log("T")
    console.log("H")
    console.log("U")
    console.log("R")
}
// sayMyName()

function addTwoNumbers(num1,num2){
// console.log(num1+num2)
let result=num1+num2
return result
}
const result=addTwoNumbers(25,25)

console.log("Result is :",result)

function loginUserMessage(username="Hiten")
{
    if(!username)
    {
        console.log("Please enter a Username")
        return
    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage())



//here ... means Rest operator

//Rest operator means that accepting indefinite numbers of arguments as an array 
function calculateCartPrice(val1,val2,val3,...num1){
    return num1
}
console.log(calculateCartPrice(200,4000,500,650))

const user ={
    name:"hiten",
    price:199,
}
function handleObject (anyObject)
{
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)

}

handleObject(user)

const myNewArray=[100,2010,300,600]

function returnSecondValue (getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))