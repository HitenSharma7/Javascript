const buttons = document.querySelectorAll(".button");
const body=document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener("click", function(e){
   console.log(e)
   console.log(e.target)

   if(e.target.id==='grey'){
    body.style.backgroundColor=e.target.id;
    
   }

   if(e.target.id==='red'){
    body.style.backgroundColor=e.target.id;
    
   }

   if(e.target.id==='blue'){
    body.style.backgroundColor=e.target.id;
    
   }

   if(e.target.id==='yellow'){
    body.style.backgroundColor=e.target.id;
    
   }
   if(e.target.id==='purple'){
    body.style.backgroundColor=e.target.id;
    
   }
   if(e.target.id==='black'){
    body.style.backgroundColor=e.target.id;
    
   }
   if(e.target.id==='beige'){
    body.style.backgroundColor='beige';
    
   }
   if(e.target.id==='orange'){
    body.style.backgroundColor=e.target.id;
    
   }
   if(e.target.id==='crimson'){
    body.style.backgroundColor=e.target.id;
    
   }
   if(e.target.id==='rosyBrown'){
    body.style.backgroundColor=e.target.id;
    }
   if(e.target.id==='green'){
    body.style.backgroundColor=e.target.id;
    }
  });
});
