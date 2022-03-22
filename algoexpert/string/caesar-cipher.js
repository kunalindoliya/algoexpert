/*Given a non-empty string of lowercase letters and a non-negative integer value representing a key,
 write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet,
 where k is the key. Note that letters should "wrap" around the alphabet; in other words, the letter "z" shifted by 1 returns
 the letter "a".
 Sample input:"xyz", 2
 Sample output:"zab"
 */
// We should know the ascii values (a=97, z = 122). If key value is greater than 26 then
// minimize it by taking mod. Handle the edge case when new order is greater than 122
// Time: O(n), Space: O(n)
function caesarCipher(str, key) {
    // if key is greater than 26 then take mod of it
    let result = ''
    key = key % 26
    for (let i = 0; i < str.length; i++) {
        let newOrder = str.charCodeAt(i) + key
        if (newOrder > 122) {
             result = result.concat(String.fromCharCode(newOrder % 122 + 96))
        } else {
            result = result.concat(String.fromCharCode(newOrder))
        }
    }
    return result
}

function test() {
    let string = "xyz", key = 2
    console.log(caesarCipher(string, key))
}

test()
