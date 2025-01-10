class Counter {
    constructor() {
        this.count = 0;
        this.increment=this.increment.bind(this); // now here when we r accessing this inside a function in class then we cant access this it will be global 
    }

    increment() {
        this.count++;
        console.log(this.count);
    }

    start() {
        console.log(this,this.increment);
        setInterval(
            this.increment
        , 1000);
        // or  setInterval(()=>{
          //  this.increment
         //   }, 1000);
    }
}

const counter = new Counter();
counter.start();