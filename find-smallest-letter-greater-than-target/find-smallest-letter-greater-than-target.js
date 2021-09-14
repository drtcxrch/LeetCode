/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let n = letters.length;
    let start = 0,
    end = n - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (letters[mid] <= target) start = mid + 1;
        else end = mid - 1;
    }
  return letters[start % n];
};