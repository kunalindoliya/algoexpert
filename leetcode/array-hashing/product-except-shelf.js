/**
 * @read: https://leetcode.com/problems/product-of-array-except-self/
 */

// time: O(n), space: O(1)
// prefix postfix approach
const productExceptSelf = function(nums) {
    const result = [];
    let prefix = 1;
    let postfix = 1;

    // Loop through the input array - for each position,
    // the result array should equal the prefix tracker.

    // Then, update the prefix tracker to be the product of itself,
    // multiplied by the input value at the position.
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    /**
     * loop backward the array from length -2 because last element will already be correct because of prefix
     * calculate the postfix by multiplying it with post value from current position
     * result at current position will be product of postfix with the result's current value
     */
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        result[i] *= postfix;
    }

    return result;
};