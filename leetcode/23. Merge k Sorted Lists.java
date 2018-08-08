//
// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
//
// Example:
//
// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
  public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) {
      return null;
    }
    PriorityQueue<ListNode> heap = new PriorityQueue<ListNode>(new Comparator<ListNode>(){
      public int compare(ListNode x, ListNode y) {
        return x.val - y.val;
      }
    });

    for (int i = 0; i < lists.length; i++) {
      if (lists[i] != null) {
        heap.offer(lists[i]);
      }
    }
    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;

    while (!heap.isEmpty()) {
      ListNode node = heap.poll();
      if (node.next != null) {
        heap.offer(node.next);
      }
      curr.next = node;
      curr = node;
    }

    return dummy.next;
  }
}
