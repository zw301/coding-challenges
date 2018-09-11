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


// O(n) space
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
    if (map.has(curr.next)) {
      newListNode.next = map.get(curr.next);
    }
    if (map.has(curr.random)) {
      newListNode.random = map.get(curr.random);
    }
    curr = curr.next
  }

  return map.get(head);
};


///////////////////////
// No extra space & step by step
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    copyNext(head);
    copyRandom(head);
    return splitList(head);
};

function copyNext(node) {
    while (node !== null) {
        const newNode = new RandomListNode(node.label);
        newNode.next = node.next;
        node.next = newNode;

        node = node.next.next;
    }
}

function copyRandom(node) {
    while (node !== null) {
        if (node.random !== null) {
            node.next.random = node.random.next;
        }
        node = node.next.next;
    }
}

function splitList(head) {
    const newHead = head.next;

    while (head !== null) {
        let tmp = head.next;
        head.next = tmp.next;
        if (tmp.next !== null) {
            tmp.next = tmp.next.next;
        }
        head = head.next;
    }
    return newHead;
}



//////09.11
var copyRandomList = function(head) {
    if (head === null) {
        return head;
    }
    let curr = head;

    // copy node
    while (curr !== null) {
        const newNode = new RandomListNode(curr.label);
        newNode.next = curr.next;
        curr.next = newNode;

        curr = curr.next.next;
    }

    // copy random
    curr = head;
    while (curr !== null) {
        if (curr.random !== null && curr.next !== null) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    //split list
    const newHead = head.next;
    while (head !== null) {
        let tmp = head.next;
        head.next = tmp.next;
        if (tmp.next !== null) {
            tmp.next = tmp.next.next;
        }
        head = head.next;
    }
    return newHead;
};
