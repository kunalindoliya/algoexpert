/**
 * @read: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

// Time: O(log(N)) | Space: O(1)
const lowestCommonAncestor = function(root, p, q) {
    while(root) {
        if (p.val > root.val && q.val > root.val) {
            // check right subtree
            root = root.right
        } else if (p.val < root.val && q.val < root.val) {
            // check left subtree
            root = root.left
        } else {
            return root;
        }
    }
};