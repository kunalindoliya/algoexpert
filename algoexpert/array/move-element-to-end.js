/*
 Given an array arr[] of size N and an integer K, the task is to print the array after
 moving all value equal to K at the end of the array.
 Input: arr = [2, 1, 2, 2, 2, 3, 4, 2], K = 2
 Output: [4, 1, 3, 2, 2, 2, 2, 2]
 */
/*
 Decrement the count of right pointer long as it points to K, and increment the left pointer as long
 as it doesn’t point to the integer m.
 When both pointers aren’t moving, swap their values in place.
 Repeat this process until the pointers pass each other.
 */

// Time: O(n), Space: O(1)
function moveElementToEnd(array, value) {
    let left = 0, right = array.length - 1
    while (left < right) {
        // move right pointer until we the value is not equal to move value
        while (left < right && array[right] === value)
            right--
        if (array[left] === value) {
            //swap numbers
            let temp = array[right]
            array[right] = array[left]
            array[left] = temp
        }
        left++
    }
    return array
}

function test() {
    let arr = [2, 1, 2, 2, 2, 3, 4, 2], value = 2
    console.log(moveElementToEnd(arr, value))
}

test()
