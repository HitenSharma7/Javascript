//Const tinderuser= new Object()
const tinderuser={}

tinderuser.name="Sam"
tinderuser.id="IPV645"
// console.log(tinderuser)

const regularuser={
    email:"hitz98@gmail.com",
    Fullname:{
        Username:{
       firstname:"Hiten",
       lastname:"Sharma",
        }
    }
}
// console.log(regularuser.Fullname.Username.lastname)

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj4={5:"e", 6:"f"}

// const obj3=Object.assign({},obj1,obj2)
const obj3= {...obj1,...obj2,...obj4}
console.log(obj3)


//Lec 17 see for database values.........