const name="Hiten"
const repocount=6

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName= new String('hitens355')
console.log(gameName[0]);
console.log(gameName[5]);
console.log(gameName.length)



const newString= gameName.substring(0,4)
//starts with 0 means includes 0  &  ends with 4 means doesnt include 4.
// it doesnt start with negative
console.log(newString)

const unwantedSpace= String("    hitens     ")
console.log(unwantedSpace)

console.log(unwantedSpace.trim())