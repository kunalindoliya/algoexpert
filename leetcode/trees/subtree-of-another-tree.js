/**
 * @read: https://leetcode.com/problems/subtree-of-another-tree/
 */
// Time: O(S.T), space: O(S.T) where  S and T are no.of node in both trees
const isSubtree = function(root, subRoot) {
    // order of conditions matters
    if (!subRoot) {
        return true
    }
    if (!root) {
        return false
    }
    if (isSameTree(root, subRoot)) {
        return true
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = function(p, q) {
    if (!p && !q) {
        return true
    }
    if (!p || !q) {
        return false
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};