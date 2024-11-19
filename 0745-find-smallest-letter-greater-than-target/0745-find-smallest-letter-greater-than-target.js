/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
   for (let i = 0; i < letters.length; i++ ) {
        let char = letters[i];
        if (char > target) {
            return char
        }
   } 

   return letters[0]
};