/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {};
    let maj;
    let max;
    
    for (let num of nums) {
        if (!count[num]) {
            count[num] = 1;
        } else {
            count[num]++;
        }
    }
    
    // console.log('count', count);
    for (let counts in count) {
        if(!maj) {
            maj = counts;
            max = count[counts];
        } else if (count[counts] > max) {
            maj = counts;
            max = count[counts];
        }
        // console.log('maj', maj, 'max', max);
    }
    
    return maj;
};