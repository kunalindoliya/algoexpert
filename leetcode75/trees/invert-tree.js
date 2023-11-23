/**
 * @read: https://leetcode.com/problems/invert-binary-tree/
 */

// Time Complexity : O(n)
// Space Complexity : O(n)
const invertTree = function(root) {
    if (!root) {
        return null
    }
    // swap children
    let tmp = root.right
    root.right = root.left
    root.left = tmp;
    // invert left subtree
    invertTree(root.left);
    // invert right subtree
    invertTree(root.right);
    return root;
};