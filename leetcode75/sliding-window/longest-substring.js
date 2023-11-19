/**
 * @read: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function (s) {
    const set = new Set(); // it will keep only unique chars and that represents a substring
    let l = 0; // window start
    let max = 0;
    // add character in set and remove from the set when duplicate is present in set and adjust the window
    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    return max;
};
