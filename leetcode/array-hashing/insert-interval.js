/**
 * @read: https://leetcode.com/problems/insert-interval/
 */

// time: O(n), space: O(n)
const insert = function (intervals, newInterval) {
    let [start, end] = newInterval;
    let res = []
    for (let [i, [currStart, currEnd]] of intervals.entries()) {
        // if new interval is not overlapping can be added on first
        if (end < currStart) {
            res.push([start, end]);
            res.push(...intervals.slice(i));
            return res;
        } else if (start > currEnd) {
            // not overlapping with the current interval so push current interval
            res.push([currStart, currEnd])
        } else {
            // merge the interval
            start = Math.min(start, currStart);
            end = Math.max(end, currEnd);
        }
    }
    // always insert the merged interval if first condition did not become true
    res.push([start, end]);
    return res;
};