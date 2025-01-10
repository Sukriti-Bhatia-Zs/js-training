// promise for success string after 2 seconds

const delay=new Promise((resolve,reject)=>{
     setTimeout(()=>resolve("Success"),2000);
})

delay.then((result=>console.log(result)));


