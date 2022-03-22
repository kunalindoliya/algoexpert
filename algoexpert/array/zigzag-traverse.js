/*
 Write a function that takes in a two-dimensional array and returns a one-dimensional array of all the array's
 elements in zigzag order. Zigzag order starts at the top left corner of the two-dimensional array, goes down by one element,
 and proceeds in a zigzag pattern all the way to the bottom right corner.

 Sample input: [ [1, 3, 4, 10], [2, 5, 9, 11], [6, 8, 12, 15], [7, 13, 14, 16], ]
 Sample output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 */
/*
we need to keep check on direction. We have to move either down or up.
Handle the case of first col, first row, last col, last row where we have to change the direction
*/
// Time: O(n), Space: O(n)
function zigzagTraverse(array) {
    let result = []
    let endRow = array.length - 1, endCol = array[0].length - 1
    let row = 0, col = 0
    let goingDown = true
    while (row <= endRow && col <= endCol) {
        // add first value
        result.push(array[row][col])
        if (goingDown) {
            if (col === 0 || row === endRow) {
                goingDown = false
                // if last row then go rigt
                if (row === endRow)
                    col++
                else // if first col then go down
                    row++
            } else {
                // go diagonally down
                row++
                col--
            }
        } else {
            if (row === 0 || col === endCol) {
                goingDown = true
                if (col === endCol)
                    row++
                else
                    col++
            } else {
                // go diagonally up
                row--
                col++
            }
        }
    }
    return result
}

function test() {
    let array = [[1, 3, 4, 10], [2, 5, 9, 11], [6, 8, 12, 15], [7, 13, 14, 16]]
    console.log(zigzagTraverse(array))
}

test()
