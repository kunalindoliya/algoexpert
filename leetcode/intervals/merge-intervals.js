/**
 * @read: https://leetcode.com/problems/merge-intervals/description/
 */

// Time: O(n*log(n), Space: O(1)
const merge = function (intervals) {
    // sort based on start time
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const currInterval = intervals[i];
        const mostRecentInterval = result[result.length - 1];
        if (currInterval[0] <= mostRecentInterval[1]) {
            // merge intervals
            mostRecentInterval[1] = Math.max(currInterval[1], mostRecentInterval[1]);
        } else {
            result.push(currInterval)
        }
    }
    return result;
};