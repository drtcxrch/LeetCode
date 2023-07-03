class Solution:
    def isPalindrome(self, x: int) -> bool:
        NumStr = str(x)
        length = len(NumStr)
        left = 0;
        right = length - 1
        
        while left <= right:
            if NumStr[left] != NumStr[right]:
                return False
            left+=1
            right-=1
        
        return True