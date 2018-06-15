// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
//
// Example 1:
//
// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2
// Example 2:
//
// Input: [[7,10],[2,4]]
// Output: 1
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (intervals === null || interval.length === 0) {
      return 0;
    }

    const startArr = [];
    const endArr = [];

    for (let i = 0; i < intervals.length; i++) {
      startArr.push(intervals[i].start);
      endArr.push(intervals[i].end);
    }

    startArr.sort((a, b) => (a - b));
    endArr.sort((a, b) => (a - b));

    let result = 0;
    let curr = 0;

    let j = 0;
    for (var i = 0; i < startArr.length; i++) {
      if (startArr[i] < endArr[j]) {
        curr++;
        result = Math.max(result, curr);
      } else {
        curr--;
        j++;
        if(j !== endArr.length - 1) {
            i--;
        }
      }
    }
    return result;
};
