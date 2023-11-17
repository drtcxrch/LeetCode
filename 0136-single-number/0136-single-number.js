/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let seen = {};
    
    for (num of nums) {
        let numStr = String(num);
        if (!seen[numStr]) {
            seen[numStr] = true;
        } else {
            delete seen[numStr];
        }
    }
    
    return Number(Object.keys(seen)[0])
};