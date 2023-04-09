class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy = prices[0]
        max_prof = 0
        
        for price in prices:
            difference = price - buy
            if price < buy:
                buy = price
            elif difference > max_prof:
                max_prof = difference
        
        return max_prof