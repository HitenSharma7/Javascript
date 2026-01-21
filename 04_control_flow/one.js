//if
const isUserLoggedin= true
const temperature=-56
// if(temperature>30)
// {
//     console.log("It is Summer Seson")
// }
// else{
//     console.log("It is winter season")
// }

//var has global scope
//let and const have local scope and it is better

const age =21
if (age>18){
    console.log("You are allowed to vote")
}
else if(age=18)
{
console.log("You are allowed to vote")
}
 else {
console.log("You are not allowed to vote")
}
const userLoggedin=true 
const debitCard=true
const loggedinFromGoogle=true
const loggedinFromEmail=true
const Guest=true
if(userLoggedin && debitCard && 2==2)
{
console.log("You are allowed to buy the course")
}

if(loggedinFromGoogle||loggedinFromEmail ||Guest){

    console.log("User logged in")
    
}