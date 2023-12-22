/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    let vals = [];
    let node = head;
    
    while (node) {
        vals.push(node.val);
        node = node.next;
    }
    
    let left = 0;
    let right = vals.length - 1;
    
    while (left <= right) {
        if (vals[left] !== vals[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
    
};