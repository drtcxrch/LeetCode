/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let twoDArr = [];
    let inner = [];
    
    if (original.length !== m * n) {
        return twoDArr;
    }
    
    for (let i = 0; i < original.length; i++) {
         if (inner.length < n) {
             inner.push(original[i]);
             if (inner.length === n) {
                 twoDArr.push(inner);
                 inner = [];
             }
         }   
    }
    
    return twoDArr;
};