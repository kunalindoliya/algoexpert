/**
 * @read: https://neetcode.io/problems/meeting-schedule
 */

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

// Time: O(nlog(n))
class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // sort based on the start time
        intervals.sort((a,b) => a.start - b.start); // nlogn
        for (let i=1; i<intervals.length;i++) {
            let prev = intervals[i-1];
            let curr = intervals[i];
            if (prev.end > curr.start) {
                return false;
            }
        }
        return true
    }
}
