/*
 Given Two arrays of integers. find the smallest difference/closest numbers from arrays
 Note: one number should be from first array ana second number should be from second array

 Given two arrays of integers, compute the pair of values (one value in each array)
 with the smallest (non-negative) difference. Return the difference

 Input : A[] = {l, 3, 15, 11, 2}
 B[] = {23, 127, 235, 19, 8}
 Output : 3
 That is, the pair (11, 8)
 */
/* Sort the both arrays and mark two pointer at beginning of both the arrays.
 we have to find the min difference now. So if value at first array pointer is less than
 value at second array pointer then there is no sense to move second pointer, so to decrease the
 difference move the first array pointer and vice versa
 */
// Two pointer technique
// Time: O(n.log(n) + m.log(m)) [sorting] , Space: O(1)
function smallestDifference(arr1, arr2) {
    // sort the arrays
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)
    let arr1Pointer = 0, arr2Pointer = 0
    let smallest = Number.POSITIVE_INFINITY
    let smallestPair;
    while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
        let diff = Math.abs(arr1[arr1Pointer] - arr2[arr2Pointer])
        if (diff === 0) {
            return smallestPair = [arr1[arr1Pointer], arr2[arr2Pointer]]
        }
        if (diff < smallest) {
            smallest = diff
            smallestPair = [arr1[arr1Pointer], arr2[arr2Pointer]]
        }
        if (arr1[arr1Pointer] < arr2[arr2Pointer])
            arr1Pointer++
        else
            arr2Pointer++
    }
    return smallestPair
}

function test() {
    let arr1 = [1, 3, 15, 11, 2], arr2 = [23, 127, 235, 19, 8]
    // let arr1 = [10, 5, 40], arr2 = [50, 90, 80]
    console.log(smallestDifference(arr1, arr2))
}

test()
