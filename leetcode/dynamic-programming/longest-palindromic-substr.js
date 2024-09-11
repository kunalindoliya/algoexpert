/**
 * Given a string s, return the longest
 * palindromic
 *
 * substring
 *  in s.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * Example 2:
 *
 * Input: s = "cbbd"
 * Output: "bb"
 */



/**
 * @param {string} s
 * @return {string}
 * Time: O(n^2): Space: O(1)
 */
const longestPalindrome = function (s) {
    let res = '';
    let longest = 0;
    for (i = 0; i < s.length; i++) {
        // odd length
        let left = i, right = i;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > longest) {
                res = s.substring(left, right + 1);
                longest = right - left + 1
            }
            left -= 1;
            right += 1;
        }
        // even length
        left = i;  right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > longest) {
                res = s.substring(left, right + 1);
                longest = right - left + 1
            }
            left -= 1;
            right += 1;
        }
    }
    return res;
};