/**
 * @read: https://leetcode.com/problems/combination-sum-ii/description/
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 *
 *
 * Example 1:
 *
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// Time: O(n * 2^n)
const combinationSum2 = function(candidates, target) {
    const result = [];
    const comb = [];
    // sort candidates first
    candidates.sort((a, b) => a - b);

    function dfs(i, total) {
        if (total === target) {
            result.push([...comb]);
            return;
        }

        if (total > target || i >= candidates.length) {
            return;
        }
        // choose ith candidates
        comb.push(candidates[i]);
        dfs(i + 1, total + candidates[i]);
        // backtrack
        comb.pop();
        while ((i+1) < candidates.length && candidates[i] === candidates[i+1]) {
            i +=1;
        }
        dfs(i + 1, total);
    }
    dfs(0, 0);
    return result;
};