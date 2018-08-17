// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
//
// You should preserve the original relative order of the nodes in each of the two partitions.
//
// Example:
//
// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (head === null || head.next === null) {
    return head;
  }

  const lessDummy = new ListNode(0);
  let less = lessDummy;

  const gteDummy = new ListNode(0);
  let gte = gteDummy;

  let curr = head;
  while (curr !== null) {
    if (curr.val < x) {
      less.next = curr;
      less = less.next;
    } else {
      gte.next = curr;
      gte = gte.next;
    }
    curr = curr.next;
  }
  less.next = null;
  gte.next = null;

  less.next = gteDummy.next;
  return lessDummy.next;
};
