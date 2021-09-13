/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1; //5
    let pivot;
    
    while (left <= right) {
        pivot = Math.ceil(left + (right - left) / 2); //2.5
        if (nums[pivot] === target) {
            return pivot;
        } else if (target < nums[pivot]) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }
    
    return -1;
    
    
};