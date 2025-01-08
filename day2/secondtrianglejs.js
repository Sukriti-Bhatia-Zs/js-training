const sum=(a) =>{
    let totalsum=a;

    return function nextsum(b){
        if(b===undefined){
            return totalsum;
        }
        else{
            totalsum+=b;
            return nextsum;
        }
    }

    
}

console.log(sum(1)(2)(4)(5)());