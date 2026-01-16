if (true) {
    let a =10
    const b=20
    var c=30
}
// console.log(a)
// console.log(b)
// console.log(c)

//var's scope is always global
function one(){

    const name = "Hiten"
    function two()
    {
        const website="GitHub"
        console.log(name)
    }
    // console.log(website)
    two()
}
one()

function addOne(num){
    return num+1
}
function addTwo(num)
{
    return num+2
}

console.log(addOne(5))
console.log(addTwo(7))