/**
 * @read: https://neetcode.io/problems/meeting-schedule-ii
 *
 * Meeting Schedule II
 * Solved
 * Given an array of meeting time interval objects consisting of start and end times
 * [[start_1,end_1],[start_2,end_2],...] (start_i < end_i),
 * find the minimum number of days required to schedule all meetings without any conflicts.
 *
 * Example 1:
 *
 * Input: intervals = [(0,40),(5,10),(15,20)]
 *
 * Output: 2
 * Explanation:
 * day1: (0,40)
 * day2: (5,10),(15,20)
 *
 * Example 2:
 *
 * Input: intervals = [(4,9)]
 *
 * Output: 1
 * Note:
 *
 * (0,8),(8,10) is not considered a conflict at 8
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
