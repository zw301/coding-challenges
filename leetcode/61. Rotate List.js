// Given a linked list, rotate the list to the right by k places, where k is non-negative.
//
// Example 1:
//
// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
// Example 2:
//
// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL
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
var rotateRight = function(head, k) {

    const dummy = new ListNode(0);
    dummy.next = head;

    let len = 0;
    let curr = head;
    while (curr !== null) {
        curr = curr.next;
        len += 1;
    }
    k = k % len;

    while (k > 0) {
        let node = deleteLast(head);
        node.next = dummy.next;
        dummy.next = node;

        k -= 1;
    }

    return dummy.next;
};

const deleteLast = function(head) {
    if (head.next == null) {
        return head;
    }

    let curr = head.next;
    let prev = head;
    while (curr.next !== null) {
        prev = prev.next;
        curr = curr.next;
    }
    prev.next = null;
    return curr;
}


///////////////////////////////////////////////
