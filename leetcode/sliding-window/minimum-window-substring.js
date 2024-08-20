/**
 * @read: https://leetcode.com/problems/minimum-window-substring/
 */

/**
 * https://leetcode.com/problems/minimum-window-substring/
 * Time O(N + M) | SpaceO(N + M)
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
    const isMissingArgs = !s.length || !t.length;
    if (isMissingArgs) return '';

    // create frequency map of t

    const frequencyMap = getFrequencyMap(t);
    const windowMap = new Map();
    // have is the count of characters we have matched and need is the count of chars that we have to match in order to validate the window
    let have = 0, need = frequencyMap.length;
    let left = 0, right = 0;
    let res = [-1, -1], resLength = Number.MAX_SAFE_INTEGER;
    // traverse the string s
    while (right < s.length) {
        let char = s[right];
        windowMap.set(char, (windowMap.get(char) || 0) + 1)
        // if count matches for a character that means we satisfied a condition
        if (frequencyMap.has(char) && frequencyMap.get(char) === windowMap.get(char)) {
            have++;
        }

        while (have === need) {
            // update the result
            let windowSize = right - left + 1;
            if (windowSize < resLength) {
                res = [left, right];
                resLength = windowSize
            }
            // pop from the left of window to minimize it
            windowMap.set(s[left], windowMap.get(s[left]) - 1);
            if (frequencyMap.has(s[left]) && windowMap.get(s[left]) < frequencyMap.get(s[left])) {
                have--; // decrement the have counter if window in not valid
            }
            left++;
        }
        right++;
    }
    return resLength !== Number.MAX_SAFE_INTEGER ? s.slice(res[0], res[1] + 1) : "";
};

const getFrequencyMap = (str, frequencyMap = new Map()) => {
    for (const char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    return frequencyMap;
};


console.log(minWindow("aa", "aa"))
