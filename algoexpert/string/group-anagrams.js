/*
 write a function which will accept a list of arbitrary string and it will return list of lists
 where each list represents group of anagram.
 A anagrams are words which are formed by the same letters in any order.

 input: ['yo','act','flop','tac','cat','oy','olfp']
 output: [['yo', 'oy'], ['tac','cat','act'], ['flop', 'olfp']]
 */
/* We will create a hashmap traverse each string in array. Sort every string and check whether
 the same value is present in map or not. if not then it's a new anagram otherwise push in the
  list of existing anagram
*/
// Time: O(w.nlog(n)) , Space: O(w.n)
function groupAnagrams(arr) {
    let map = new Map()
    arr.forEach(el => {
        let chars = [...el]
        chars = chars.sort()
        let newString = chars.join('')
        if (map.has(newString)) {
            map.get(newString).push(el)
        } else {
            map.set(newString, [el])
        }
    })
    return [...map.values()]
}

function test() {
    let arr = ['yo','act','flop','tac','cat','oy','olfp']
    console.log(groupAnagrams(arr))
}

test()
