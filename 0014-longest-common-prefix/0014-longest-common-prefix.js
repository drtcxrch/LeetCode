/**
 * @param {string[]} strs
 * @return {string}
 */
var compareWords = function(first, second) {
    let longer = first.length > second.length ? first.length : second.length;
    let i = 0;
    let common = '';
    
    while (first[i] === second[i] && i < longer) {
       common += first[i];
        i++;
    }
    
    return common;
}

var longestCommonPrefix = function(strs) {
   let longest;
   
    if (strs.length === 1) {
        return strs[0];
    }
    
    for (let i = 1; i < strs.length; i++) {
        if (strs[i] === "") {
            return "";
        }
        
        if(i === 1) {
            longest = compareWords(strs[i - 1], strs[i])
        } else {
            let lastLongest = longest;
            longest = compareWords(lastLongest, strs[i]);
        }
        
        
        if (longest === "") {
            return ""
        }
    }
    
    return longest;
    
};