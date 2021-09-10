/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let sorted = nums.sort();
    let i = 1;
    let n = nums.length;
    let missing = [];
    
    while (i <= n) {
        if (nums.indexOf(i) === -1) {
            missing.push(i)
        }
        i++;
    }
    
    return missing;
};