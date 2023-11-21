/***
 * @read: https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid
        }
        // left sorted portion
        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target < nums[mid]) {
                // search in left part
                end = mid - 1;
            } else {
                start = mid + 1
            }
        } else {
            // right sorted portion
            if (target > nums[mid] && target <= nums[end]) {
                // search in right part
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1;
};