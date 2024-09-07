/**
 * @read: https://leetcode.com/problems/generate-parentheses/description/
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * Example 2:
 *
 * Input: n = 1
 * Output: ["()"]
 */
 // it's a backtracking problem

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    // only add ( if open < n
    // only add ) if close < open
    // append in result of open === closed === n
    let stack = [], res = [];

    function backtrack(open, close) {
        if (open === n && close === n) {
            res.push(stack.join(""));
            return;
        }
        if (open < n) {
            stack.push('(');
            backtrack(open + 1, close);
            // pop from stack also
            stack.pop();
        }
        if (close < open) {
            stack.push(')');
            backtrack(open, close + 1);
            stack.pop();
        }
    }
    backtrack(0, 0);
    return res;
};
generateParenthesis(3)
