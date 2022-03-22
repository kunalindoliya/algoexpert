/*
 Write a function that takes in a non-empty string and that returns a boolean representing whether or not the string is a palindrome.
 A palindrome is defined as a string that is written the same forward and backward.

 Sample input:"abcdcba"
 Sample output: True (it is a palindrome)
 */
// take two pointers left and right and check the characters. If they are equal then move the
// pointers simultaneously and check again
// Time: O(n), Space: O(1)
function palindromeCheck(string) {
    let left = 0, right = string.length - 1
    while (left < right) {
        if (string[left]!== string[right])
            false
        left++
        right--
    }
    return true
}

function test() {
    let string = "abcdcba"
    console.log(palindromeCheck(string))
}

test()
