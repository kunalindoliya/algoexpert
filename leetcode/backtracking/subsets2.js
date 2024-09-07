/**
 * @read: https://leetcode.com/problems/subsets-ii/
 * Given an integer array nums that may contain duplicates, return all possible
 * subsets
 *  (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * Example 2:
 *
 * Input: nums = [0]
 * Output: [[],[0]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time: O(n * 2^n)
const subsetsWithDup = function (nums) {
    // two choices we have either include the number or not include the number
    const result = [];
    const subset = [];
    // to skip the duplicate numbers while incrementing
    nums.sort((a, b) => a - b);

    function dfs(index) {
        if (index >= nums.length) {
            result.push([...subset]);
            return;
        }
        // decision to include nums[i]
        subset.push(nums[index]);
        dfs(index + 1);

        // decision to not include nums[i]
        subset.pop();
        while ((index + 1) < nums.length && nums[index] === nums[index + 1]) {
            index += 1;
        }
        dfs(index + 1);
    }

    dfs(0);
    return result;
};