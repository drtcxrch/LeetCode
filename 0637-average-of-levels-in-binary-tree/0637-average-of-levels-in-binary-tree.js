/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let averages = [];
    
    var traverseTree = function(node, level, nodeCount) {
        if (!node) {
            return;
        }
        
        if (averages[level] === undefined) {
            let valObj = {val: node.val, count: 1}
            averages.push(valObj)
        } else {
            averages[level].val += node.val;
            averages[level].count++;
        }
        
        let newLevel = level + 1;
        
        traverseTree(node.left, newLevel);
        traverseTree(node.right, newLevel);
    }
    
    traverseTree(root, 0, 1)
    
    let flattened = [];
    
    for (let average of averages) {
        flattened.push(average.val / average.count);
    }
    
    return flattened;
    
};