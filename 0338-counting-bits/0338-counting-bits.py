class Solution:
    def countBits(self, n: int) -> List[int]:
        idx = 0
        bits = []
        
        while idx <= n:
            sum = 0
            for char in format(idx, 'b'):
                if char == '1':
                    sum += 1
            bits.append(sum)
            sum = 0
            
            idx += 1
      
        return bits