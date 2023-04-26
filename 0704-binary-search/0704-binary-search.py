class Solution:
    def search(self, nums: List[int], target: int) -> int:
        i = 0
        length = len(nums)
        
        while i < length:
            num = nums[i]
            if num == target:
                return i
            i+=1
        
        return -1
            