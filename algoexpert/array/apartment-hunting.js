/*
 You're looking to move into a new apartment, and you're given a list of blocks where each block contains
 an apartment that you could move into. In order to pick your apartment, you want to optimize its location.
 You also have a list of requirements: a list of buildings that are important to you. For instance, you might
 value having a school and a gym near your apartment. The list of blocks that you have contains
 information of every block about all of the buildings that are present and absent at the block
 in question.  For instance,  for every block, you might know whether a school, a pool, an
 office, and a gym are present or not. In order to optimize your life, you want to minimize the
 farthest distance you'd have to walk from your apartment to reach all of your required buildings.

 Write a function that takes in a list of blocks and a list of your
 required buildings and that returns the location (the index) of the block that is most optimal for you.

 Sample input: [ { "gym": false, "school": true, "store": false, }, { "gym": true, "school": false,
 "store": false, },
 { "gym": true, "school": true, "store": false, }, { "gym": false, "school": true, "store": false,
 }, { "gym": false, "school": true, "store": true, }, ],
 ["gym","school","store"]

 Sample output: 3 (at index 3, the farthest you would have to walk to reach a gym, a school, or a store, is 1 block; at any other index, you would have to walk farther
 */
// Approach 1 (Naive): We will traverse all the blocks and for each block we will check for
// closest distance of each requirement and will also maintain the max distance of a
// requirement from every block. The final apartment will be the one which has min distance
// of any of the requirement
// Time: O(B^2.R), Space: O(B)
function apartmentHunting(blocks, reqs) {
    let maxDistanceAtBlocks = new Array(blocks.length)
    maxDistanceAtBlocks.fill(Number.NEGATIVE_INFINITY)
    // traverse all the blocks
    for (let i = 0; i < blocks.length; i++) {
        // traverse all the requirements for each block
        for (let s of reqs) {
            let closestRequirementDistance = Number.POSITIVE_INFINITY
            // calculate how far away is the closest requirement from the current block
            for (let j = 0; j < blocks.length; j++) {
                if (blocks[j][s]) {
                    closestRequirementDistance =
                        Math.min(closestRequirementDistance, Math.abs(i - j))
                }
            }
            // store the maximum distance of block from the current block where we have to traverse
            // for the requirement
            maxDistanceAtBlocks[i] = Math.max(maxDistanceAtBlocks[i], closestRequirementDistance)
        }
    }
    return maxDistanceAtBlocks.indexOf(Math.min(...maxDistanceAtBlocks))
}

// Approach 2: In this approach we will pre calculate the min distance of requirements from each
// block and then from  min distance of requirement we will find the max distance of any
// requirement from the any block.
// Time: O(B.R), Space: O(B.R)
function apartmentHunting1(blocks, reqs) {
    let minDistanceRequirements = new Array(reqs.length)
    // calculate the minimum distances of requirements from every block
    // O(B.R)
    for (let i = 0; i < reqs.length; i++) {
        minDistanceRequirements[i] = getMinDistance(blocks, reqs[i])
    }
    // calculate max Distance at blocks from min distances of requirements
    // O(B.R)
    let maxDistanceAtBlocks = getMaxDistanceFromRequirements(blocks, minDistanceRequirements)
    return maxDistanceAtBlocks.indexOf(Math.min(...maxDistanceAtBlocks))
}

function getMaxDistanceFromRequirements(blocks, minDistanceRequirements) {
    let maxDistance = new Array(blocks.length)
    for (let i = 0; i < blocks.length; i++) {
        let minDistForOneBlock = new Array(minDistanceRequirements.length)
        // set the minimum distance of all requirements for every block
        for (let j=0; j< minDistanceRequirements.length; j++) {
            minDistForOneBlock[j] = minDistanceRequirements[j][i]
        }
        // set the max distance from the minDistForOneBlock for every block
        maxDistance[i] = Math.max(...minDistForOneBlock)
    }
    return maxDistance
}

function getMinDistance(blocks, req) {
    let minDistances = new Array(blocks.length)
    let closestReqIndex = Number.POSITIVE_INFINITY
    // traverse to the right
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i][req])
            closestReqIndex = i
        minDistances[i] = Math.abs(closestReqIndex - i)
    }
    // traverse to the left and keep track of requirement closest before
    for (let i = blocks.length - 1; i >= 0; i--) {
        if (blocks[i][req])
            closestReqIndex = i
        minDistances[i] = Math.min(minDistances[i], Math.abs(closestReqIndex - i))
    }
    return minDistances
}

function test() {
    let blocks = [{"gym": false, "school": true, "store": false,},
        {"gym": true, "school": false, "store": false},
        {"gym": true, "school": true, "store": false},
        {"gym": false, "school": true, "store": false},
        {"gym": false, "school": true, "store": true}]
    let requirements = ["gym", "school", "store"]
    console.log(apartmentHunting1(blocks, requirements))
}

test()
