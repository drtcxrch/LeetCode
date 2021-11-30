/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices = [];
    
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j];
            if (num1 + num2 === target) {
                indices.push(i);
                indices.push(j);
            }
        }
    }
    
    return indices;
};