/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0;
   
    while (left <= right) {
      if (left === right) {
         sum += this.nums[left];
      } else {
         sum += this.nums[left];
         sum += this.nums[right];
      }
       
       left++;
       right--;
    }
    
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */