/**
 * @read: https://leetcode.com/problems/insert-interval/
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// Time: O(n), space: O(n)
const insert = function (intervals, newInterval) {
    const result = [];
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i]
        // if interval can be added in start
        if (newInterval[1] < interval[0]) {
            result.push(newInterval, ...intervals.slice(i));
            return result;
        } else if (newInterval[0] > interval[1]) {
            // that means it can be added after the current interval
            result.push(interval);
        } else {
            // means overlapping now merger the intervals but not add yet
            newInterval = [Math.min(newInterval[0], interval[0]), Math.max(newInterval[1], interval[1])];
        }
    }
    // make sure we add the interval in last
    result.push(newInterval);
    return result;
};

console.log(insert([[1, 3], [6, 9]], [2, 5]))