/*
 Write a function that takes in an array of integers and returns a sorted version of that array.
 Use the Selection Sort algorithm to sort the array.

 Sample input: [8, 5, 2, 9, 5, 6, 3]
 Sample output: [2, 3, 5, 5, 6, 8, 9]
 */
/* Approach: In each iteration we find the min value from the unsorted array and swap it to the
 correct position in sorted array
*/
// Time: O(n^2) | Space: O(1)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j=i+1; j< arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

function test() {
    let input = [8, 5, 2, 9, 5, 6, 3]
    console.log(selectionSort(input))
}

test()
