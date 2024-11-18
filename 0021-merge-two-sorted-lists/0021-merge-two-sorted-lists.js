/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let merged = {};
    let node = merged;
    
    if (!list1 && list2) {
        return list2;
    } else if (!list2 && list1) {
        return list1;
    } else if (!list1 && !list2) {
        return list1;
    }
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            node.next = new ListNode(list1.val)
            list1 = list1.next;
        } else {
            node.next = new ListNode(list2.val)
            list2 = list2.next;
        }
        node = node.next;
    }
    
    if (list1) {
        node.next = list1;
    }
    
    if (list2) {
        node.next = list2;
    }

    return merged.next;
};