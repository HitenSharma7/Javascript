const user={
    username:"Hiten",
    price:"6000",

welcomeMessage:function(){
    console.log(`${this.username},Welcome to the website `)
}
}
user.welcomeMessage()
//this means current context i.e In this function 
//this ka value function ke define hone pe nahi, function ke call hone pe decide hota hai.

console.log(this)

// function chai()
// {
//    let name="HHH"
//      console.log(this)
    
// }

const chai=()=>{
    let username="John"
    console.log(this)
}
chai()

//An arrow function is a shorter and modern way to write a function in JavaScript.
//It was introduced in ES6 (2015).

//Key Rule to Remember 🔑

// Arrow functions do not bind their own this.

// That’s why:

// ❌ Not good for object methods

// ✅ Very good for callbacks

// const addTwo=(num1,num2)=>( num1+num2)
 const addTwo=(num1,num2)=>({username:"Hiten"})

console.log(addTwo(2,5))