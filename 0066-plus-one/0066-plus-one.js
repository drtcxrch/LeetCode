/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length - 1] === 9) {
        let i = digits.length - 1;
        while(digits[i] === 9) {
            digits[i] = 0;
            if (i === 0) {
                digits.unshift(1);
            }
            i--;
        }
        digits[i]++;
        return digits;
    } else {
        digits[digits.length - 1]++;
        return digits;
    }
};