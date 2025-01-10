// fetch data using .all

const promise1=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            resolve(data);
        })
})

const promise2=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/posts/2")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            resolve(data);
        })
})

const promise3=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/posts/3")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            resolve(data);
        })
})

Promise.all([promise1,promise2,promise3])
    .then(results=>console.log(results))
console.log("race");

Promise.race([promise1,promise2,promise3])
    .then(results=>console.log(results))
