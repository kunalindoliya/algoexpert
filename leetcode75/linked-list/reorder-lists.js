/**
 * @read: https://leetcode.com/problems/reorder-list/
 */

/**
 * https://leetcode.com/problems/reorder-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
    // find the middle of list using slow and fast pointer
    // slow pointer moves by 1 and fast pointer moves by 2
    // the half will be the slow.next
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    let prev = slow.next = null;
    // reverse the second half
    while (second) {
        let temp = second.next;
        second.next = prev
        prev = second
        second = temp
    }

    // merge two half
    let firstHead = head, secondHead = prev
    while (secondHead) {
        let temp1 = firstHead.next, temp2 = secondHead.next
        // add second head node in middle of first half nodes
        firstHead.next = secondHead;
        secondHead.next = temp1;
        firstHead = temp1
        secondHead = temp2
    }

};