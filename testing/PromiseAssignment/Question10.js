// promise chaining

function add(num1,num2){
    return new Promise((resolve,reject)=>{
        resolve(num1+num2);
    })
}

function multiply(sum,num3){
    return new Promise((resolve,reject)=>{
        resolve(sum*num3);
    })
}

add(2,3)
    .then((result)=>{
        return multiply(result,2);
    })
    .then(finalresult=>console.log(finalresult))