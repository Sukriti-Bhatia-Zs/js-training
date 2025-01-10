// increment and race

let sharedvariable=9;

const increment=async ()=>{
    return new Promise((resolve,reject)=>{
        let currvariable=sharedvariable;
        setTimeout(()=>{
            sharedvariable=currvariable+1;
            resolve(`${sharedvariable}`);
        })
    },Math.random()*1000);
}

Promise.race([increment(),increment()])
    .then((result)=>{
        console.log(result);
    })