/**
 * @read: https://www.lintcode.com/problem/659/
 */

/**
 * String - Delimiter
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/encode-and-decode-strings/
 * @param {string[]} strs
 * @return {string}
 */
const encode = (strs) => {
    // append the length of string prefixed by a delimiter
    return strs
        .map((str) => `${str.length}#${str}`)/* Time O(N) | Ignore Auxillary Space O(N) */
        .join('');                           /* Time O(N) | Ignore Auxillary Space O(N) */
}

/**
 * String - Delimiter
 * Time O(N * K) | Space O(N)
 * https://leetcode.com/problems/encode-and-decode-strings/
 * @param {string} str
 * @param index
 * @param decodedWords
 * @return {string[]}
 */
const decode = (str, index = 0, decodedWords = []) => {
    while (index < str.length) {/* Time O(N) */
        const { nextIndex, word } = delimitWord(str, index);/* Time O(K) | Ignore Auxillary Space Space (K) */

        decodedWords.push(word);                            /*           | Ignore Auxillary Space O(N * K ) */
        index = nextIndex;
    }

    return decodedWords;
}

const delimitWord = (str, index) => {
    const delimiterIndex = str.indexOf('#', index);                             /* Time O(K) */
    const strLength = Number(str.slice(index, delimiterIndex));                    /* Time O(K) */
    const [ start, end ] = [ (delimiterIndex + 1), ((delimiterIndex + strLength) + 1) ];
    const word = str.slice(start, end);                                    /* Time O(K) | Ignore Auxillary Space O(K) */

    return {
        nextIndex: end,
        word
    };
}

console.log(encode(["lint","code","love","you"]))