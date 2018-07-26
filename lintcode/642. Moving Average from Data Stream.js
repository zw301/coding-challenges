//
// 642. Moving Average from Data Stream
// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
//
// Example
// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1 // return 1.00000
// m.next(10) = (1 + 10) / 2 // return 5.50000
// m.next(3) = (1 + 10 + 3) / 3 // return 4.66667
// m.next(5) = (10 + 3 + 5) / 3 // return 6.00000

class MovingAverage {
  constructor(size) {
    this.queue = [];
    this.size = size;
    this.sum = 0;
  }

  next(val) {
    this.sum += val;
    if (this.queue.length === this.size) {
      this.sum -= this.queue.shift();
    }
    this.queue.push(val);
    return this.sum / this.queue.length;
  }
}

const  m = new MovingAverage(3);
console.log(m.next(1)) //= 1 // return 1.00000
console.log(m.next(10)) //= (1 + 10) / 2 // return 5.50000
console.log(m.next(3)) //= (1 + 10 + 3) / 3 // return 4.66667
console.log(m.next(5)) //= (10 + 3 + 5) / 3 // return 6.00000
