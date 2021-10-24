/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let sorted = nums.sort((a, b) => a - b);
    let missing = [];
    let i = 1;
    let n = nums.length;
    let pointer = 0;
    
    while (i <= n) { //i = 1, [1, 2, 2, 3, 3, 4, 7, 8]
        while(sorted[pointer] === i) { 
            pointer++;
        }
        
        if (i !== sorted[pointer - 1]) {
            missing.push(i);
        }
        i++;
    }

    
    
    return missing;
};