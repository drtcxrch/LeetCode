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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum, cur = 0) {
    
    if (!root) {
        return false;
    }
    
    cur += root.val;
    
    if (!root.left && !root.right) {
        if (cur === targetSum) {
            return true
        }
        
        return false;
    }
    
    return hasPathSum(root.left, targetSum, cur) || hasPathSum(root.right, targetSum, cur);
};