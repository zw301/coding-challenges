// Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
//
// Input: 1->2
// Output: false
// Example 2:
//
// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null) {
    return true;
  }

  // const dummy = new ListNode(0);
  // dummy.next = head;
  let fast = head.next;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let head2;

  if (slow.next !== null && slow.next.val === slow.val) {
    head2 = slow.next;

  }
  if (slow.next !== null && slow.next.val !== slow.val) {
    head2 = new ListNode(slow.label);
    head2.next = slow.next;
  }
  slow.next = null;

  let prev = null;
  while (head2 !== null) {
    let next = head2.next;
    head2.next = prev;
    prev = head2;
    head2 = next;
  }

  while (head !== null && head2 !== null) {
    if (head.val !== head2.val) {
      return false;
    }
    head = head.next;
    head2 = head2.next;
  }

  return head2 === null && head2 === null;
};
