/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

    let max = 1;
    let current = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue; // ignore duplicates

        if (nums[i] === nums[i - 1] + 1) {
            current++;
            max = Math.max(max, current);
        } else {
            current = 1;
        }
    }

    return max;
};
