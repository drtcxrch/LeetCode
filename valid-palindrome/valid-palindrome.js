/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let formatted = s.toLowerCase().replace(/[^0-9a-z]/gi, '').split(' ').join('');
    
    console.log(formatted);
    let left = 0;
    let right = formatted.length - 1;
    
    while (left <= right) {
        if (formatted[left] !== formatted[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};