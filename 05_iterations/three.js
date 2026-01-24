//Higher Order Loops

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for(const num of arr)
{
    //console.log(num)
}

const greetings= "Holaaaa Amigooos !"

for (const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

//Maps
const map= new Map()
map.set("IN","India")
map.set("USA","United States Of America")
map.set("FR","France")
console.log(map)


// for(const key of map){
//  console.log(key)
// }
for(const [key,value] of map){
 console.log(key ,":-",value)
}

const myGames={
    'game1':'NFS',
    'game2':'RDR2',
    'game3':'WWE 2K26',
    'game4':'GTA6',
}




// for(const games of myGames){
//     console.log(`games are:${games}`)
// }
// Therefore Objects are not iteratable by this way