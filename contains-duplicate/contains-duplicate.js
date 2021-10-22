/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dupes = {};
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!dupes[num]) {
            dupes[num] = 1;
        } else {
            return true;
        }
    }
    
    return false;
};