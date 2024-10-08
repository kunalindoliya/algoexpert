/**
 * @read: https://leetcode.com/problems/min-stack/
 * @constructor
 */


var MinStack = function () {
    this.stack = [];
    this.minVal = []; // have another stack for min value
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    const minVal = Math.min(this.getMin() ?? val , val);
    this.minVal.push(minVal);
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minVal.pop();
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minVal[this.minVal.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */