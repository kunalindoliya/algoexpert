/**
 * @read: https://leetcode.com/problems/min-cost-climbing-stairs/description/
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 *
 * You can either start from the step with index 0, or the step with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
 *
 *
 *
 * Example 1:
 *
 * Input: cost = [10,15,20]
 * Output: 15
 * Explanation: You will start at index 1.
 * - Pay 15 and climb two steps to reach the top.
 * The total cost is 15.
 */

/**
 * DP - Top Down
 * Hash Map - Memoization
 * Time O(N) | Space O(N)
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
    const memo = new Map();

    function dfs(i) {
        if (i <= 1) {
            // because we can start with either 0 or 1 index, so the cost there would be 0;
            return 0;
        }
        if (memo.has(i)) {
            return memo.get(i);
        }
        const [prev, prevPrev] = [(i - 1), (i - 2)];
        const downOne = dfs(prev) + cost[prev];        /* Time O(N) | Space O(N) */
        const downTwo = dfs(prevPrev) + cost[prevPrev];/* Time O(N) | Space O(N) */

        memo.set(i, Math.min(downOne, downTwo));

        return memo.get(i);
    }

    return dfs(cost.length);
};

/**
 * DP - Bottom Up
 * Array - Tabulation
 * Time O(N) | Space O(N)
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
    const tabu = new Array(cost.length + 1).fill(0);

    for (let i = 2; i < tabu.length; i++) {
        const [prev, prevPrev] = [(i - 1), (i - 2)];
        const downOne = tabu[prev] + cost[prev];
        const downTwo = tabu[prevPrev] + cost[prevPrev];

        tabu[i] = Math.min(downOne, downTwo);
    }

    return tabu[tabu.length - 1];
}

/**
 * DP - Top Down
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
    // the cost of reaching the top from itself will be 0 so we will keep it
    cost.push(0);
    // traverse the loop in reverse
    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] += Math.min(cost[i+1], cost[i+2]);
    }
    return Math.min(cost[0], cost[1]);
}

