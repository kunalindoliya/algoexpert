/**
 * @read https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
    // preorder traversal
    const result = [];
    function preOrder(root) {
        if (!root) {
            result.push('N')
            return
        }
        result.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
    preOrder(root);
    return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
    const preOrder = data.split(',');
    if (!preOrder.length) {
        return null;
    }
    const dfsDeserialize = () => {
        // root node
        const val = preOrder.shift();
        if (val === 'N') {
            return null;
        }
        const node = new TreeNode(val);
        node.left = dfsDeserialize();
        node.right = dfsDeserialize();
        return node;
    }
    return dfsDeserialize();
};



/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */