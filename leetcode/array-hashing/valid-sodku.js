/**
 * @read: https://leetcode.com/problems/valid-sudoku/description/
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Note:
 *
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 */

// Time: O(row * col) | Space: O(row * col)
const isValidSudoku = function (board) {
    // create hashMaps for rows, cols and sqaures
    const rowsMap = new Map();
    const colsMap = new Map();
    const squaresMap = new Map(); // key would be combinations of row/3, col/3 as it is 3x3 grid

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const char = board[row][col];
            if (char === ".") {
                continue;
            }
            const gridKey = `${Math.floor(row/3)}${Math.floor(col/3)}`;
            if ((rowsMap.has(row) && rowsMap.get(row).has(char)) ||
            (colsMap.has(col) && colsMap.get(col).has(char)) ||
            (squaresMap.has(gridKey) && squaresMap.get(gridKey).has(char))) {
                return false;
            }
            const rowSet = rowsMap.get(row) || new Set();
            rowSet.add(char);
            rowsMap.set(row, rowSet);
            const colSet = colsMap.get(col) || new Set();
            colSet.add(char);
            colsMap.set(col, colSet);
            const gridSet = squaresMap.get(gridKey) || new Set();
            gridSet.add(char);
            squaresMap.set(gridKey, gridSet);
        }
    }
    return true;
};