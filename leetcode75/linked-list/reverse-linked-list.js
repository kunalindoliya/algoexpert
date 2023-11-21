/**
 * @read: https://leetcode.com/problems/reverse-linked-list/
 */

/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    let prev = null, curr = head;
    while(curr) {
        let temp = curr.next;
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
};