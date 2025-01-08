const sum=(a) =>{
    let totalsum=a;

    return function nextsum(b){
        if(!b){ // n not undefined
            return totalsum;
        }
        else{
            totalsum+=b;
            return nextsum;
        }
    }

    
}

console.log(sum(1)(2)(4)(5)());