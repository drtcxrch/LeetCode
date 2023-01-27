/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = String(x);
    let left = 0;
    let right = str.length - 1;
    
    while (right >= left) {
        if (str[left] !== str[right]) {
            return false;
        }
        
        left++;
        right--
    }
    
    
    return true;
};