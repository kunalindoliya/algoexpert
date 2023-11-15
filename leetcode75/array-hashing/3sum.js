/**
 * @read: https://leetcode.com/problems/3sum/
 */
// time: O(n^2), space: O(1)/O(n)
const threeSum = function (nums) {
    // sort the array
    nums.sort((a, b) => a - b);
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        if (curr > 0) {
            break;
        }
        if (i > 0 && curr === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = curr + nums[left] + nums[right]
            if (sum === 0) {
                result.push([curr, nums[left], nums[right]]);
                left++;
                right--;
                while (nums[left] === nums[left-1] && left < right) {
                    left++;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result
};