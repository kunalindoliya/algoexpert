/*
 * Write a function that takes in an array of integers of length at least 2.
 *  The function should return an array of the starting and ending indices of the smallest subarray
 *  in the input array that needs to be sorted in place in order for the entire input array to be sorted.
 * If the input array is already sorted, the function should return [-1, -1].

 Sample input: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19] Sample output: [3, 9]
 * */
/* we need to find the unsorted numbers from the array. From the unsorted numbers find the final
 position of smallest number and the largest number by comparing with sorted numbers. So the
 array between the final position will be the array which we need to sort in order to het
 complete sorted array
 */

// Time: O(n), Space: O(1)
function subarraySort(array) {
    let min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY
    let minIndex = 0, maxIndex = array.length - 1
    // find the maximum and minimum unsorted numbers
    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        if (isOutOfOrder(num, i, array)) {
            min = Math.min(min, num)
            max = Math.max(max, num)
        }
    }
    if (min === Number.POSITIVE_INFINITY)
        return [-1, -1]
    // find the final position of min number
    while (min >= array[minIndex]) {
        minIndex++
    }
    // find the final position of max number
    while (max <= array[maxIndex]) {
        maxIndex--
    }
    return [minIndex, maxIndex]
}

// check whether number is sorted or not
function isOutOfOrder(num, i, array) {
    if (i === 0)
        return num > array[i + 1]
    if (i === array.length - 1)
        return num < array[i - 1]
    return (num > array[i + 1] || num < array[i - 1])
}

function test() {
    let array = [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]
    console.log(subarraySort(array))
}

test()
