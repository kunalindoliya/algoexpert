/*
 Write a function that takes in two strings: a main string and a potential substring of the main string.
 The function should return a version of the main string with every instance of the substring in it wrapped between underscores.
 If two instances of the substring in the main string overlap each other or sit side by side, the underscores relevant
 to these two substrings should only appear on the far left of the left substring and on the far right of the right substring.
 If the main string does not contain the other string at all, return the main string intact.

 Sample input:"testthis is a testtest to see if testestest it works","test"
 Sample output:"_test_this is a _testtest_to see if_testestest_it works"
 */

// We need to find all locations of substring after that we need to collapse side by side
// locations for extreme left and right case and after that we need to add underscores at all
// locations found out.
// Time: O(n), space: O(n) we need to consider amortized complexity to calculate correct complexity
function underscorifySubstring(main, potential) {
    let locations = collapseLocation(getLocation(main, potential))
    return underscorify(main, locations)
}

function getLocation(str, substring) {
    // find all the locations of substring in the main string
    // we need to take care of side by side substring as well
    let locations = []
    let startIdx = 0
    while (startIdx < str.length) {
        let findIdx = str.indexOf(substring, startIdx)
        if (findIdx !== -1) {
            locations.push([findIdx, findIdx + substring.length])
            startIdx = findIdx + 1
        } else {
            break
        }
    }
    return locations
}

function underscorify(str, locations) {
    // add underscores
    let locationIdx = 0
    let stringIdx = 0
    let finalChars = []
    let i = 0
    let inBetweenUnderscores = false
    while (stringIdx < str.length && locationIdx < locations.length) {
        if (stringIdx === locations[locationIdx][i]) {
            finalChars.push("_")
            inBetweenUnderscores = !inBetweenUnderscores
            if (!inBetweenUnderscores) {
                locationIdx++
            }
            i = i === 1 ? 0 : 1
        }
        finalChars.push(str[stringIdx])
        stringIdx++
    }
    if (locationIdx < locations.length) {
        finalChars.push("_")
    } else if (stringIdx < str.length) {
        finalChars.push(str.substring(stringIdx))
    }
    return finalChars.join("")
}

function collapseLocation(locations) {
    // we need to reset location which are side by side
    if (locations.length === 0)
        return locations
    let newLocations = []
    newLocations.push(locations[0])
    let previous = [locations[0]]
    for (let i = 1; i < locations.length; i++) {
        let current = locations[i]
        if (current[0] <= previous[1]) {
            previous[1] = current[1]
        } else {
            newLocations.push(locations[i])
            previous = current
        }
    }
    return newLocations
}

function test() {
    let main = "testthis is a testtest to see if testestest it works", potential = "test"
    console.log(underscorifySubstring(main, potential))
}
test()
