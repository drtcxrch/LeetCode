/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let sortedS = s.split('').sort();
    let sortedT = t.split('').sort();
    let i = 0;
    
    while (i < s.length) {
        if (sortedS[i] !== sortedT[i]) {
            return false;
        }
        
        i++;
    }
    
    return true;
}