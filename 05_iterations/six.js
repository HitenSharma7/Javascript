const coding=["JS","C++","Ruby","C","Python","Java"]

const values=coding.forEach((item)=>{ 
     console.log(item)
     return item   //forEach do not return any thing
}
)

console.log(values)
const Mynums=[1,2,3,4,5,6,7,8,9,10]
//Filter means that it will only return the values that satisfies its given condition..
//syntax: const variable_name= variable.filter((variable)=>(condition))

//const newNums= Mynums.filter((Mynums)=> (Mynums>4))
const newNums= Mynums.filter((Mynums)=> { return Mynums>4})
//if use object (scope or curly braces) for condition in filter,then use  return
console.log(newNums) 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let newBooks= books.filter((bk)=>bk.genre==='History')

newBooks=books.filter((bk)=>bk.edition>= 1995 && bk.genre==="Fiction")
console.log(newBooks)