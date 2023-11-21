/**
 * @read: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */

/**
 * Time O(N), Space: O(1)
 * @param head
 * @param n
 * @returns {*}
 */
const removeNthFromEnd = function (head, n) {
    // use two pointer approach in which we can initialize left pointer at start of the list
    // and right pointer at start + n (offset). When right will be null then left pointer will be at the
    // nth position from the end of the list

    // take dummy node which points to start of the list. With use of dummy node the left pointer will be at n + 1 position
    // from the end of the list
    let dummy = new ListNode(0, head);
    let left = dummy, right = head;
    // shift right to offset position
    while (n > 0 && right) {
        right = right.next;
        n--
    }
    // traverse to reach at one position before the actual node to be removed
    while (right) {
        right = right.next;
        left = left.next
    }
    // delete the node
    left.next = left.next.next;
    return dummy.next
};