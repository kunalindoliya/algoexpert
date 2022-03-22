/*
 * A mountain sub-array consists of elements that are initially in ascending order until a peak
 * element is reached and beyond the peak element all other elements of the sub-array are in decreasing order.
 * Input: arr = [2, 2, 2]
 Output: 0
 Explanation:
 No sub-array exists that shows the behavior of a mountain sub-array.
 Input: arr = [1, 3, 1, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5]
 Output: 11
 Explanation:
 There are two sub-arrays that can be considered as mountain sub-arrays.
 The first one is from index 0 – 2 (3 elements) and next one is from index 2 – 12 (11 elements).  As 11 > 2, our answer is 11.
 */
/*
 Traverse the array and find the peak first.
 if peak is encountered then expand from the peak to the left and right to calculate the length.
 Check for next mountain from the right pointer expansion.
 Maintain the length of longest Peak.
 */

// Time: O(N), Space:O(1)
function longestPeak(array) {
    let longestPeak = 0
    for (let i = 1; i < array.length;) {
        // find the peak element first
        let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1]
        if (!isPeak) {
            i++
            continue
        }
        // expand from the peak to calculate the length of mountain
        // expand to the left
        let leftIndex = i - 2
        while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
            leftIndex--;
        }
        // expand to the right
        let rightIndex = i + 2
        while (rightIndex < array.length && array[rightIndex] < array[rightIndex - 1]) {
            rightIndex++
        }
        let currentPeakLength = rightIndex - leftIndex - 1
        if (currentPeakLength > longestPeak) {
            longestPeak = currentPeakLength
        }
        i = rightIndex
    }
    return longestPeak
}

function test() {
    let array = [1, 3, 1, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5]
    console.log(longestPeak(array))
}

test()
