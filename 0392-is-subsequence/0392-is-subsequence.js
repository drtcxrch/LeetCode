/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s.length) {
        return true;
    }
    
    for (let i = 0; i < s.length; i++) {
        let char1 = s[i];                  
        for (let j = 0; j < t.length; j++) {
            let char2 = t[j];
            if (char2 === char1 && i === s.length - 1) {
                return true;
            } else if (char2 === char1) {
                t = t.slice(j + 1);
                break;
            } else if (j === t.length - 1) {
                return false;
            }
        }
    }
    
    return false;
};