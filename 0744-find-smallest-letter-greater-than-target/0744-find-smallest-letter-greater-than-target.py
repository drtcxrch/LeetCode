class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        alpha = 'abcdefghijklmnopqrstuvwxyz'
        
        for char in letters:
            if alpha.index(char) > alpha.index(target):
                return char
        
        return letters[0]
        