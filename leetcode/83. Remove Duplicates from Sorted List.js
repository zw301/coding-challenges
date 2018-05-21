// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
// Example 1:
//
// Input: 1->1->2
// Output: 1->2
// Example 2:
//
// Input: 1->1->2->3->3
// Output: 1->2->3
//

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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// var deleteDuplicates = function(head) {
//   if(head === null) {
//     return null;
//   }
//   const dummy = new ListNode(-1);
//   dummy.next = head;
//
//   while (head.next !== null) {
//     if (head.val === head.next.val) {
//        head.next = head.next.next;
//     }
//     head = head.next;
//   }
//
//   return dummy.next;
// };

var deleteDuplicates = function(head) {
  let curr = head;
  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next;
    }
  }
  return head;
}
