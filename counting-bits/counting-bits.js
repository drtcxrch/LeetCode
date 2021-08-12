/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var binaryArr = [];
    
    for (var i = 0; i <= n; i++) {
        var bin = i.toString(2);
        var iCount = 0;
        for (var j = 0; j < bin.length; j++) {
            if (bin[j] === '1') {
                iCount += 1;
            }
        }
        binaryArr.push(iCount);
    }
    
    return binaryArr;
};

//