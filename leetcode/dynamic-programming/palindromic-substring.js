/**
 * https://leetcode.com/problems/palindromic-substrings/description/
 *
 * Given a string s, return the number of palindromic substrings in it.
 *
 * A string is a palindrome when it reads the same backward as forward.
 *
 * A substring is a contiguous sequence of characters within the string.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 * Example 2:
 *
 * Input: s = "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 */

/**
 * @param {string} s
 * @return {number}
 * Time: O(n^2) | Space: O(1)
 */
const countSubstrings = function (s) {
    // use expand from center approach
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // odd length
        count += countPali(s, i, i);
        // even length
        count += countPali(s, i, i + 1);
    }
    return count;
};

function countPali(s, left, right) {
    let count = 0
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    return count;
}