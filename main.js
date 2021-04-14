let counter = document.getElementById('counter');
function add(){
 let newValue = Number(counter.innerText) + 1;
 counter.innerText = newValue; 
}

function min(){
    let newValue = Number(counter.innerText) - 1;
    counter.innerText = newValue; 
   }

   function reset(){
       counter.innerText = 0;
   }