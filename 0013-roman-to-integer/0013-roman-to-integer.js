/**
 * @param {string} s
 * @return {number}
 */
var isGreater = function(num, next) {
    
}

var romanToInt = function(s) {
    let num = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let nextChar = s[i + 1];
        if (char === 'I' && nextChar === 'V') {
            num += 4;
            i++;
        } else if (char === 'I' && nextChar === 'X') {
            num += 9;
            i++;
        } else if (char === 'X' && nextChar === 'L') {
            num += 40;
            i++;
        } else if (char === 'X' && nextChar === 'C') {
            num += 90;
            i++;
        } else if (char === 'C' && nextChar === 'D') {
            num += 400;
            i++;
        } else if (char === 'C' && nextChar === 'M') {
            num += 900;
            i++;
        } else if (char === 'I') {
            num += 1;
        } else if (char === 'V') {
            num += 5;
        } else if (char === 'X') {
            num += 10;
        } else if (char === 'L') {
            num += 50;
        } else if (char === 'C') {
            num += 100;
        } else if (char === 'D') {
            num += 500;
        } else if (char === 'M') {
            num += 1000;
        }
    }
    
    return num;
};