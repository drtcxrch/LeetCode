/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numCount = {};
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if (!numCount[num]) {
            numCount[num] = 1;
        } else {
            return true;
        }
    }
    
    return false;
};