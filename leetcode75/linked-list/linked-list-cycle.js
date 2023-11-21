/**
 * @read: https://leetcode.com/problems/linked-list-cycle/
 * Floyd's tortoise and hare algorithm
 */

const hasCycle = function(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true
        }
    }
    return false;
};