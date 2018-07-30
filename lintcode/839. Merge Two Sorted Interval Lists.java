// 839. Merge Two Sorted Interval Lists
// Merge two sorted (ascending) lists of interval and return it as a new sorted list. The new sorted list should be made by splicing together the intervals of the two lists and sorted in ascending order.
//
// Example
// Given list1 = [(1,2),(3,4)] and list2 = [(2,3),(5,6)], return [(1,4),(5,6)].
/**
 * Definition of Interval:
 * public classs Interval {
 *     int start, end;
 *     Interval(int start, int end) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 */

public class Solution {
    /**
     * @param list1: one of the given list
     * @param list2: another list
     * @return: the new sorted list of interval
     */
    public List<Interval> mergeTwoInterval(List<Interval> list1, List<Interval> list2) {
        // write your code here
        List<Interval> results = new ArrayList<>();
        if (list1 == null || list2 == null) {
            return results;
        }
        Interval last = null;
        Interval curr = null;
        int i = 0;
        int j = 0;

        while (i < list1.size() && j < list2.size()) {
            if (list1.get(i).start < list2.get(j).start) {
                curr = list1.get(i);
                i++;
            } else {
                curr = list2.get(j);
                j++;
            }
            last = merge(results, last, curr);
        }
        while (i < list1.size()) {
            last = merge(results, last, list1.get(i));
            i++;
        }
        while (j < list2.size()) {
            last = merge(results, last, list2.get(j));
            j++;
        }
        if (last != null) {
            results.add(last);
        }
        return results;
    }
    private Interval merge(List<Interval> results, Interval last, Interval curr) {
        if (last == null) {
            return curr;
        }
        if (curr.start > last.end) {
            results.add(last);
            return curr;
        }

        last.end = Math.max(last.end, curr.end);
        return last;
    }
}
