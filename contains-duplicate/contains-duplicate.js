/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let count = {};
    //{1: 2, 2: 1, 3: 1, }
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!count[num]) {
            count[num] = 1;
        } else {
            return true;
        }
    }
    
    return false;
};