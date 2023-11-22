/**
 * Write a function that takes in a "special" array and returns its product sum.
 * A "special" array is a non-empty array that contains either integers or other "special" arrays.
 * The product sum of a "special" array is the sum of its elements, where "special" arrays
 * inside it should be summed themselves and then multiplied by their level of depth.
 * For example, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2y + 2z.
 *
 * Sample input: [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
 * Sample output: 12 (5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)
 */
/**
 *
 * @param {[]} arr
 * @param {number} level
 */
//Time: O(N) , space: O(D). n is the total number of elements including sub arrays
// D is the max depth of sub arrays.
function productSum(arr, level = 1) {
   let sum = 0
   for (let value of arr) {
       if (Array.isArray(value)) {
           sum += productSum(value, level + 1)
       } else {
           sum += value
       }
   }
   return  level * sum;
}

function test() {
    console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
}
test();