/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let node = head;
    
    while (node) {
        if (node.wasSeen) {
            return true;
        } else {
            node.wasSeen = true;
        }
        node = node.next;
    }
    
    return false;
};