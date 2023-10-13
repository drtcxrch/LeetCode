/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i = 0; 
    let max;
    
    if (nums.length === 1 && k === 1) {
        return nums[0] / k;
    }
    
    while (i <= nums.length - k) {
        let j = i;
        let curSum = 0;
        while (j < i + k) {
            curSum += nums[j]
            j++;
        }
       
        if (!max || curSum > max) {
            max = curSum;
        }
        i++;
    }
    
    return max / k;
};