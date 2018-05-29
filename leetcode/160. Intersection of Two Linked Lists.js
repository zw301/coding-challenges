// Write a program to find the node at which the intersection of two singly linked lists begins.
//
//
// For example, the following two linked lists:
//
// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗
// B:     b1 → b2 → b3
// begin to intersect at node c1.
//
//
// Notes:
//
// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.
// Credits:
// Special thanks to @stellari for adding this problem and creating all test cases.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const set = new Set();
  let curr = headA;
  while (curr !== null) {
    set.add(curr);
    curr = curr.next;
  }

  curr = headB;
  while (curr !== null) {
    if (set.has(curr)) {
      return curr;
    }
    curr = curr.next;
  }
  return null;
};

var getIntersectionNode = function(headA, headB) {
  let pa = headA;
  let pb = headB;

  while (pa !== pb) {
    pa = pa === null ? headB : pa.next;
    pb = pb === null ? headA : pb.next;
  }

  return pa;
};
