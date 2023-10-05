/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let missing = [];
    let n = nums.length; 
    
    for (let i = 1; i <= n; i++) {
        if (nums.indexOf(i) === -1) {
            missing.push(i);
        }
    }
    
    return missing;
    
};