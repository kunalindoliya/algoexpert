/**
 * @read: https://leetcode.com/problems/group-anagrams
 */
//  time: O(m.nlog(n)), space: o(m.n). m is the lengths of input string
const groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let sorted = [...str].sort().join('');
        if (map.has(sorted)) {
            map.get(sorted).push(str);
        } else {
            map.set(sorted, [str]);
        }
    }
    return [...map.values()];
};

/**
 * Hash Map
 * Time O(N * K) | Space O(N * K)
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} words
 * @return {string[][]}
 */
const groupAnagrams1 = (words, map = new Map()) => {
    if (!words.length) return [];

    groupWords(words, map);    /* Time O(N * K) | Space O(N * K) */

    return [ ...map.values() ];/* Time O(N)     | Space O(N * K) */
}

const groupWords = (words, map) => {
    for (const original of words) {/* Time O(N) */
        const hash = getHash(original); /* Time O(K) | Space O(1) */
        const values = map.get(hash) || [];

        values.push(original);          /*           | Space O(N) */
        map.set(hash, values);          /*           | Space O(N * K) */
    }
}

const getHash = (word) => {
    const frequency = new Array(26).fill(0);

    for (const char of word) {/* Time O(K) */
        const charCode = getCode(char);/* Time O(1) | Space (1) */

        frequency[charCode]++;         /*           | Space O(1) */
    }

    return buildHash(frequency)
}

const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

const buildHash = (frequency) => frequency.toString();

groupAnagrams1(["eat","tea","tan","ate","nat","bat"]);