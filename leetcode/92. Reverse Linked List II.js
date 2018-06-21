//
// Reverse a linked list from position m to n. Do it in one-pass.
//
// Note: 1 ≤ m ≤ n ≤ length of list.
//
// Example:
//
// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (head === null || m >= n) {
    return head;
  }

  const dummy = new ListNode(0);
  dummy.next = head;
  head = dummy;

  for (let i = 1; i < m; i++) {
    if (head === null) {
      return null;
    }
    head = head.next;
  }

  let preMNode = head;
  let mNode = head.next;
  let nNode = mNode;
  let postNNode = mNode.next;

  for (let i = m; i < n; i++) {
    if (postNNode === null) {
      return null;
    }
    let tmp = posNNode.next;
    postNNode.next = nNode;
    nNode = postNNode;
    postNNode = tmp;
  }

  mNode.next = postNNode;
  preMNode.next = nNode;


  return dummy.next;
};
