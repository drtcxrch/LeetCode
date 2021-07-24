/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var numCount = {}
    
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (numCount[num]) {
            return true;
        } else {
            numCount[num] = true;
        }
    }
    
    return false;
};