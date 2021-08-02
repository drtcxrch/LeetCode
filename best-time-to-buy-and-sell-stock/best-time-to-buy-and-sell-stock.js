/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if (prices.length < 2) {
        return 0;
    }
    
    var min = prices[0];
    
    var maxProf = prices[1] - prices[0];
    
    for (var i = 1; i < prices.length; i++) {
        var price = prices[i];
        
        if (price - min > maxProf) {
            maxProf = price - min;
        } 
        
        if (price < min && i !== prices.length - 1) {
            min = price;
        }
    }
    
    if (maxProf < 0) {
        return 0;
    }
    
    return maxProf;
    
};