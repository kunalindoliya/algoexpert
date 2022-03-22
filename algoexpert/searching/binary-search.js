/* Write a function that takes in a sorted array of integers as well as a target integer.
The function should use the Binary Search algorithm to nd if the target number is contained in the array and
 return its index if it is, otherwise -1.
 Sample input: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33
 Sample output: 3
*/

/* Approach: The array must be sorted for binary search.
find the middle index and floor round the value and check the middle index value with the target
 value and move the left and right pointer accordingly
*/
// Time: O(logN), Space: O(1)
function binarySearch(arr, target) {
    let left = 0, right = arr.length, result = -1
    while (left <= right) {
        const mid = Math.floor((left + right)/2)
        if (target == arr[mid]) {
            result = mid
            break
        } else if (target < arr[mid])
            right = mid - 1
        else
            left = mid + 1
    }
    return result
}

function test() {
    const input = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], target = 33
    //const input = [5], target = 5
    console.log(binarySearch(input, target))
}
test()
