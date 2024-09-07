/**
 * @read: https://leetcode.com/problems/binary-search/description/
 *
 * Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */
// Time: O(log n) because of sorting
const search = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        // find the median
        const median = Math.floor((left + right) / 2);
        if (nums[median] === target) {
            return median;
        } else if (target < nums[median]) {
            right = median - 1
        } else {
            left = median + 1
        }
    }
    return -1
};
