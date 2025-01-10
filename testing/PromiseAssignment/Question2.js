// 2 promises one string and one number

const num=new Promise((resolve,reject)=>{

    setTimeout(()=> resolve(1),1000);
})

const str=new Promise((resolve,reject)=>{

    setTimeout(()=> resolve("success"),2000);
})

Promise.all([num,str])
        .then((result)=>{
            // console.log(result);
            result.map(element=>console.log(element));
        })