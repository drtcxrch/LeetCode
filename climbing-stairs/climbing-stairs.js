/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var dp = [1, 1];
    
    for (var i = 2; i <= n; i++) {
        var result = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = result;
    }
    
    return dp[1];
};

// //4
// //1. 1 + 1 + 1 + 1
// //2. 2 + 2
// //3. 1 + 1 + 2
// //4. 1 + 2 + 1
// //5. 2 + 1 + 1

// /**
// 5
// 1. 1 + 1 + 1 + 1 + 1
// 2. 2 + 2 + 1
// 3. 2 + 1 + 2
// 4. 1 + 2 + 2
// 5. 2 + 1 + 1 + 1
// 6. 1 + 2 + 1 + 1
// 7. 1 + 1 + 1 + 2
// 8. 1 + 1 + 2 + 1

