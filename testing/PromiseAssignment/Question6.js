// sequential execution using async/await

const sequential=async ()=>{

    const api1=await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data1=await api1.json();
    console.log(data1);
    const api2=await fetch("https://jsonplaceholder.typicode.com/posts/2")
    const data2=await api2.json();
    console.log(data2);
    const api3=await fetch("https://jsonplaceholder.typicode.com/posts/3")
    const data3=await api3.json();
    console.log(data3);

}

sequential();