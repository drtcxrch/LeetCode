/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squared = [];
    
    for (let num of nums) {
        squared.push(num * num);
    }
    
    return squared.sort((a, b) => (a - b))
};