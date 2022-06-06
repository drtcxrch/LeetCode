/**
 * @param {string} s
 * @return {boolean}
 */
var isPalidrome = function(str) {
    let left = 0; 
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            let noLeft = s.slice(left + 1, right + 1);
            let noRight = s.slice(left, right);
            
            if (isPalidrome(noLeft) || isPalidrome(noRight)) {
                return true;
            }
            
            return false;
        }
        
        left++;
        right--;
    }
    
    
    return true;
};