/*
 Write a function that takes in an array of integers and returns an array of length 2 representing
 the largest range of numbers contained in that array.
 The 1st number in the output array should be the 1st number in the range while the second number
 should be the last number in the range. A range of numbers is defined as a set of numbers that
 come right after each other in the set of real integers.
 For instance, the output array [2, 6] represents the range {2, 3, 4, 5, 6}, which is a range of length 5.
 Note that numbers do not need to be ordered or adjacent in the array in order to form a range.
 Assume that there will only be one largest range.

 Sample input: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6] Sample output: [0, 7]
 */
/* Approach 1: Using sorting and then find the numbers with difference of 1 and maintain the
 largest range. O(n.log(n))
 Approach2: we will store all the numbers in hashtable so that searching can be done in constant
 time. Traverse the array again and find the range in which current number belongs based on the
 hashtable and mark the visited number in hashtable to avoid duplicate range
 */

// Time: O(n), Space: O(n)
function largestRange(array) {
    let map = new Map()
    let rangeLength = 0
    let range = []
    // add all the values in map with value true
    array.forEach(el => map.set(el, true))
    for (let el of array) {
        // ignore visited elements
        if (!map.get(el))
            continue
        let currentLength = 1
        let left = el - 1, right = el + 1
        // check range of left side
        while (map.has(left)) {
            currentLength++
            map.set(left, false)
            left--
        }
        // check range of right side
        while (map.has(right)) {
            currentLength++
            map.set(right, false)
            right++
        }
        if (currentLength > rangeLength) {
            rangeLength = currentLength
            range = [left + 1, right - 1]
        }
    }
    return range
}

function test() {
    let array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
    console.log(largestRange(array))
}

test()
