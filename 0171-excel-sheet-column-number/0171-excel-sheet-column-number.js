/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let indices = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = 0;
    let outOf = 1;
    
   for (let i = columnTitle.length - 1; i >= 0; i--) {
       let char = columnTitle[i];
      
           index += ((indices.indexOf(char) + 1) * outOf);
           outOf *= 26;
       
       
   }
    
    return index;
};