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
 * @return {number}
 */
var minDepth = function(root) {
    let min;
    
    if (!root) {
        return 0;
    }
    
    var traverseTree = function(node, level) {
        if (!node || (min !== undefined && level > min)) {
            return;
        }
        
        if (!node.left && !node.right && (!min || level < min)) {
            min = level;
        }
        
        let newLevel = level + 1;
        
        traverseTree(node.left, newLevel);
        traverseTree(node.right, newLevel);
    }
    
    traverseTree(root, 1)
    
    return min;
};