/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   let uniq = {};
    
    for (let num of nums) {
        if (!uniq[num]) {
            uniq[num] = true;
        }
    }
    
    let sorted = Object.keys(uniq).sort((a, b) => a - b);
    let n = nums.length;
    let missing = [];
    let i = 1;
    let j = i - 1;
  
    while (i <= n) {
        if (Number(sorted[j]) !== i) {
            missing.push(i);
        } else {
            j++;
        }
        i++;
    }
        
    return missing;
}