/*
 Write a function that takes in an array of integers and returns a sorted version of that array.
 Use the Bubble Sort algorithm to sort the array.

 Sample input: [8, 5, 2, 9, 5, 6, 3] Sample output: [2, 3, 5, 5, 6, 8, 9]
 */
/*Approach: iterate over arr and check if adjacent values are sorted or not, if not then swap
 the values. In each iteration the last value will be the largest
 */
// Time: O(N^2) | Space: O(1)
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isSorted = true
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                isSorted = false
            }
        }
        if (isSorted)
            return arr
    }
}

function test() {
    let input = [8, 5, 2, 9, 5, 6, 3]
    console.log(bubbleSort(input))
}

test()
