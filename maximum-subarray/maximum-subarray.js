/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var high = nums[0];
    
    for (var i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        high = Math.max(nums[i], high);
    }
    
    return high;
};