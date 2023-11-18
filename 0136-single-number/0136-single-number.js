/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let seen = {};
    let sum = 0;
    
//     for (let num of nums) {
//         let numStr = String(num);
//         if (!seen[numStr]) {
//             seen[numStr] = true;
//         } else {
//             delete seen[numStr];
//         }
//     }
    
//     return Number(Object.keys(seen)[0])
    for (let num of nums) {
        let numStr = String(num);
            if (!seen[numStr]) {
                seen[numStr] = true;
                sum += num
            } else {
                delete seen[numStr];
                sum -= num;
            }
    }
    
    return sum;
};