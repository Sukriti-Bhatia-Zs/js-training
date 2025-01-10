// console.log("hi");

// const arr=[10,20,30,40,50];

// const newarr=arr.map((element,key)=>{
//     return {[element]:key+1};
// })

// console.log(newarr);

// const filarr=[10,40,30,30,11];

// const newfilarr=filarr.filter((element)=>{
//     return element%2==0;
// })

// console.log(newfilarr);


// const wait=await delay(4000);

// const delay=setTimeout(() => console.log("after 4 sec"),4000);

let delay=(time)=> new Promise((resolve,reject)=>{
    
 
    setTimeout(() => resolve("after 4 sec"),time)

    
})

// const wait=await delay(4000);
// console.log("after 4 sec");

// mypromise.then(res=>console.log(res));

// let ans=await delay();

// async function newfunc() {
//     let ans = await delay(4000); 
//     console.log(ans); 
// }

// newfunc()

const arr=[10,20,30];

const newobj=arr.reduce((acc,element,key)=>{
    acc[element]=key+1;
    return acc;
},{});

console.log(newobj);