/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, start = 0) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor(nums.length / 2);
      console.log(start, nums[left], nums[right])
    if(left === right && nums[mid] !== target) {
        return -1
    }else if (nums[left] === target) {
        console.log("nums[left] === target")
        return left + start;
    } else if (nums[right] === target) {
        console.log("nums[right] === target")
        return right + start;
    } else if (nums[mid] === target) {
        console.log("nums[mid] === target", mid, start)
        return mid + start;
    } else if (target < nums[mid]) {
        return search(nums.slice(left, mid), target, start);
    } else {
        start += mid;
        return search(nums.slice(mid), target, start);
    }

};