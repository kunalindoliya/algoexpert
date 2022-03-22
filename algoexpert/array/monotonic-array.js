/*
 An array is monotonic if it is either monotone increasing or monotone decreasing.
 An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].
 An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
 Return true if and only if the given array nums is monotonic
 Input: nums = [1,2,2,3]
 Output: true
 Input: nums = [6,5,4,4]
 Output: true
 Input: nums = [1,3,2]
 Output: false
 */
/*Assume that array is monotone increasing and decreasing. We just have to invalidate one of
 them by comparing adjacent elements */

// Time: O(n), Space: O(1)
function monotonicArray(array) {
    let isMonotoneIncreasing = true, isMonotoneDecreasing = true
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1])
            isMonotoneDecreasing = false
        if (array[i] < array[i - 1])
            isMonotoneIncreasing = false
    }
    return isMonotoneIncreasing || isMonotoneDecreasing
}

function test() {
    let array = [1, 3, 2]
    console.log(monotonicArray(array))
}

test()
