// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
//
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
//
// Example:
//
// Given this linked list: 1->2->3->4->5
//
// For k = 2, you should return: 2->1->4->3->5
//
// For k = 3, you should return: 3->2->1->4->5
//
// Note:
//
// Only constant extra memory is allowed.
// You may not alter the values in the list's nodes, only nodes itself may be changed.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (head === null) {
    return null;
  }

  const dummy = new ListNode(0);
  dummy.next = head;

  let node = dummy;

  while (node !== null) {
    node = reverseK(node, k);
  }

  // head = dummy;
  // while (true) {
  //   node = reverseK(head, k);
  //   if (head === null) {
  //     break;
  // }

  return dummy.next;
};


// head->n1->n2->...->nk->nk+1
// head->nk->nk-1->...->n1->nk+1
function reverseK(head, k) {
  let nk = head;

  for (let i = 0; i < k; i++) {
    if (nk === null) {
      return null;
    }
    nk = nk.next;
  }

  if (nk === null) {
    return null;
  }

  let n1 = head.next;
  let nkplus = nk.next;

  let prev = null;
  let curr = n1;
  while (curr !== nkplus) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head.next = nk;
  n1.next = nkplus;
  return n1;
}
