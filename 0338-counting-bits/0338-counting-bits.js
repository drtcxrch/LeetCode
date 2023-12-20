/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [];
    
    for (let i = 0; i <= n; i++) {
        let ones = 0;
        Array.from(i.toString(2)).forEach(char => char === '1' ? ones++ : null)
        ans.push(ones);
    }
    
    return ans;
};