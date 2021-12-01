/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sS = '';
    let tT = '';
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '#') {
            sS = sS.slice(0, sS.length - 1);
        } else {
            sS += char;
        }
    }
    
    for (let i = 0; i < t.length; i++) {
         let char = t[i];
        if (char === '#') {
            tT = tT.slice(0, tT.length - 1);
        } else {
            tT += char;
        }
    }
    
    return sS === tT;
};