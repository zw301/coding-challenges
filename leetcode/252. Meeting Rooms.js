// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.
//
// Example 1:
//
// Input: [[0,30],[5,10],[15,20]]
// Output: false
// Example 2:
//
// Input: [[7,10],[2,4]]
// Output: true
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort(compareTo);

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start < intervals[i - 1].end) {
            return false;
        }
    }
    return true;
};

function compareTo(arr1, arr2) {
    if (arr1.start === arr2.start) {
        return arr1.end > arr2.end ? 1 : -1;
    }

    return arr1.start > arr2.start ? 1 : -1;
}
