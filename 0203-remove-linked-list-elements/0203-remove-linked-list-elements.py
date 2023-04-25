# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        while hasattr(head, 'val') and head.val == val:
            head = head.next
            
        current = head
        
        while current and current.next:
            if current.next.val == val:
                if hasattr(current.next, 'next'):
                    current.next = current.next.next
                    continue
                else:
                    current.next = None
            current = current.next
        
        return head