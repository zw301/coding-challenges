// Remove all elements from a linked list of integers that have value val.
//
// Example:
//
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
// var removeElements = function(head, val) {
//   while (head !== null && head.val === val) {
//     head = head.next;
//   }
//   let dummy = head;
//   if (head == null) {
//     return null;
//   }
//   head = head.next;
//   prev = head;
//   while (head !== null) {
//     if (head.val === val) {
//       prev.next = head.next;
//       head = head.next
//     } else {
//       prev = head;
//       head = head.next;
//     }
//   }
//   return dummy;
// };


// var removeElements = function(head, val) {
//   const dummy = new ListNode(-1);
//   dummy.next = head;
//   head = dummy;
//
//   while (head.next !== null) {
//     if (head.next.val === val) {
//       head.next = head.next.next;
//     } else {
//       head = head.next;
//     }
//   }
//   return dummy.next;
// }

function removeElements(head, val) {
  const dummy = new ListNode(-1);
  dummy.next = head;
  head = dummy;

  while (head.next !== null) {
    if (head.next.val === val) {
      head.next = head.next.next
    } else {
      head = head.next;
    }
  }
  return dummy.next
}

let head = new ListNode(6);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(6);

console.log(removeElements(head, 6));
