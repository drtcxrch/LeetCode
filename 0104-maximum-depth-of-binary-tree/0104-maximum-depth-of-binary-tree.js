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
var maxDepth = function(root, depth = 0, max = 0) {
    if (!root) {
        return depth;
    }
    
    depth++;
    
    if (!root.left && !root.right && depth > max) {
        max = depth;
    }
    
    let left = maxDepth(root.left, depth, max); 
    let right = maxDepth(root.right, depth,  max);
    
    let greater = left > right ? left : right;
    
    return greater;
};