# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next    
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        vals = []
        node = head
        while node:
            vals.append(node.val)
            node = node.next
        
        left = 0
        right = len(vals) - 1
        
        while left <= right:
            if vals[left] != vals[right]:
                return False
            left += 1
            right -= 1
        
        return True