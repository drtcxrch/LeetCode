class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [1, 1]
        i = 1
        while i <= n:
            temp = dp[1]
            dp[1] = dp[0] + dp[1]
            dp[0] = temp
            i = i + 1
        
        return dp[0]
        