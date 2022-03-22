/*You are given two non-empty strings. The first one is a pattern consisting of only "x"s and /or "y"s;
 the other one is a normal string of alphanumeric characters. Write a function that checks whether or
 not the normal string matches the pattern. A string S0 is said to match a pattern if replacing all"x"s
 in the pattern with some string S1 and replacing all"y"s in the pattern with some string S2 yields the same string S0.
 If the input string does not match the input pattern, return an empty array; otherwise, return an array holding
 the representations of"x" and "y"in the normal string, in that order. If the pattern does not contain any "x"s or "y"s,
 the respective letter should be represented by an empty string in the nal array that you return.
 Assume that there will never be more than one pair of strings S1 and S2 that appropriately represent"x" and "y"in the input string.

 Sample input:"xxyxxy","gogopowerrangergogopowerranger"

 Sample output: ["go","powerranger"]
 */
// We first create a new pattern then we calculate the counts of x and y and the first position
// of y. Then we will calculate the length of x and y string and then we find the potential match.
// Time: O(n^2 + m) time | O(n + m) space: where n is the length of string and m is the length of
// pattern
function patternMatcher(pattern, str) {
    let newPattern = getNewPattern(pattern)
    let isSwitched = newPattern[0] !== pattern[0] // to swap values of potential x and y in
    // final result
    let counts = new Map() // it will store the number of x and y in the patter
    counts.set('x', 0)
    counts.set('y', 0)
    let firstY = getCountsandFirstYPos(newPattern, counts)
    if (counts.get('y') !== 0) {
        // find the potential x and y and check with pattern
        for (let lenOfX = 1; lenOfX < str.length; lenOfX++) {
            /*calculate the length of y using formula ( length of str - length of x * count of
             x) / count of y*/
            let lenOfY = Math.trunc((str.length - lenOfX * counts.get('x')) / counts.get('y'))
            if (lenOfY <= 0 || lenOfY % 1 !== 0) {
                continue;
            }
            let yIdx = firstY * lenOfX
            let x = str.substring(0, lenOfX)
            let y = str.substring(yIdx, yIdx + lenOfY)
            let potentialMatch = buildPotentialMatch(newPattern, x, y)
            if (str === potentialMatch) {
                return isSwitched ? [y, x] : [x, y]
            }
        }
    } else {
        let lenOfX = Math.trunc((str.length - counts.get('x')))
        if (lenOfX % 1 === 0) {
            let x = str.substring(0, lenOfX)
            let potentialMatch = buildPotentialMatch(newPattern, x, "")
            if (str === potentialMatch) {
                return isSwitched ? ["", x] : [x, ""]
            }
        }
    }
    return []
}

function buildPotentialMatch(pattern, x, y) {
    let s = ""
    pattern.forEach(el => {
        if (el === 'x') {
            s = s.concat(x)
        } else {
            s = s.concat(y)
        }
    })
    return s
}

function getCountsandFirstYPos(pattern, counts) {
    // this function counts the x and y and returns the first position of y
    let firstY = -1
    pattern.forEach((el, idx) => {
        counts.set(el, counts.get(el) + 1)
        if (el === 'y' && firstY === -1)
            firstY = idx
    })
    return firstY
}

function getNewPattern(pattern) {
    // this function will change the position of x and y if pattern starts from y, just to make
    // things easy to calculate. later on we need to swap the value of x and y in the result
    if (pattern[0] === 'x')
        return [...pattern]
    let patternArray = []
    pattern.forEach(el => {
        if (el === 'y')
            patternArray.push('x')
        else
            patternArray.push('y')
    })
    return patternArray
}

function test() {
    let pattern = "xxyxxy", str = "gogopowerrangergogopowerranger"
    console.log(patternMatcher(pattern, str))
}

test()
