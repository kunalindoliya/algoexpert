/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

// use queue data structure
    // Time: O(N), Space: O(N/2) maximum level
const levelOrder = function (root) {
    let queue = [], result = [];
    queue.push(root)
    while (queue.length) {
        let level = [];
        let queueLength = queue.length
        for (let i=0; i<queueLength; i++) {
            // pop element and add its left and right child in queue
            let poppedElement = queue.shift();
            if (poppedElement) {
                level.push(poppedElement.val);
                queue.push(poppedElement.left)
                queue.push(poppedElement.right)
            }

        }
        if (level.length) {
            result.push(level)
        }
    }
    return result;
};