//+++++++++++++++++ FORIN  +++++++++++++++++++++++++

const myGames={
    game1:'NFS',
    game2:'RDR2',
    game3:'WWE 2K26',
    game4:'GTA6',
}

for (const key in myGames) {
    // console.log(`${key}  is for ${myGames[key]}`)
}
    
const map= new Map()
map.set("IN","India")
map.set("USA","United States Of America")
map.set("FR","France")

for (const key in map) {
   console.log(key) //no output because maps are not iteratable
}