/**
 * @read: https://leetcode.com/problems/decode-ways/description/
 * You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:
 *
 * "1" -> 'A'
 *
 * "2" -> 'B'
 *
 * ...
 *
 * "25" -> 'Y'
 *
 * "26" -> 'Z'
 * However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").
 *
 * For example, "11106" can be decoded into:
 *
 * "AAJF" with the grouping (1, 1, 10, 6)
 * "KJF" with the grouping (11, 10, 6)
 * The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
 * Note: there may be strings that are impossible to decode.
 *
 * Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.
 */

// waysToDecode[i] = waysToDecode[i-1] (if new single digit is valid) + waysToDecode[i-2] (if last 2 digits are valid)

/**
 * @param {string} s
 * @return {number}
 * Time: O(n) | space: O(n)
 */
const numDecodings = function (s) {
    let length = s.length;
    let dp = new Array(length + 1).fill(0);
    dp[0] = 1; // only one to decode a string of length 0, basically no way;
    dp[1] = s.charAt(0) === '0' ? 0 : 1; // if second digit is zero then we cannot decode it because no number can be formed by 0;

    for (let i = 2; i <= length; i++) {
        let oneDigit = parseInt(s.substring(i-1, i));
        let twoDigit = parseInt(s.substring(i-2, i));
        if (oneDigit >= 1) {
            dp[i] += dp[i-1];
        }
        if (twoDigit >=10 && twoDigit <= 26) {
            dp[i] += dp[i-2];
        }
    }
    return dp[length];
};

/**
 *
 * @param s{string}
 * @return {number}
 * Time: O(n)
 */
const numDecodings1 = function(s) {
    let prev = s.charAt(0) === '0' ? 0 : 1
    let prevPrev = 1
    for (let i = 2; i <= s.length; i++) {
        let oneDigit = parseInt(s.substring(i-1, i));
        let twoDigit = parseInt(s.substring(i-2, i));
        let temp = 0;
        if (oneDigit >= 1) {
            temp += prev
        }
        if (twoDigit >=10 && twoDigit <= 26) {
            temp += prevPrev;
        }
        prevPrev = prev;
        prev = temp;
    }
    return prev
}

console.log(numDecodings1('12'))