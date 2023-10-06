/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let disappeared = [];
    
    for (let i = 1; i <= n; i++) {
        if (nums.indexOf(i) === -1) {
            disappeared.push(i);
        }
    }
    
    return disappeared;
};