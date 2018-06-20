// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
//
// Return a deep copy of the list.
/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  const map = new Map();

  let curr = head;
  while (curr !== null) {
    map.set(curr, new RandomListNode(curr.label));
    curr = curr.next;
  }

  curr = head;
  while (curr !== null) {
    let newListNode = map.get(curr);
    newListNode.next = map.get(curr.next);
    // newListNode.random = map.get(curr.random);
    curr = curr.next
  }

  curr = head;
  while (curr !== null) {
    let newListNode = map.get(curr);
    newListNode.random = map.get(curr.random);
    curr = curr.next
  }

  return map.get(head);
};

var copyRandomList = function(head) {
  let curr = head;
  while (curr !== null) {
    let copy = new RandomListNode(curr.label);
    copy.next = curr.next;
    curr.next = copy;
    curr = copy.next;
  }

  curr = head;
  while (curr !== null) {
    let copy = new RandomListNode(curr.label);
    if (curr.random !== null) {
      copy.random = curr.random.next;
    }
    curr = copy.next;
  }

  curr = head;
  const dummy = new RandomListNode(0);
  let currCopy = dummy;
  while (curr !== null) {
    let copy = curr.next;
    currCopy.next = copy;
    currCopy = copy;
    curr.next = copy.next;
    curr = copy.next;
  }

  return dummy.next;
}
