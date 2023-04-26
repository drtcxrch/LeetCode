# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummyNode = ListNode(0)
        merged = dummyNode
        
        while True:
            if list1 == None:
                merged.next = list2
                break
            if list2 == None:
                merged.next = list1
                break
            if list1.val <= list2.val:
                merged.next = list1
                list1 = list1.next
            else:
                merged.next = list2
                list2 = list2.next
            
            merged = merged.next
        
        return dummyNode.next
          
            
            