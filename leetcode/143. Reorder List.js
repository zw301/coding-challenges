// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
//
// You may not modify the values in the list's nodes, only nodes itself may be changed.
//
// Example 1:
//
// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:
//
// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head === null) {
    return;
  }

  //Find the middle of the list
  let mid = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    mid = mid.next;
  }

  //Reverse the half after middle  1->2->3->4->5->6 to 1->2->3->6->5->4
  let curr = mid.next;
  let prev = null;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  mid.next = prev;

  //Start reorder one by one  1->2->3->6->5->4 to 1->6->2->5->3->4
  let left = head;
  let right = mid.next;

  while (right !== null) {
    mid.next = right.next;
    right.next = left.next;
    left.next = right;
    left = right.next;
    right = mid.next;
  }

};
