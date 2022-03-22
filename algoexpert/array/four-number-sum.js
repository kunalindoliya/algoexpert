/*
 Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 0 <= a, b, c, d < n
 a, b, c, and d are distinct.
 nums[a] + nums[b] + nums[c] + nums[d] == target
 You may return the answer in any order.

 Input: nums = [1,0,-1,0,-2,2], target = 0
 Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 Input: nums = [2,2,2,2,2], target = 8
 Output: [[2,2,2,2]]
 */
/*Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
 The function should nd all quadruplets in the array that sum up to the target sum and return a two-dimensional
 array of all these quadruplets in no particular order. If no four numbers sum up to the target sum, the function should return an empty array.
 Sample input: [7, 6, 4, -1, 1, 2], 16 Sample output: [[7, 6, 4, -1], [7, 6, 1, 2]]*/

/*We solve this as two sum problem when each sum constitute by a pair
 * the pair will be added when we are at the second value of the pair not on the first*/

/* Average:    O(n^2) time  | O(n^2) space
 Worst:      O(n^3) time  | O(n^2) space*/
function fourNumberSum(array, target) {
    let quadruplets = []
    let map = new Map()
    for (let i = 1; i < array.length - 1; i++) {
        // adding quadruplets
        for (let j = i + 1; j < array.length; j++) {
            let sum = array[i] + array[j]
            let diff = target - sum
            // check if diff is in map or not
            if (map.has(diff)) {
                // add pair of quadruplets
                for (let pair of map.get(diff)) {
                    quadruplets.push([pair[0], pair[1], array[i], array[j]])
                }
            }
        }
        // adding pair to the map. This is a reverse traversing operation to not add duplicates
        for (let k = 0; k < i; k++) {
            let sum = array[k] + array[i]
            let pair = [array[k], array[i]]
            if (map.has(sum)) {
                map.get(sum).push(pair)
            } else {
                let pairGroup = []
                pairGroup.push(pair)
                map.set(sum, pairGroup)
            }
        }
    }
    // remove duplicates from edge cases, for leet code
    /*let stringArray = quadruplets.map(JSON.stringify)
     let uniqueQuads = new Set(stringArray)
     quadruplets = Array.from(uniqueQuads, JSON.parse)*/
    return quadruplets

}

function test() {
    let array = [-5, 5, 4, -3, 0, 0, 4, -2], target = 4
    console.log(fourNumberSum(array, target))
}

test()
