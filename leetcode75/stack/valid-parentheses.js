/**
 * @read: https://leetcode.com/problems/valid-parentheses/
 */

/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const closeToOpenMap = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    for (const char of s) {
        // pop if close bracked arrive by checking the last element is equivalent open bracket or not
        if (char in closeToOpenMap) {
            if (stack.pop() !== closeToOpenMap[char]) {
                return false
            }
        } else {
            stack.push(char);
        }

    }
    return stack.length === 0;
};

console.log(isValid("()[]{}"))