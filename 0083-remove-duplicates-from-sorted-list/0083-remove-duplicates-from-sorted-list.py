# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node = head
        while hasattr(node, 'next'):
            if hasattr(node, 'val') and hasattr(node.next, 'val') and node.val == node.next.val:
                if hasattr(node.next, 'next'):
                    node.next = node.next.next
                    continue
                else:
                    node.next = None
            node = node.next
            
        return head