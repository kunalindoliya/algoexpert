/**
 * @read: https://neetcode.io/problems/meeting-schedule-ii
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

// Time: O(nlog(n)), space: O(n)
class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = [], end = [];
        for (let {start: startTime, end: endTime} of intervals) {
            start.push(startTime);
            end.push(endTime)
        }
        // sort
        start.sort((a,b) => a-b);
        end.sort((a,b) => a-b);
        // have a variable count which will keep track of no of meeting room at a time
        // increase the count when start time < end time
        let s=0,e=0,count=0,res = 0;
        while(s < intervals.length) {
            if (start[s] < end[e]) {
                s++;
                count++;
            } else {
                e++;
                count--;
            }
            res = Math.max(res, count);
        }
        return res;
    }
}
