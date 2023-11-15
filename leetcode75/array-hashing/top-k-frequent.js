/**
 * @read: https://leetcode.com/problems/top-k-frequent-elements/
 * @read: https://www.geeksforgeeks.org/bucket-sort-2/
 */

/**
 * Set - Frequency Counter | Using sort
 * Time O(NlogN) | Space O(N)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    let frequency = {}
    for( let i = 0; i < nums.length; i++){
        if(frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
        else frequency[nums[i]] = 1;
    }
    let result = Object.keys(frequency).map((key) => [Number(key), frequency[key]]);
    let sortedResult = result.sort((a,b) => {
        return b[1]-a[1]
    })
    let output = []
    for ( let i = 0; i < k; i++){
        output.push(sortedResult[i][0])
    }
    return output;
};

/**
 *
 * @param {number[]}nums
 * @param {number}k
 * @return {number[]}
 */
// time: O(n), space: O(n)
const topFrequent1 = function(nums, k) {
    const map = new Map();
    /**
     * to store values occurred i'th time.
     * maximum occurrence could be the length of nums array
     */
    const arr = Array(nums.length+1).fill(0);

    const result = [];
    // count the occurrence of values
    nums.forEach(el => {
        const val = map.get(el) || 0;
        map.set(el, val + 1);
    });

    // push element on the occurrence index
    for ( let [key, value] of map ) {
        const prev = arr[value] || [];
        prev.push(key);
        arr[value] = prev;
    }
    arr.reverse(); // to get top elements
    for (let el of arr) {
        if (k < 1) break;
        if (el) {
            for (let el2 of el) {
                result.push(el2);
                k--;
            }
        }
    }
    return result;
}