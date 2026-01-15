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
console.log(loginUserMessage())

