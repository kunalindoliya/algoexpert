/**
 * @read: https://leetcode.com/problems/non-overlapping-intervals/description/
 */

// Time: O(n*log(n), Space: O(1)
const eraseOverlapIntervals = function (intervals) {
    // sort based on start time
    intervals.sort((a, b) => a[0] - b[0]);
    let prevEnd = intervals[0][1];
    let count = 0;
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        if (curr[0] >= prevEnd) {
            prevEnd = curr[1] // update the end with the current interval end
        } else {
            count++;
            prevEnd = Math.min(prevEnd, curr[1]);
            // update the end with minimum of current end and the previous end
        }
    }
    return count;
};