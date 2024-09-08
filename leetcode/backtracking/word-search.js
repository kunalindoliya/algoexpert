/**
 * @read: https://leetcode.com/problems/word-search/description/
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 *
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 */

/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Time: O(n * m * 4^l) where l is the length of word | Space: O(l)
const exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, i) {
        if (i === word.length) {
            // word found
            return true;
        }
        // out of bound conditions
        if (r < 0 || c < 0 || r >= rows || c >= cols) {
            return false;
        }
        // word not found
        if (word[i] !== board[r][c]) {
            return false;
        }
        // mark the word visited
        board[r][c] = '*';
        // check next word in all directions
        let res = (dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1));
        // backtrack
        board[r][c] = word[i];
        return res;
    }

    // call function for every entry in matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};