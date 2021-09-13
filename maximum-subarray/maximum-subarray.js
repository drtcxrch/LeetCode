/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let high = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        high = Math.max(high, nums[i]);
        
    }
    
    return high;
    
};