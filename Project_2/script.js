const form = document.querySelector('form')

form.addEventListener('submit',function (e){
   e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  //if we write this particular value outside this event... Then at the time(instance) when the page loads,it stores the default empty value.Because it is before the event
  
   const results=document.querySelector('#results')

   if(height<0||height===""||isNaN(height)){
    results.innerHTML="Please give the valid height."
   }
   else if(weight<0||weight===""||isNaN(weight)){
    results.innerHTML="Please give the valid weight."
   }
   else{
   const bmi= (weight / ((height*height)/10000)).toFixed(2)
   results.innerHTML=`<span>${bmi}</span>`
   
   if(bmi>24.9){
    
    results.innerHTML="You are Overweight"
    console.log(`${bmi}`)
   }
   else if(bmi<18.6){
    results.innerHTML="Underweight"
    console.log(`${bmi}`)
   }
   else{
    results.innerHTML="You are fit soldier,Keep Hitting"
     console.log(`${bmi}`)
   }
   }
})