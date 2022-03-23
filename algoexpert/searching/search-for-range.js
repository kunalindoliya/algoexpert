/*Write a function that takes in a sorted array of integers as well as a target integer.
 The function should use a variation of the Binary Search algorithm to find a range of indices in
 which the target number is contained in the array and should return this range in the form of an array.
 The first number in the output array should represent the first index at which the target number is
 located while the second number should represent the last index at which the target number is located.
 The function should return [-1, -1] if the number is not contained in the array.

 Sample input: [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 45
 Sample output: [4, 9]
 */

/* Approach: For the range we need to look the left and right side for the target value. Apply
 the binary search and when target matches with the middle index value then look for the same
  target value on the left and right side.
*/
// Time: O(n*log(n)) | Space: O(1)
function searchForRange(arr, target) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (arr[middle] === target) {
            // expand to left and right to find the range
            let leftIdx = middle - 1, rightIdx = middle + 1
            while (leftIdx >= 0 && arr[leftIdx] === target) {
                leftIdx--
            }
            while (rightIdx < arr.length && arr[rightIdx] === target) {
                rightIdx++
            }
            return [leftIdx + 1, rightIdx - 1]
        } else if (target < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return [-1, -1]
}

// Time: O(log(N)) | Space: O(1)
function searchForRange1(array, target) {
    let range = [-1, -1]
    alteredBinarySearch(array, 0, array.length-1, range, target, true);
    alteredBinarySearch(array, 0, array.length-1, range, target, false);
    return range;
}
function alteredBinarySearch(array, left, right, range, target, goLeft) {
    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        if (target < array[mid]) {
            right = mid - 1;
        } else if (target > array[mid]) {
            left = mid + 1;
        } else {
            if (goLeft) {
                if (mid == 0 || array[mid-1] != target) {
                    range[0] = mid;
                    return;
                } else {
                    right = mid - 1;
                }
            } else {
                if (mid == array.length-1 || array[mid + 1] != target) {
                    range[1] = mid;
                    return;
                } else {
                    left = mid + 1;
                }
            }
        }
    }
}

function test() {
    let input = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], target = 45
    console.log(searchForRange1(input, target))
}

test()
