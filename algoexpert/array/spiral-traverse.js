/*Given a 2D array, print it in spiral form.
 Input:  1    2   3   4
 5    6   7   8
 9   10  11  12
 13  14  15  16
 Output: 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
 * */

//Time: O(N), Space: O(N)/O(1) because all the elements are traversed only once
function spiralTraverse(matrix) {
    let result = []
    let sr = 0, sc = 0, er = matrix.length - 1, ec = matrix[0].length - 1
    while (sr <= er && sc <= ec) {
        // traverse top
        for (let i = sc; i <= ec; i++)
            result.push(matrix[sr][i])
        // traverse right
        for (let i = sr + 1; i <= er; i++)
            result.push(matrix[i][ec])
        // traverse bottom
        for (let i = ec - 1; i >= sc; i--) {
            // handle edge case when there is single row in middle of matrix.
            if (sr === er) break;
            result.push(matrix[er][i])
        }
        // traverse left
        for (let i = er - 1; i > sr; i--) {
            // handle edge case when there is single col in middle of matrix.
            if (sc === ec) break;
            result.push(matrix[i][sc])

        }
        sr++
        sc++
        er--
        ec--
    }
    return result
}

function test() {
    let matrix = [[1, 2, 3, 4], [5, 6, 7, 8],
        [9, 10, 11, 12], [13, 14, 15, 16]];
    console.log(spiralTraverse(matrix))
}

test()
