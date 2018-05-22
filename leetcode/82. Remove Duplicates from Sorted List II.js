// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
//
// Example 1:
//
// Input: 1->2->3->3->4->4->5
// Output: 1->2->5
// Example 2:
//
// Input: 1->1->1->2->3
// Output: 2->3

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
// var deleteDuplicates = function(head) {
//   let dummy = new ListNode(-1);
//   dummy.next = head;
//
//   let prev = dummy;
//
//   while (head !== null) {
//     while (head.next !== null && head.val === head.next.val) {
//       head = head.next;
//     }
//
//     if (prev.next === head) {
//       prev = prev.next;
//     } else {
//       prev.next = head.next;
//     }
//     head = head.next;
//   }
//   return dummy.next;
// };

var deleteDuplicates = function(head) {

  let dummy = new ListNode(-1);
  dummy.next = head;

  let prev = dummy;
  let curr = head;

  while (curr !== null) {
    while (curr.next !== null && curr.val === curr.next.val) {
      curr = curr.next;
    }

    if (prev.next === curr) {
      prev = prev.next;
    } else {
      prev.next = curr.next;
    }
    curr = curr.next;
  }
  return dummy.next;
};
