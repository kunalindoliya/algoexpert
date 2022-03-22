/*
 Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == Given Sum.
 Notice that the solution set must not contain duplicate triplets.
 Input: array = {12, 3, 4, 1, 6, 9}, sum = 24;
 Output: 12, 3, 9

 Input: nums = [-1,0,1,2,-1,-4]
 Output: [[-1,-1,2],[-1,0,1]]
 */
/*Traverse the array and fix the first element of the triplet.
 Now use the Two Pointers algorithm to find if there is a pair whose sum is equal to x – array[i].
 Two pointers algorithm take linear time so it is better than a nested loop.
 */

// two pointer technique by fixing a number
// Time: O(n^2), Space: O(n)
function threeNumberSum(array, sum) {
    // sort the array
    array.sort((a, b) => a - b)
    let result = []
    let current = 0
    while (current < array.length - 2) {
        // avoid duplicate
        let left = current + 1
        let right = array.length - 1
        while (left < right) {
            let total = array[current] + array[left] + array[right]
            if (total === sum) {
                result.push([array[current], array[left], array[right]])
                while (array[left] === array[left + 1]) left++;
                while (array[right] === array[right - 1]) right--;
                left++;
                right--;
            } else if (total < sum) {
                left++
            } else {
                right--
            }
        }
        while (array[current + 1] === array[current]) current++;
        current++
    }
    return result
}

function test() {
    let array = [-1, 0, 1, 2, -1, -4], sum = 0
    //let array = [0,0,0,0], sum = 0
    console.log(threeNumberSum(array, sum))
}

test()
