//Immediately Invoked Function Expressions(IIFE)
(function Hi()
{
    console.log(`DB connected`)
})();
//For writing 2 iife in one file we must separate them from the semicolon
((name)=>{
    console.log(`DB Connected 2`)
})('hiten')