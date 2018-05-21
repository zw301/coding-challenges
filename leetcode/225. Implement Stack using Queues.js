// Implement the following operations of a stack using queues.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// empty() -- Return whether the stack is empty.
// Notes:
// You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size,
// and is empty operations are valid.
//
// Depending on your language, queue may not be supported natively.
// You may simulate a queue by using a list or deque (double-ended queue),
// as long as you use only standard operations of a queue.
//
// You may assume that all operations are valid
// (for example, no pop or top operations will be called on an empty stack).

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.store = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.store.push(x);
  for (let i = 0; i < this.store.length - 1; i++) {
    this.store.push(this.store.shift());
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (this.empty()) {
    return null;
  }
  return this.store.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (this.empty()) {
    return null;
  }
  return this.store[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.store.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const s = new MyStack();
s.push(1);
s.pop();
console.log(s.store);
console.log(s.empty());
