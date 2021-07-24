/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var missing = [];
    for (var i = 1; i <= nums.length; i++) {
        if (nums.indexOf(i) === -1) {
            missing.push(i);
        }
    }
    
    return missing;
};