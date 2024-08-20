/**
 * @read: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */
// time: O(n), space: O(1)
const maxProfit = function(prices) {
    // initialize pointers
    // the approach is to create a window in which buy stock should be before sell stock
    let buyPointer = 0
    let sellPointer = 1
    let maxProfit = 0
    while(sellPointer < prices.length) {
        if (prices[buyPointer] > prices[sellPointer]) {
            buyPointer = sellPointer
            sellPointer++;
        } else {
            const profit = prices[sellPointer] - prices[buyPointer]
            if (profit > maxProfit) {
                maxProfit = profit
            }
            sellPointer++;
        }
    }
    return maxProfit
};