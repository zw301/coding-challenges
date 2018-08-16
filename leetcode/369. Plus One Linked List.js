// Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.
//
// You may assume the integer do not contain any leading zero, except the number 0 itself.
//
// The digits are stored such that the most significant digit is at the head of the list.
//
// Example:
// Input:
// 1->2->3
//
// Output:
// 1->2->4

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
// O(1) space
var plusOne = function(head) {
  const dummy = new ListNode(0);
  dummy.next = head;

  let lastNotNine = dummy;
  let curr = head;

  while (curr !== null) {
    if (curr.val !== 9) {
      lastNotNine = curr;
    }
    curr = curr.next;
  }

  lastNotNine.val++;
  curr = lastNotNine.next;
  while (curr !== null) {
    curr.val = 0;
    curr = curr.next;
  }

  return dummy.val === 1 ? dummy : dummy.next;
};

// O(n) space
var plusOne = function(head) {
    if (head === null) {
        return new ListNode(1);
    }

    const stack = [];
    while (head !== null) {
        stack.push(head);
        head = head.next;
    }

    const dummy = new ListNode(0);

    let carry = 1;
    let last = stack.length;
    while (stack.length !== 0 || carry === 1) {
        let val = stack.length === 0 ? 0 : stack.pop().val;


        const newVal = val + carry;
        carry = Math.floor(newVal / 10);

        const newNode = new ListNode(newVal % 10);
        newNode.next = dummy.next;
        dummy.next = newNode;
    }

    return dummy.next;
};
