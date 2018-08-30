// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
//
// Example:
//
// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.nums = [];
  this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.sum += val;
  if (this.nums.length === this.size) {
    this.sum -= this.nums.shift();
  }
  this.nums.push(val);
  return this.sum / this.nums.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */
