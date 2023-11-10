/**
 * @read: https://leetcode.com/problems/contains-duplicate/
 */
// time: O(n*log(n)), space: O(1)
const containsDuplicate = function(nums) {
    // sort the array
    nums.sort((a,b) => a-b);
    for (let i=0;i<nums.length;i++) {
        if (nums[i] === nums[i+1]) {
            return true
        }
    }
    return false;
};

// time: O(n), space: O(n)
const containsDuplicate1 = function(nums) {
    const map = new Map()
    for (let i=0;i<nums.length;i++) {
        if (map.has(nums[i])) {
            return true
        }
        map.set(nums[i], true)
    }
    return false;
};