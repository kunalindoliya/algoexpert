/* You are given a two-dimensional array (matrix) of distinct integers where each row is sorted and each column is
 also sorted. The matrix does not necessarily have the same height and width.
 You are also given a target number, and you must write a function that returns an array of the row and
 column indices of the target number if it is contained in the matrix and [-1, -1] if it is not contained in the matrix.

 Sample input: [ [1, 4, 7, 12, 15, 1000], [2, 5, 19, 31, 32, 1001], [3, 8, 24, 33, 35, 1002], [40, 41, 42, 44, 45, 1003], [99, 100, 103, 106, 128, 1004], ], 44
 Sample output: [3, 3]
 */
/* Approach: As matrix is sorted then start traversing the matrix from top right corner of the
 matrix and compare the target, if the target is small then move to the left else move to down
  until the target is equal or row and col are exceeded. The traversal will be in zig-zag manner
*/
// Time: O(N+M), Space: O(1)
function searchInSortedMatrix(matrix, target) {
    let row = 0, col = matrix[0].length - 1
    while (row < matrix.length && col >= 0) {
        if (target == matrix[row][col]) {
            return [row, col]
        } else if (target < matrix[row][col]) {
            // move left
            col--
        } else {
            // move down
            row++
        }
    }
    return [-1, -1]
}

function test() {
    let input = [[1, 4, 7, 12, 15, 1000], [2, 5, 19, 31, 32, 1001], [3, 8, 24, 33, 35, 1002],
        [40, 41, 42, 44, 45, 1003], [99, 100, 103, 106, 128, 1004]]
    let target = 44
    console.log(searchInSortedMatrix(input, target))
}

test()
