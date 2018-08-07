// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
//
// You may assume that the intervals were initially sorted according to their start times.
//
// Example 1:
//
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:
//
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  if (intervals === null || intervals.length === 0) {
    return [newInterval];
  }

  intervals.push(newInterval);
  intervals.sort((a, b) => {
    return a.start - b.start;
  });


  const result = [];
  result.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start <= result[result.length - 1].end) {
      let interval = result.pop();
      interval.end = Math.max(interval.end, intervals[i].end);
      result.push(interval);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
};

// nlogn
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a.start - b.start);

    const result = [];
    result.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        let last = result[result.length - 1];
        let curr = intervals[i];
        if (last.end >= curr.start) {
            last.end = Math.max(last.end, curr.end);
        } else {
            result.push(curr);
        }
    }

    return result;
};


// n
var insert = function(intervals, newInterval) {
  if (intervals === null || newInterval === null) {
    return intervals;
  }

  const result = [];
  let pos = 0;
  for (let i = 0; i < intervals.length; i++) {
    let curr = intervals[i];
    if (curr.end < newInterval.start) {
      result.push(curr);
      pos++;
    } else if (curr.start > newInterval.end) {
      result.push(curr);
    } else {
      newInterval.start = Math.min(curr.start, newInterval.start);
      newInterval.end = Math.max(curr.end, newInterval.end);
    }
  }
  result.splice(pos, 0, newInterval);

  return result;
};

let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
let newInterval = [4,8];

console.log(insert(intervals, newInterval));
