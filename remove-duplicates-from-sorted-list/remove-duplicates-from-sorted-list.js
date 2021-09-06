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
var deleteDuplicates = function(head) {
    if (!head) {
        return null;
    } else if (head.next === null) {
        return head;
    }
    
    let node = head;
    
    while (node) {
        while (node.next && node.next.val === node.val) {
            node.next = node.next.next;
        }
        
        node = node.next;
    }
    
    return head;
    //check for a head
        //return null if there is no head
    //start at the head and check the value
    //look at the next value and see if it's the same as the head
        //if it is
            //then you set the head's next.next value to folowing
    
};

//O: A node that is head of a sorted linked list without duplicates
//I: A node that is the head of asorted linked list that may have dulicates
//C: The number of nodes in the list is in the range [0, 300].
//-100 <= Node.val <= 100
//The list is guaranteed to be sorted in ascending order.
//E: If all values were the same return single node, return null if there is no head