/**
 * @read: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */

/**
 * @param {number[]} nums
 * Time O(log(N)) | Space O(1)
 * @return {number}
 */
const findMin = function(nums) {
    let start = 0, end = nums.length - 1
    let min = nums[start];
    while (start <= end) {
        // if array is already sorted
        if (nums[start] < nums[end]) {
            min = Math.min(nums[start], min);
            break;
        }
        let middle = Math.floor((start + end) / 2);
        min = Math.min(nums[middle], min);
        // if the middle value is >= to the leftmost value (means mid belongs to left part) then min will be in right part else in left part
        if (nums[middle] >= nums[start]) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    return min;
};