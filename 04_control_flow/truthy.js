const UserEmail=[]

if (UserEmail){
    console.log("Got User Email")
}

else{
    console.log("Did not get email")
}

 // These are some falsy values,Rest all are truthy
// 0,Nan,null,undefined,"",-0,false,BigInt 0n


//truthy values
//"0",'false'," ",[],{},function(){}
const EmptyObject={}

if(Object.keys(EmptyObject).length==0)
{
 console.log("The Object is empty")
}
//Nullish Coalscing Operator(??):null undefined
let val1;
// val1=5??10
// val1= null??10
// val1=undefined??15
val1=null??10??15
console.log(val1)

//Terniary Operator
//condition true:false
const iceTeaPrice=100
iceTeaPrice <=80? console.log("less than 80"):console.log("more than 80")