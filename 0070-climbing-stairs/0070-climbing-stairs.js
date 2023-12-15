/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [1, 1];

    for (let i = 0; i < n; i++) {
        let temp = dp[0];
        dp[0] += dp[1];
        dp[1] = temp;
    }

    return dp[1];
};