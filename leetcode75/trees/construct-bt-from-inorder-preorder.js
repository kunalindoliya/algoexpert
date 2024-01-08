/**
 * @read: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

// Time: O(N), space: O(N)
const buildTree = function (preorder, inorder) {
    // first value of preorder is always the root
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let root = new TreeNode(preorder[0]); // create root node
    let mid = inorder.findIndex((el) => el === preorder[0]); // index of root value in inorder to find left or right subtree
    // build left subtree
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    // build right subtree
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    return root;
};