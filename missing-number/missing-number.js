/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sorted = nums.sort((a, b) => a - b);
    
    for (let i = 0; i <= n; i++) {
        if (sorted[i] !== i) {
            return i;
        }
    }
};