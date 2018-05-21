// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.store = [];
  this.min = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.min === null || x <= this.min) {
    this.store.push(this.min);
    this.min = x;
  }
  this.store.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.store.length === 0) {
    return null;
  }
  const val = this.store.pop();
  if (val === this.min){
    this.min = this.store.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.store.length === 0) {
    return null;
  }

  return this.store[this.store.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
console.log(minStack.store);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.store);
console.log(minStack.getMin());
