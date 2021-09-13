/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buy = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        let price = prices[i];
        let difference = price - buy;
        if (price < buy) {
            buy = price;
        } else if (difference > max) {
          max = difference;
        }
    }
    
    return max;
};