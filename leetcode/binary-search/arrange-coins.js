/**
 * @read: https://leetcode.com/problems/arranging-coins/description/
 * You have n coins and you want to build a staircase with these coins.
 *The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
 *
 * Given the integer n, return the number of complete rows of the staircase you will build.
 * Input: n = 5
 * Output: 2
 * Explanation: Because the 3rd row is incomplete, we return 2.
 */

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
    // let count = 0;
    // while (n > count) {
    //     count++;
    //     n = n - count;
    // }
    // return count;
    // use binary search approach
    let left = 1;
    let right = n
    while (left <=right) {
        const mid = Math.floor((left + right)/2);
        const numCoins = (mid * (mid + 1)) / 2;

        if (numCoins === n) {
            // we found an exact solution; return this
            return mid;
        } else if (numCoins < n) {
            // need more levels
            left = mid + 1;
        } else {
            // need fewer levels
            right = mid - 1;
        }
    }
    // If we get this far, left is at the smallest value of k that will hold > n coins.
    // We also know that k levels won't hold EXACTLY n coins.
    // If it was exact, we woudl have returned early from the while loop.
    // Therefore, we know that the last complete level is not left but left - 1
    return left - 1;
};