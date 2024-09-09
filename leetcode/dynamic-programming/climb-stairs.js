/**
 * @read: https://leetcode.com/problems/climbing-stairs/description/
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 *
 *
 * Example 1:
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * Example 2:
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */

// solutions: https://github.com/neetcode-gh/leetcode/blob/main/javascript/0070-climbing-stairs.js

/**
 * @param {number} n
 * @return {number}
 * Recursive solution, Time: O(2^n)
 */
const climbStairs = function (n) {
    function recursive(step) {
        if (step === 0) {
            return 1;
        }
        if (step === 1) {
            return 1;
        }
        return recursive(step - 1) + recursive(step - 2);
    }

    return recursive(n);
};

/**
 * @param {number} n
 * @return {number}
 * Using memoization Time: O(n)
 */
const climbStairs2 = function (n) {
    const dp = new Array(n + 1).fill(-1);

    function recursive(step) {
        if (step === 0) {
            return 0;
        }
        if (step === 1) {
            return 1;
        }
        if (dp[step] !== -1) {
            return dp[step];
        }
        return dp[step] = recursive(step - 1) + recursive(step - 2);
    }

    recursive(n);
    return dp[n];
};

console.log(climbStairs2(5))

const climbStairs3 = function (n) {
    let count = 0;

    function dfs(step) {
        if (step === n) {
            count += 1;
            return
        }
        if (step > n) {
            return;
        }
        // choose 1
        dfs(step + 1);
        // choose 2
        dfs(step + 2);
    }

    dfs(0);
    return count;
};

console.log(climbStairs3(2))

/**
 * DP - Fibonacci Number
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
const climbStairs4 = function (n) {
    //basecase
    if (n === 1) {
        return 1
    }
    let one = 1, two = 2;
    let counter = 3;
    while (counter <= n) {
       let temp = one + two;
       one = two;
       two = temp;
    }
    return two;
}

