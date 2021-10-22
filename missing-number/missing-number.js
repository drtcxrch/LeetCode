/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sorted = nums.sort((a, b) => a- b);
    let n = nums.length;
    
    for (let i = 0; i <= n; i++) {
        let num = sorted[i]
        if (num !== i) {
            return i;
        }
    }
   
};