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
    if (!head) {
        return false;
    }
    
    let node = head;
    
    while (node) {
        if (node.beenVisited) {
            return true;
        }
        node.beenVisited = true;
        node = node.next;
    }
    
    return false;
};