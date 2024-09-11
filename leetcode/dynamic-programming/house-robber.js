/**
 * @read: https://leetcode.com/problems/house-robber/description/
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * Total amount you can rob = 1 + 3 = 4.
 * Example 2:
 *
 * Input: nums = [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * Time: O(2^n)
 */
const rob = function (nums) {
    function dfs(i) {
        if (i === 0) {
            return nums[i];
        }
        if (i < 0) {
            return 0;
        }
        // pick the ith element
        let pick = nums[i] + dfs(i - 2);
        let notPick = 0 + dfs(i - 1);
        return Math.max(pick, notPick);
    }

    return dfs(nums.length - 1);
};

console.log(rob([1, 2, 3, 1]))

/**
 * Memoization
 * @param nums
 * @return {*|number|number}
 * Time: O(n) | Space: O(n)
 */
const rob = function (nums) {
    const dp = new Array(nums.length).fill(-1);

    function dfs(i) {
        if (i === 0) {
            return nums[i];
        }
        if (i < 0) {
            return 0;
        }
        if (dp[i] !== -1) {
            return dp[i];
        }
        // pick the ith element
        let pick = nums[i] + dfs(i - 2);
        let notPick = 0 + dfs(i - 1);
        return dp[i] = Math.max(pick, notPick);
    }

    return dfs(nums.length - 1);
};

/**
 * Tabulations approach
 * @param nums
 * Time: O(n), Space: O(n) without recursion
 */
const rob = function (nums) {
    const dp = new Array(nums.length);
    dp[0] = nums[0]; // base case
    for (let i = 1; i < nums.length; i++) {
        // Calculate the maximum value when picking the current element
        let pick = nums[i];
        if (i > 1) {
            pick += dp[i - 2];
        }
        const notPick = dp[i - 1];
        dp[i] = Math.max(pick, notPick);
    }
    return dp[nums.length - 1];
}

/**
 * Optimal approach
 * Time: O(n) | Space: O(1)
 * @param nums
 * @return {number}
 */
const rob = function (nums) {
    let prev = nums[0], prev2 = 0;
    for (let i = 1; i < nums.length; i++) {
        let pick = nums[i];
        if (i > 1) {
           pick += prev2;
        }

        // Calculate the maximum value when not picking the current element
        const nonPick = prev;
        // Calculate the current maximum value and update prev and prev2
        const cur_i = Math.max(pick, nonPick);
        prev2 = prev;
        prev = cur_i;
    }
    return prev;
}