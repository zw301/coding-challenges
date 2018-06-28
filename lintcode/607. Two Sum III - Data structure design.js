// Description
// Design and implement a TwoSum class. It should support the following operations: add and find.
//
// add - Add the number to an internal data structure.
// find - Find if there exists any pair of numbers which sum is equal to the value.
//
// Have you met this question in a real interview?
// Example
// add(1); add(3); add(5);
// find(4) // return true
// find(7) // return false

class TwoSum {
  constructor() {
    this.store = [];
    this.map = {}
  }
  add(n) {
    this.store.push(n);
    if (this.map[n] !== undefined) {
      this.map[n]++;
    } else {
      this.map[n] = 1;
    }
  }
  find(sum) {
    for (let i = 0; i < this.store.length; i++) {
      let number = this.store[i];
      let target = sum - number;

      if (target === number) {
        if (this.map[target] !== undefined && this.map[target] > 1) {
          return true;
        }
      } else {
        if (this.map[target] !== undefined) {
          return true;
        }
      }
    }
    return false;
  }
}

const twoSum = new TwoSum();

twoSum.add(1);
twoSum.add(3);
twoSum.add(5);
twoSum.add(3);


console.log(twoSum.find(4));
console.log(twoSum.find(7));
console.log(twoSum.find(6));
