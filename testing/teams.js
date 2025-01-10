const team1=new Promise((resolve,reject)=>{
    const random=Math.floor(Math.random() * 10);
    setTimeout(()=>resolve("Team1 won"),random*1000);
})

const team2=new Promise((resolve,reject)=>{
    const random=Math.floor(Math.random() * 10);
    setTimeout(()=>resolve("Team2 won"),random*1000);
})

const team3=new Promise((resolve,reject)=>{
    const random=Math.floor(Math.random() * 10);
    setTimeout(()=>resolve("Team3 won"),random*1000);
})

const team4=new Promise((resolve,reject)=>{
    const random=Math.floor(Math.random() * 10);
    setTimeout(()=>resolve("Team4 won"),random*1000);
})

Promise.any([team1,team2,team3,team4]).then(result=> {
    console.log(result);  
})