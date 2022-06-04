/*
 Write a function that takes in an array of integers and returns a sorted version of that array.
 Use the Insertion Sort algorithm to sort the array.
 Sample input: [8, 5, 2, 9, 5, 6, 3] Sample output: [2, 3, 5, 5, 6, 8, 9]
 */
/*Approach: We assume that first value is sorted and start from the second value and will find
 the sorted position for the second value
 */
// Best: O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Best: O(n^2) time | O(1) space
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let temp = arr[i]
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    return arr
}

function test() {
    let input = [8, 5, 2, 9, 5, 6, 3]
    console.log(insertionSort(input))
}

test()
