/**
 * @read: https://leetcode.com/problems/merge-two-sorted-lists/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Time O(N + M) | Space O(1)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    // create one dummy node for edge cases
    let dummy = new ListNode();
    let tail = dummy;
    while(list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2;
            list2 = list2.next
        }
        tail = tail.next
    }
    // if any of the node is not null
    if (list1) {
        tail.next = list1
    } else if (list2) {
        tail.next = list2
    }
    return dummy.next;
};