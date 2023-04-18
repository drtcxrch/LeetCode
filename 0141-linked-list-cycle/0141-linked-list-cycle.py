# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if head is None:
            return False
        
        node = head
        
        while node:
            if hasattr(node, "has_been_visited"):
                return True
            else:
                node.has_been_visited = True
            node = node.next