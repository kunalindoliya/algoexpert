/**
 * @read: https://leetcode.com/problems/majority-element/
 */

// time: O(n), space: O(n)
const majorityElement = function(nums) {
    const map = new Map();
    let majority = nums[0]; // to handle array size of 1 0r 2
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
            if (map.get(num) > (nums.length/2)) {
                majority = num;
            }
        } else {
            map.set(num, 1)
        }
    }
    return majority;
};

// time: O(n), space: O(1)
// https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
const majorityElement = function(nums) {
    let number, count = 0;
    for (const num of nums) {
        if (count === 0) {
            number = num;
            count++
        } else if (number === num) {
            count++
        } else {
            count--
        }
    }
    return number
};