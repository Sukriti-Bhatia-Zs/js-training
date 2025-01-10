const mario=document.querySelector('.mariopng');
const positions=[];
const mariowidth=mario.width;

for(let i=0;i<(window.innerWidth-mariowidth);i+=10){
    positions.push(i);
}
let currpos=positions[0];

mario.style.left=currpos+'px';

document.addEventListener('keydown',(e)=>{
    if(e.key==='Shift'){
        mariomove();
    }
})

function mariomove(){
     let postomove=positions.shift(); // getting the first index of array and that index is now removed from array and 2nd inedex becoms now 1st

     // checking if mariowidth +postomove becomes greater than screenwidth then add at firstindex of arr 0 
     mario.style.left=postomove+'px';
     // updating left
     if(postomove+mariowidth>=window.innerWidth){
        positions.unshift(0);
         // unshift wraps 0 to first index of arr
     }
     else{
        // adding postomove at end of arr so that when one by one all the elements are removed using shift then simultaneously all the positions to move are added in array so that it traverses
        positions.push(postomove+10);
     }
    
    
    
}

// calling the mariomove in every 100 sec

setInterval(mariomove,100);


