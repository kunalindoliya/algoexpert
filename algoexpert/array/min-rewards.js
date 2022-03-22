/*
 Imagine that you're a teacher who's just graded the final exam in a class. You have a list of
 student scores on the nal exam in a particular order (not necessarily sorted), and you want to reward your students.
 You decide to do so fairly by giving them arbitrary rewards following two rules:
 first: all students must receive at least one reward;
 second: any given student must receive strictly more rewards than an adjacent student (a
 student immediately to the left or to the right) with a lower score and must
 receive strictly fewer rewards than an adjacent student with a higher score.

 Assume that all students have different scores; in other words, the scores are all unique.
 Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to students,
 all the while satisfying the two rules.

 Sample input: [8, 4, 2, 1, 3, 6, 7, 9, 5] Sample output: 25 ([4, 3, 2, 1, 2, 3, 4, 5, 1])
 */
/*
In this approach we will assign 1 reward to all students first. After that we will traverse from
 left to right and if we find local min then after that we will increase the reward of
  students next to it.
  We have to traverse right to left. if we find local min then we will increase the reqard of
   students before to it.
   formula => reward = max { current value, next Value + 1}
*/
// Time: O(n), Space: O(n)
function minRewards(array) {
    let rewards = new Array(array.length)
    rewards.fill(1)
    // traverse to right
    for (let i=1; i<array.length; i++) {
        if (array[i]  > array[i-1]) {
           rewards[i] = rewards[i-1] + 1
        }
    }
    // traverse to left
    // use the max check
    for (let i = array.length-2; i >= 0; i--) {
        if (array[i] > array[i+1]) {
            rewards[i] = Math.max(rewards[i], rewards[i+1] + 1)
        }
    }
    return rewards.reduce((acc, value) => acc + value)
}

function test() {
    let array = [8, 4, 2, 1, 3, 6, 7, 9, 5]
    console.log(minRewards(array))
}
test()
