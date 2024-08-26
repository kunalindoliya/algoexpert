/**
 * @read: https://leetcode.com/problems/trapping-rain-water/description/
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
    // sol 1:  min(L, R) - H[i] where L and R are max height in left and max height in right for every position i
    // sol 2: use two pointers, shift the min of max heights.
    if (!height.length) {
        return 0;
    }
    let left = 0, right = height.length - 1;
    let maxLeft = height[left], maxRight = height[right];
    let result = 0;
    while (left < right) {
        if (maxLeft < maxRight) {
            left++;
            maxLeft = Math.max(maxLeft, height[left]);
            result += maxLeft - height[left];
        } else {
            right--;
            maxRight = Math.max(maxRight, height[right]);
            result += maxRight - height[right];
        }
    }
    return result;
};