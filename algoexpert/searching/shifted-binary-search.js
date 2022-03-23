/*Write a function that takes in a sorted array of integers as well as a target integer.
 The caveat is that the numbers in the array have been shifted by some amount; in other words,
 they have been moved to the left or the right by one or more positions.
 For example, [1, 2, 3, 4] might become [3, 4, 1, 2].
 The function should use a variation of the Binary Search algorithm to nd if the target number is
 contained in the array and should return its index if it is, otherwise -1.

 Sample input: [45, 61, 71, 72, 73, 0, 1, 21, 33, 45], 33 Sample output: 8
 */
/* Approach: This is similar to binary search but we need to check which part is sorted. find
 the middle number and compare it with the left number and check whether the left part is sorted
  or not. if yes then check whether the targte number is less than middle and greater than left,
   if yes then target is in left half otherwise in right half. Vice versa for right side
*/
// Time: O(log(N)) , Space: O(1)
function shiftedBinarySearch(arr, target) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right)/2)
        if (arr[middle] === target) {
            return middle
        } else if (arr[left] <= arr[middle]) {
            // left side is sorted
            if (target < arr[middle] && target >= arr[left]) {
                // explore left
                right = middle - 1
            } else {
                // explore right
                left = middle + 1
            }
        } else {
            // right side is sorted
            if (target > arr[middle] && target <= arr[right]) {
                // explore right
                left = middle + 1
            } else {
                // explore left
                right = middle - 1
            }
            // explore right
            left = middle + 1
        }
    }
    return -1
}

function test() {
    const input = [45, 61, 71, 72, 73, 0, 1, 21, 33, 45], target = 33
    console.log(shiftedBinarySearch(input, target))
}

test()
