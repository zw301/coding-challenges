// 839. Merge Two Sorted Interval Lists
// Merge two sorted (ascending) lists of interval and return it as a new sorted list. The new sorted list should be made by splicing together the intervals of the two lists and sorted in ascending order.
//
// Example
// Given list1 = [(1,2),(3,4)] and list2 = [(2,3),(5,6)], return [(1,4),(5,6)].
//
// Notice
// The intervals in the given list do not overlap.
// The intervals in different lists may overlap.

/**
 * @param list1: one of the given list
 * @param list2: another list
 * @return: the new sorted list of interval
 */
const mergeTwoInterval = function (list1, list2) {
  const result = [];

  let last = null;
  let curr = null;
  let i = 0;
  let j = 0;

  while (i < list1.length && j < list2.length) {
    if (list1[i].start < list2[j].start) {
      curr = list1[i];
      i++;
    } else {
      curr = list2[j];
      j++;
    }
    last = merge(result, last, curr);
  }

  while (i < list1.length) {
    last = merge(result, last, list1[i]);
    i++;
  }

  while (j < list2.length) {
    last = merge(result, last, list2[j]);
    j++;
  }
  if (last !== null) {
    result.push(last);
  }
  return result;
}

const merge = function (result, last, curr) {
  if (last == null) {
    return curr;
  }
  if (last.end < curr.start) {
    result.push(last);
    return curr;
  }
  last.end = Math.max(last.end, curr.end);
  return last;
}
