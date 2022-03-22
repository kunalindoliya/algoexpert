/*
 Write a function that, given a string, returns its longest palindromic substring.
 A palindrome is defined as a string that is written the same forward and backward.
 Assume that there will only be one longest palindromic substring.
 Sample input:"abaxyzzyxf"
 Sample output:"xyzzyx"
 */

// We will traverse the string and check whether the current string is palindrome or not by
// expanding to left or right like place a mirror in between. We need to handle the even length
// palindrome as well.
// Time: O(n), Space: O(1)
function longestPalindromicSubstr(str) {
    let startIndex = 0, endIndex = 0, currentLongest = [0, 1]
    for (let i = 0; i < str.length; i++) {
        let odd = getLongestPalindrome(str, i - 1, i + 1)
        let even = getLongestPalindrome(str, i - 1, i)
        let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
        currentLongest = longest[1] - longest[0] > currentLongest[1] - currentLongest[0] ? longest : currentLongest
    }
    return str.substring(currentLongest[0], currentLongest[1])
}

// expand to left and right and get the palindrome if exist
function getLongestPalindrome(str, left, right) {
    while (left >= 0 && right < str.length) {
        if (str.charAt(left) !== str.charAt(right))
            break
        left--
        right++
    }
    return [left + 1, right]
}

function test() {
    let str = "abaxyzzyxf"
    console.log(longestPalindromicSubstr(str))
}
test()
