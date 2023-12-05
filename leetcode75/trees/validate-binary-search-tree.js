/**
 * @read: https://leetcode.com/problems/validate-binary-search-tree/
 */

/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
    // set minimum and maximum value to compare with the parent node. Every node will inherit the range from parent node
    // all left node should be less than parent and all right nodes should be greater than parent
    return isValid(root, -Infinity, Infinity)
};

const isValid = (node, left, right) => {
    if (!node) {
        return true
    }
    if (node.val <= left || right <= node.val) {
        return false
    }
    return isValid(node.left, left, node.val) && isValid(node.right, node.val, right);
}