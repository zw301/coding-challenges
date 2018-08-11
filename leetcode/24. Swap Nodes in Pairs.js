// Given a linked list, swap every two adjacent nodes and return its head.
//
// Example:
//
// Given 1->2->3->4, you should return the list as 2->1->4->3.
// Note:
//
// Your algorithm should use only constant extra space.
// You may not modify the values in the list's nodes, only nodes itself may be changed.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null) {
    return null;
  }

  const dummy = new ListNode(0);
  dummy.next = head;
  head = dummy;

  while (head.next !== null && head.next.next !== null) {
    let n1 = head.next;
    let n2 = head.next.next;

    head.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    head = n1;
  }

  return dummy.next;
};
