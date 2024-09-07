/**
 * @read: https://leetcode.com/problems/permutations/
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * Example 1:
 *
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * Example 2:
 *
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * Example 3:
 *
 * Input: nums = [1]
 * Output: [[1]]
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time: O(n! * n) | Space: O(n)
const permute = function (nums) {
    const result = [];
    const freq = new Set();

    function backtrack(ds) {
        // base case
        if (ds.length === nums.length) {
            result.push(ds);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!freq.has(nums[i])) {
                // call recursion
                freq.add(nums[i]);
                ds.push(nums[i]);
                backtrack(ds);
                // backtrack
                ds.pop();
                freq.delete(nums[i]);
            }
        }
    }

    backtrack([]);
    return result;
};

// solution 2 without extra space
/**
 *
 * @param {number[]}nums
 */
// Time: O(n! * n)
const permute = function (nums) {
    const res = [];

    function backtrack(startIndex) {
        if (startIndex === nums.length) {
            res.push([...nums]);
            return;
        }
        // loop for all possible choices
        for (let i = startIndex; i < nums.length; i++) {
            // swap the positions
            [nums[startIndex], nums[i]] = [nums[i], nums[startIndex]];
            backtrack(startIndex + 1);
            // backtrack
            [nums[startIndex], nums[i]] = [nums[i], nums[startIndex]];
        }
    }
    backtrack(0)
    return res;
}
