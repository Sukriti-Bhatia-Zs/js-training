// random reject or resolve

function promises(){
    return new Promise((resolve,reject)=>{
        const random=Math.random()>0.5;
        setTimeout(()=>{
            if(random){
                resolve("resolved");
            }
            else{
                reject("rejected");
            }
        },Math.random()*2000);
    })
}

Promise.allSettled([promises(),promises(),promises()])
    .then(result=>console.log(result));