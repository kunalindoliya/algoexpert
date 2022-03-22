/*Write a program that, given an array A[] of n numbers and another number x,
 determines whether or not there exist two elements in array whose sum is exactly x.

 Input: arr[] = {0, -1, 2, -3, 1}
 sum = -2
 Output: -3, 1
 */
/*Once the array is sorted the two pointers can be taken which mark the beginning and end of the array respectively.
 If the sum is greater than the sum of those two elements, shift the right pointer to decrease the value of
 required sum and if the sum is lesser than the required value, shift the left pointer to increase the value of the required sum.
 */
// user two pointer approach for optimal solution
// Time : O(n) Space: O(1)

function twoNumberSum(arr, x) {
    //sort the array first with low complex sorting eg quick sort or heap sort
    arr.sort((a, b) => a - b)
    let leftPointer = 0
    let rightPointer = arr.length - 1

    while (leftPointer < rightPointer) {
        let sum = arr[leftPointer] + arr[rightPointer]
        if (sum === x) {
            //return [arr[leftPointer], arr[rightPointer]]
            return [leftPointer, rightPointer]
        } else if (sum < x) {
            leftPointer++
        } else {
            rightPointer--
        }
    }
    return "No valid pair exist"
}

// Time: O(n), space: O(n)
function hashMethod(arr, x) {
    let map = new Map()
    let result
    for (let i = 0; i < arr.length; i++) {
        let diff = x - arr[i]
        if (map.has(diff)) {
            result = [arr[i], diff]
        }
        map.set(arr[i], true)
    }
    return result
}

function test() {
    //let arr = [0, -1, 2, -3, 1], x = -2
    let arr = [3, 2, 4], x = 6
    console.log(hashMethod(arr, x))
}

test()
