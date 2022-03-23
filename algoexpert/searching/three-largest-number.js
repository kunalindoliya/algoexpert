/* Given an array of number which may or may not be sorted.
 return the sorted array of three largest number
 Input: [ 6, 8, 1, 9, 2, 1, 10]
 Output: 8, 9, 10
 */
/*Approach: Maintain a min value integer of size three and traverse the input array. Check if
 the current value is greater than third number of result array and then shift all the result
  values accordingly
*/
// Time: O(N), Space: O(1)
function threeLargestNumber(arr) {
    const result = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
    for (let val of arr) {
       // do the shifting operation
        if (val > result[2]) {
            result[0] = result[1]
            result[1] = result[2]
            result[2] = val
        } else if (val > result[1]) {
            result[0] = result[1]
            result[1] = val
        } else {
            result[0] = val
        }
    }
    return result
}

function test() {
    let input = [6, 8, 1, 9, 2, 1, 10]
    console.log(threeLargestNumber(input))
}

test()
