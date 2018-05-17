// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// wrong version input [5] and [5]. Output: [0]. Expected: [0, 1]

// var addTwoNumbers = function(l1, l2) {
//   let carry = 0;
//
//   let dummy = new ListNode(-1);
//   let head = dummy;
//
//
//   while (l1 !== null && l2 !== null) {
//     let val = l1.val + l2.val;
//     if (carry === 1) {
//       val++;
//     }
//     if (val > 9) {
//       carry = 1;
//       val = val - 10;
//     } else {
//       carry = 0;
//     }
//
//     let node = new ListNode(val);
//     head.next = node;
//     head = head.next;
//     l1 = l1.next;
//     l2 = l2.next;
//   }
//
//   if (l1 !== null) {
//     if (carry === 1) {
//       l1.val = l1.val + 1;
//     }
//     head.next = l1;
//   }
//
//   if (l2 !== null) {
//     if (carry === 1) {
//       l2.val = l2.val + 1;
//     }
//     head.next = l2;
//   }
//
//   return dummy.next;
// };

var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode(-1);
  let head = dummy;
  let carry = 0;

  while (l1 !== null || l2!== null || carry !== 0) {
    let digit = 0;
    if (l1 !== null) {
      digit += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      digit += l2.val;
      l2 = l2.next;
    }

    digit += carry;

    head.next = new ListNode(digit % 10);
    head = head.next;

    carry = Math.floor(digit / 10);
  }

  return dummy.next;
};


const l1 = new ListNode(2);
const l12 = new ListNode(4);
const l13 = new ListNode(3);

l1.next = l12;
l12.next = l13;


const l2 = new ListNode(5);
const l22 = new ListNode(6);
const l23 = new ListNode(4);

l2.next = l22;
l22.next = l23;

console.log(addTwoNumbers(l1, l2))
