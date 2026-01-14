//Object Literals

const mySym=Symbol("key1")
const JsUser={
name:"Hiten",
[mySym]:"mykey1",
email:"hiten@google.com",
location:"Jaipur",
isLoggedin:false,
age:20,
lastLoggedin:["Monday","Friday"]

}

console.log(JsUser.email)
console.log(JsUser["location"])


//Printing Symbol inside an object with type symbol
console.log( JsUser[mySym])
//Changin and Overriding the values
JsUser.email= "hitens54@yahoo"
JsUser.location="Jalandhar"


// console.log(JsUser)
//Freezing the values
Object.freeze(JsUser)
JsUser.age=68

console.log(JsUser)