/**
 * @read: https://leetcode.com/problems/unique-paths-ii/
 * You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 *
 * An obstacle and space are marked as 1 or 0 respectively in grid.
 * A path that the robot takes cannot include any square that is an obstacle.
 *
 * Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 *
 * The testcases are generated so that the answer will be less than or equal to 2 * 109.
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;

    function dfs(r, c) {
        if (r >= rows || c >= cols || obstacleGrid[r][c] === 1) {
            return 0;
        }

        if (r === rows - 1 && c === cols - 1) {
            return 1;
        }

        return dfs(r, c + 1) + dfs(r + 1, c);
    }

    return dfs(0, 0);
};