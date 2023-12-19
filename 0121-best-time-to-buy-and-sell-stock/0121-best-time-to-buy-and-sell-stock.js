/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 let buy = prices[0]; //7
 let profit = 0;
 
 for (let price of prices) {
     let difference = price - buy;
     console.log(price, buy, profit)
     if (price < buy) {
         buy = price;
     } else if (difference > profit) {
         profit = difference;
     }
 }

 return profit;
    
};