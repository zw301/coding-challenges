// Given a collection of intervals, merge all overlapping intervals.
//
// Example 1:
//
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:
//
// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (intervals === null || intervals.length <= 1) {
    return intervals;
  }

  intervals.sort(compareTo);
  const result = [];
  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start <= result[result.length - 1].end) {
      const interval = result.pop();
      interval.end = Math.max(intervals[i].end, interval.end);
      result.push(interval);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
};
function compareTo(a, b) {
  return a.start - b.start;
}


// update 02/08
var merge = function(intervals) {
    if (intervals === null || intervals.length === 0) {
        return intervals;
    }

    intervals.sort((a, b) => a.start - b.start);

    const result = [];
    result.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        let last = result[result.length - 1];
        if (last.end >= curr.start) {
            last.end = Math.max(last.end, curr.end);
        } else {
            result.push(curr);
        }
    }
    return result;
};
