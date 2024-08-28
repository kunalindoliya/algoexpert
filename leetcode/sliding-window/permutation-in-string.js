/**
 * @read: https://leetcode.com/problems/permutation-in-string/
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Problem Understanding
 * We need to check if any permutation of s1 exists as a contiguous substring in s2.
 * Frequency Counting:
 * The main idea is to use frequency counting of characters. If two strings have the same frequency count for all characters, one is a permutation of the other.
 * Sliding Window Technique:
 * We'll use a sliding window of length equal to 's1' on 's2'. As the window slides over 's2', we'll keep track of character frequencies in the current window.
 * Initially, we calculate the frequency of characters for the first window of size equal to s1.length(). This serves as our initial comparison point.
 * Initial Comparison:
 * Compare the frequency map of the first window with the frequency map of s1. If they match, we return 'true'since a permutation of s1 is found in s2.
 * Sliding the Window:
 * Slide the window one character at a time:
 * Remove the frequency of the character that is sliding out of the window (leftmost character).
 * Add the frequency of the new character that is sliding into the window (rightmost character).
 * After updating the frequencies, compare the frequency map of the current window with the frequency map of s1.
 * Final Check:
 * If any of the comparisons match, return true. If the loop completes without finding a match, return false.
 */
// Time: O(n), Space: O(1)
const checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) {
        return false;
    }

    let freq_s1 = new Map(); // map to store frequency count of characters in s1
    let freq_s2 = new Map(); // map to store frequency count of characters in s2 for a window size equal to s1.length

    // Initialization
    for (let i = 0; i < s1.length; i++) {
        freq_s1.set(s1[i], (freq_s1.get(s1[i]) || 0) + 1);
        freq_s2.set(s2[i], (freq_s2.get(s2[i]) || 0) + 1);
    }

    // Initial comparison
    if (mapsAreEqual(freq_s1, freq_s2)) {
        return true;
    }

    for (let i = s1.length; i < s2.length; i++) {
        let ch_out = s2[i - s1.length]; // character to remove
        if (freq_s2.get(ch_out) === 1) {
            freq_s2.delete(ch_out);
        } else {
            freq_s2.set(ch_out, freq_s2.get(ch_out) - 1);
        }

        let ch_in = s2[i]; // character to add
        freq_s2.set(ch_in, (freq_s2.get(ch_in) || 0) + 1);

        // Check final condition
        if (mapsAreEqual(freq_s1, freq_s2)) {
            return true;
        }
    }

    return false;
};

/**
 * Helper function to check if two maps are equal
 * @param {Map} map1
 * @param {Map} map2
 * @return {boolean}
 */
function mapsAreEqual(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, val] of map1) {
        if (val !== map2.get(key)) {
            return false;
        }
    }
    return true;
}