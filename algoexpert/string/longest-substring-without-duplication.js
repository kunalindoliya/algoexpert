/*Write a function that takes in a string and that returns its longest substring without duplicate characters.
 Assume that there will only be one longest substring without duplication.
 Sample input:"clementisacap" Sample output:"mentisac"
 */

/* We need a hashtable which will store last seen of characters and we need to keep track of
 substring which has all unique character.
 when you find duplicate then change the start index of substring by using formula
 max(startIndex, lastSeen of duplicate character + 1) and also update the last seen of
 duplicate character
 */
// Time: O(n), Space: O(min(n + a) where a is the length of characters we store in map because
// we will only store all characters of string if all are unique
function longestSubstringWithoutDuplication(str) {
    let startIdx = 0
    let lastSeen = new Map()
    let longest = [0, 1] // assume longest substring is first character
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i)
        if (lastSeen.has(c)) {
            startIdx = Math.max(startIdx, lastSeen.get(c) + 1)
        }
        if ((longest[1] - longest[0]) < (i+1 - startIdx)) {
            longest = [startIdx, i+1]
        }
        lastSeen.set(c, i)
    }
    return str.substring(longest[0], longest[1])
}

function test() {
    let str = "clementisacap"
    console.log(longestSubstringWithoutDuplication(str))
}

test()
