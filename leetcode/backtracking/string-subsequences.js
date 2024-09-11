/**
 * A subsequence of a string is obtained by deleting zero or more characters
 * from the string while maintaining order. Given a string, generate an array of all subsequences sorted alphabetically ascending, omitting the empty string.
 * Example
 * 5= "xyz"
 * Not including the empty string, the sorted subsequences are ['x, 'xy, 'xyz', 'xz', 'y, 'yz', 'z"].
 */
/**
 *
 * @param s
 * @return {*[]}
 */
function buildSubsequences(s) {
    // Write your code here
    const result = [];
    function dfs(i, current) {
        if (i === s.length && current.length) {
            result.push(current);
            return;
        }
        if (i > s.length) {
            return;
        }
        //include
        dfs(i+1, current + s[i]);
        // exclude
        dfs(i+1, current);
    }
    dfs(0, '');
    return result.sort();
}

console.log(buildSubsequences('xyz'));