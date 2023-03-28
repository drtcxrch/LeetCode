class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        dupes = {}
        
        for num in nums:
            if num not in dupes:
                dupes[num] = 1
            else:
                print(dupes)
                return True
            
        return False
        