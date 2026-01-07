let a =10
let b=a

b=20
console.log(a)
console.log(b)

//heap:
let user1={
    Name:"Hiten",
    marks:50,
}

let user2= user1

user2.marks+=50

console.log(user1)
console.log(user2)


// Conclusion:
// “Stack memory works with independent copies, so changes don’t propagate.
// Heap memory works with shared references, so a change via one variable affects all references.”