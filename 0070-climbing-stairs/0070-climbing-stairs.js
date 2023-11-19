/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let options = [1, 1];
    
    for (let i = 0; i <n; i++) { //0, 1
        let temp = options[1];
        options[1] = options[0] + options[1];
        options[0] = temp;
    }
    
    return options[0];
};