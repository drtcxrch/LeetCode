/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let node = head;
    let count = 0;
    
    while (node) {
        count++;
        node = node.next
    }
    
    node = head;
    
    let mid = Math.floor(count / 2);
    while (node) {
        
        if (mid === 0) {
            return node;
        }
        mid--;
        node = node.next;
    }
};