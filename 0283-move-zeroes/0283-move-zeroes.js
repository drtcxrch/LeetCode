/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] === 0) {
           let pointer = i;
           
           while (nums[pointer] === 0) {
               pointer++;
           }
           
           if (nums[pointer] === undefined) {
               break;
           }
           
           nums[i] = nums[pointer];
           nums[pointer] = 0;   
           
           if (pointer === nums.length - 1) {
               break;
           }
       }
    }
    
    return nums;
    
}