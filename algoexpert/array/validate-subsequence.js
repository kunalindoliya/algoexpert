/*
 Given two non-empty arrays of integers, write a
 function that determines whether the second
 array is a subsequence of the first one.
 A subsequence of an array is a set of numbers
 that aren't necessarily adjacent in the array but
 that are in the same order as they appear in the
 array. For instance, the numbers [1, 3, 4]
 form a subsequence of the array
 [1, 2, 3, 4] , and so do the numbers
 [2, 4] . Note that a single number in an
 array and the array itself are both valid
 subsequences of the array*/

/* While traversing the array keep track of the sequence. if value matches then increment the
 sequence pointer until you reach the end of the sequence.
 * */

// Time: O(n), Space: O(1)

function isValidSubsequence(array, sequence) {
    let arrayPointer = 0
    let seqPointer = 0
    while (arrayPointer < array.length) {
        if (array[arrayPointer] === sequence[seqPointer]) {
            seqPointer++
        }
        arrayPointer++
    }
    return seqPointer === sequence.length
}

function test() {
    //let array = [5, 1, 22, 25, 6, -1, 8, 10], sequence = [1, 6, -1, 10]
    let array = [1, 2, 3, 4], sequence = [2,1,3]
    console.log(isValidSubsequence(array, sequence))
}

test()
