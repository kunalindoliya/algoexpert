/**
 * @read: https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 */

const maxPathSum = function(root) {
    const maxValue = [root.val]; // initialize with root value because we need to capture the max value, this will be our result
    //return max path sum without split
    function dfs(node) {
        // basecase
        if (!node) {
            return 0;
        }
        let leftMax = dfs(node.left);
        let rightMax = dfs(node.right);
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);

        // compute max path sum WITH split
        maxValue[0] = Math.max(maxValue[0], (node.val + leftMax + rightMax));
        return node.val + Math.max(leftMax, rightMax);
    }
    dfs(root);
    return maxValue[0];
};



