/**
 * @read: https://leetcode.com/problems/subsets/description/
 * Given an integer array nums of unique elements, return all possible
 * subsets
 *  (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
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
const subsets = function (nums) {
    // two choices we have either include the number or not include the number
    const result = [];
    const subset = [];
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
        dfs(index + 1);
    }
    dfs(0);
    return result;
};