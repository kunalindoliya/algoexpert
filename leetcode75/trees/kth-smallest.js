/**
 * @read: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */
// inorder traversal of BST gives sorted values
    // Time: O(N) | Space: O(1)
const kthSmallest = function (root, k) {
        // do inorder traversal iteratively
        let curr = root;
        let n = 0; // processed node tracking
        const stack = [];
        while (curr || stack.length) {
            // go to leftmost node
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }
            // when reaching null node the pop from stack
            n++;
            curr = stack.pop();
            if (n === k) {
                return curr.val
            }
            // traverse right node
            curr = curr.right;
        }
    };