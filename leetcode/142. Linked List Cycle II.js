// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
//
// Note: Do not modify the linked list.
//
// Follow up:
// Can you solve it without using extra space?
var detectCycle = function(head) {
    if (head === null || head.next === null) {
        return null;
    }
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {

        fast = fast.next.next;
        slow = slow.next
        if (fast === slow) {
            while (head !== slow) {
                slow = slow.next;
                head = head.next;
            }
            return head;
        }
    }

    return null

};
