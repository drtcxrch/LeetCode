/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var count = {};
    
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (count[num]) {
            delete count[num];
        } else {
            count[num] = 1;
        }
    }
    
    return Object.keys(count)[0];
};