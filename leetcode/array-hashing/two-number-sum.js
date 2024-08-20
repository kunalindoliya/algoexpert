/**
 * @read https://leetcode.com/problems/two-sum/
 */
// time: O(n), space: O(1)
const twoSum = function(nums, target) {
    let map = new Map()
    let result
    for (let i=0; i< nums.length; i++) {
        let diff = target - nums[i]
        if (map.has(diff)) {
            result = [i, map.get(diff)]
        }
        map.set(nums[i], i)
    }
    return result
};