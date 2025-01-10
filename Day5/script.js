let arrdate=[];

const randomdate=(startdate,enddate)=>{
    const starttime=startdate.getTime();
    const endtime=enddate.getTime();

    let randomdates=[];

    for(let i=0;i<10;i++){
        randomdates[i]=new Date(starttime+Math.random()*(endtime-starttime));
    }

    return randomdates;
}

 arrdate = randomdate(new Date(2024, 0, 1), new Date());
 debugger

 console.log("Before Sorting:", arrdate);
let ascendingdate = arrdate.sort((a, b) => a - b);
console.log("After Sorting (Ascending):", arrdate);
// let ascendingdate= arrdate.sort((a,b)=>a-b);
// spread so that shallow copy is made and no changes made in original arr
let descendingdate=[...arrdate].sort((a,b)=>b-a);

// console.log(randomdate(new Date(2024, 0, 1), new Date()));
console.log(arrdate);
console.log(ascendingdate);
console.log(descendingdate);

const formatdate=(date) => {
    let day = date.getDate(); 
    let month = date.getMonth(); 
    let year = date.getFullYear(); 
    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds(); 

    return `${day}/${month}/${year} Time ${hours}:${minutes}:${seconds}`
}


const dates=()=>{
    let tablebody=document.getElementById("tbody");
    for(let i=0;i<10;i++){
        // creating row
        let rows=document.createElement("tr");

        // creating cols
        let col1=document.createElement("td");
        col1.textContent=formatdate(arrdate[i]);

        let col2=document.createElement("td");
        col2.textContent=formatdate(ascendingdate[i]);

        let col3=document.createElement("td");
        col3.textContent=formatdate(descendingdate[i]);

        // adding cols to row
        rows.appendChild(col1);
        rows.appendChild(col2);
        rows.appendChild(col3);

        // appending row to body
        tablebody.appendChild(rows);
        
    }
   
}

dates()