/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let indices = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let index = 0;
    let outOf = 26;
    
   for (let i = columnTitle.length - 1; i >= 0; i--) {
       let char = columnTitle[i];
       if (i === columnTitle.length - 1 || columnTitle.length === 1) {
           index += (indices.indexOf(char) + 1)
           console.log('here', index)
       } else {
           index += ((indices.indexOf(char) + 1) * outOf);
           outOf *= 26;
           console.log('now here', outOf)
       }
       
   }
    
    return index;
};