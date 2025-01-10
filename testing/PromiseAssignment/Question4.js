// promise using race  condition

const promise1=new Promise((resolve,reject)=>{

    setTimeout(()=>resolve("promise 1"),1000);
})

const promise2=new Promise((resolve,reject)=>{

    setTimeout(()=>resolve("promise 2"),2000);
})

Promise.race([promise1,promise2])
    .then((result)=>{
        console.log(result);
    })