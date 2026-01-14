/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i] + 1) {
            return nums[i] + 1;
        } else if (i === nums.length - 1) {
            return nums[nums.length - 1] + 1;
        }
    }
};