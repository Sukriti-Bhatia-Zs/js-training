// 3 promises and use allsettled

const promise1= new Promise((resolve,reject)=>{
    // resolve api
 fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(
                response=>{
                    return response.json();
                }
            )
            .then(data=> resolve(data));
})

const promise2= new Promise((resolve,reject)=>{
    // reject api
    fetch("https://jsonplaceholder.typicode.com")
        .then(response => {
            return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject("error"));

})

const promise3= new Promise((resolve,reject)=>{
    // resolve api after 3 seconds
     fetch("https://jsonplaceholder.typicode.com/posts/2")
            .then(
                response=>{
                    return response.json();
                }
            )
            .then(data=> setTimeout(()=> resolve(data),3000));
           
})

Promise.allSettled([promise1,promise2,promise3])
            .then((results)=>{
                console.log(results);
            })
