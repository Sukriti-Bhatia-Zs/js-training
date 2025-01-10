// promise.all 

const promise1=new Promise((resolve,reject)=>{

    setTimeout(()=>resolve("promise 1"),1000);
})

const promise2=new Promise((resolve,reject)=>{

    setTimeout(()=>resolve("promise 2"),2000);
})

const promise3=new Promise((resolve,reject)=>{

    setTimeout(()=>reject("rejected"),1000);
})

Promise.all([promise1,promise2,promise3])
    .then((results)=>{
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
      });