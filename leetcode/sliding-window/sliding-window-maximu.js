/**
 * @read: https://leetcode.com/problems/sliding-window-maximum/description/
 */


/**
 * 1, Check current number is greater than the latest number in deque. If true, pop the latest number. Try to keep decreasing order.
 *
 * 2, If maxinum number in deque is out of bounds, pop it.
 *
 * 3, If index is greater than or equal to k - 1, add maximum number to res.
 *
 * Why k - 1?
 * k - 1 is maxinum window size. The above expamle has k = 3 which means maxinum window size should be 3.
 * we are using decreasing deque, The first value of deque should be maximum
 *
 * It's a deque with an interesting property - the elements in the deque from head to tail are in decreasing order (hence the name monotonic).
 *
 * To achieve this property, we modify the push operation so that
 *
 * Before we push an element into the deque, we first pop everything smaller than it out of the deque.
 *
 * This enforces the decreasing order.
 * @param nums
 * @param k
 * @return {*[]}
 */
// Time: O(n), Space: O(k)
const maxSlidingWindow = function (nums, k) {
    let res = [];
    let deque = [];

    for (let idx = 0; idx < nums.length; idx++) {
        let num = nums[idx];

        while (deque.length && deque[deque.length - 1] < num) {
            deque.pop();
        }
        deque.push(num);
        // remove first element if it's outside the window
        if (idx >= k && nums[idx - k] === deque[0]) {
            deque.shift();
        }

        if (idx >= k - 1) {
            res.push(deque[0]);
        }
    }

    return res;

   /* const q = [];  // stores *indices*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;*/

};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)

