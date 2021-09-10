/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let numCount = {};
    
    for (let i = 0; i < nums.length; i++) {
       let num = nums[i];
        if (!numCount[num]) {
            numCount[num] = 1;
        } else {
            delete numCount[num];
        }
    }
    console.log(numCount)
    return Object.keys(numCount);
    
};