class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        numbers_sorted = sorted(nums)
        n = len(nums)
        i = 0
        while i <= n:
            if i == n or i != numbers_sorted[i]:
                return i
            i = i + 1
        