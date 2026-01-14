const marvel_heroes=["Thor","Ironman","Spiderman"]

const dc_heroes=["Batman","Flash","Superman"]

//+++++++++++++PUSH+++++++++++++
// marvel_heroes.push(dc_heroes)

//Here the first array takes the other array in itself
// console.log(marvel_heroes)
// console.log(marvel_heroes[1][3])
//+++++++++++++++++CONCAT++++++++++++++++++
// const all_heroes=marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

//++++++++++++++++++SPREAD+++++++++++++++++++++

const all_new_heroes= [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)

const another_array=[1,2,[3,4],5,6,[7,[8,9],10,11]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array)
//The maximum recursion depth
//FLAT Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(Array.isArray("Hiten Sharma"))

console.log(Array.from("Hiten Sharma"))
console.log(Array.from({name:"Hiten Sharma"}))  //Interesting..... Always Empty Array
let score1=100
let score2=200
let score3=350

console.log(Array.of(score1,score2,score3))

//Summary:-
// Array.of() → creates array from arguments
// Array.from() → converts iterable/array-like to array
// Array.isArray() → checks if value is an array
