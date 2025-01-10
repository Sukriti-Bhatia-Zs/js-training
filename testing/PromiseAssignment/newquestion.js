class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        console.log(this.count);
    }

    start() {
        setInterval(this.increment.bind(this), 1000);
    }
}

const counter = new Counter();
counter.start();