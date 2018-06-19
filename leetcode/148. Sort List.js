// Sort a linked list in O(n log n) time using constant space complexity.
//
// Example 1:
//
// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:
//
// Input: -1->5->3->4->0
// Output: -1->0->3->4->5
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

 // merge sort: 把链表从中间劈开，sort左边，sort右边。然后merge。
var sortList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let mid = findMid(head);
  let right = sortList(mid.next);
  mid.next = null;
  let left = sortList(head);

  return merge(left, right);
};

function findMid(head) {
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function merge(l1, l2) {
  const dummy = new ListNode(0);

  let curr = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (l1 !== null) {
    curr.next = l1;
  }
  if (l2 !== null) {
    curr.next = l2;
  }
  return dummy.next;
}

// quicksort
// 把链表分成三份： 比head.val小的， 比head.val大的， 和head.val相等的
// 把前面两个quicksort，然后把三个链表接起来

var sortList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const lessDummy = new ListNode(0);
  let less = lessDummy;

  const greaterDummy = new ListNode(0);
  let greater = greaterDummy;

  let equal = head;

  let curr = head.next;

  while ( curr !== null) {
    if (curr.val < head.val) {
      less.next = curr;
      less = less.next;
    } else if (curr.val > head.val) {
      greater.next = curr;
      greater = greater.next;
    } else {
      equal.next = curr;
      equal = equal.next;
    }
    curr = curr.next;
  }

  less.next = null;
  greater.next = null;
  equal.next = null;

  lessDummy.next = sortList(lessDummy.next);
  greaterDummy.next = sortList(greaterDummy.next);

  const dummy = lessDummy;
  curr = dummy;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = head;
  equal.next = greaterDummy.next;

  return dummy.next;
}


var sortList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const lessDummy = new ListNode(0);
  let less = lessDummy;

  const greaterDummy = new ListNode(0);
  let greater = greaterDummy;

  let equal = head;

  let curr = head.next;

  while (curr !== null) {
    if (curr.val < head.val) {
      less.next = curr;
      less = less.next;
    } else if (curr.val > head.val) {
      greater.next = curr;
      greater = greater.next;
    } else {
      equal.next = curr;
      equal = equal.next;
    }
    curr = curr.next;
  }
  less.next = null;
  greater.next = null;
  equal.next = null;

  lessDummy.next = sortList(lessDummy.next);
  greaterDummy.next = sortList(greaterDummy.next);

  const dummy = lessDummy;
  curr = dummy;

  while (curr.next !== null) {
    curr = curr.next;
  }

  curr.next = head;
  equal.next = greaterDummy.next;

  return dummy.next;
}
