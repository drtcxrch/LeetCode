/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummyNode = new ListNode(0);
    
    let merged = dummyNode;
    
    while (true) {
        if (l1 === null) {
            merged.next = l2;
            break
        }
        
        if (l2 === null) {
            merged.next = l1;
            break;
        }
        
        if (l1.val <= l2.val) {
            merged.next = l1
            l1 = l1.next;
        } else {
            merged.next = l2;
            l2 = l2.next;
        }
        
        merged = merged.next;
    }
    
    return dummyNode.next;
};