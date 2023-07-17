/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dupes = {};
    
    for (num of nums) {
        if (dupes[num]) {
            return true;
        } else {
            dupes[num] = true;
        }
    }
    
    return false;
};