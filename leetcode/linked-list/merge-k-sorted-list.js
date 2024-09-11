/**
 * @read: https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 *
 *
 * Example 1:
 *
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 * Example 2:
 *
 * Input: lists = []
 * Output: []
 * Example 3:
 *
 * Input: lists = [[]]
 * Output: []
 */

/**
 * the approach is to take two list and merge them in one and then take another two list and merge them
 * until a single list is remaining
 * Time: O(N*log(k)), Space: O(k) where k is the no of time we are merging the lists
 * @param lists
 * @returns {*|null}
 */
const mergeKLists = function(lists) {
    if (!lists.length) {
        return null;
    }

    while (lists.length > 1) {
        const mergedLists = [];
        for (let i=0; i<lists.length; i+=2) {
            l1 = lists[i]
            l2 = i+1 < lists.length ? lists[i+1] : null
            mergedLists.push(mergeTwoList(l1, l2))
        }
        lists = mergedLists
    }
    return lists[0];
};

const mergeTwoList = (list1, list2) => {
    const dummy = new ListNode();
    let tail = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2;
            list2 = list2.next
        }
        tail = tail.next
    }
    if (list1) {
        tail.next = list1
    } else if (list2) {
        tail.next = list2
    }
    return dummy.next;
}