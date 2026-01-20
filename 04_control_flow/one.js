//if
const isUserLoggedin= true
const temperature=-56
if(temperature>30)
{
    console.log("It is Summer Seson")
}
else{
    console.log("It is winter season")
}

//var has global scope
//let and const have local scope and it is better

const balance =500
if (balance>500){
    console.log("Balance is greater than 500")
}
elseif(balance>750)
{
console.log("Balance is greater than 750")
}
elseif(balance>1000)
{
    console.log("Balance is Greater than 1000")
}