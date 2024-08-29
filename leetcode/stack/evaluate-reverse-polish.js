/**
 * @read: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    let stack = [];
    let ops = ['+', '-', '*', '/'];
    for (let char of tokens) {
        if (ops.includes(char)) {
            let a = stack.pop();
            let b = stack.pop();
            let result;
            switch (char) {
                case '+':
                    result = b + a;
                    stack.push(result);
                    break;
                case '-':
                    result = b - a;
                    stack.push(result);
                    break;
                case '*':
                    result = b * a;
                    stack.push(result);
                    break;
                case '/':
                    result = Math.trunc(b / a);
                    stack.push(result);
                    break;
            }
        } else {
            stack.push(parseInt(char));
        }
    }
    return stack.pop();
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))