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
var maxDepth = function(root) {
    if (!root) {
        return 0;
        
    }
    if (!root.left && !root.right) {
        return 1;
    }
    
    let left;
    let right;
    
    if (root.left) {
        left = 1 + maxDepth(root.left);
    }
    
    if (root.right) {
        right = 1 + maxDepth(root.right);
    }
    
    return left && !right ? left : right && !left ? right : left >= right ? left : right;
};