/**
 * P:
 * input:
 * output:
 *
 * E:
 * - if the array is empty: the length of the array
 *
 * D:
 * integers, arrays
 *
 * A:
 * 1.
 *
 * C:
 */

var twoSum = function (numbers, target) {
  // Time & Space Complexity: O(n Log n), O(1) [Constant]
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const difference = target - currentNum;

    //Set up binary search range:
    // l starts at i+1 (search only elements AFTER current position to avoid reuse)
    // r is the last index of the array
    let l = i + 1,
      r = numbers.length - 1;

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);

      if (numbers[mid] === difference) {
        // Found it! return 1-indexed position (add 1 to both indices)
        // i is the first number's position, mid is the second number's position
        return [i + 1, mid + 1];
      } else if (numbers[mid] < difference) {
        // Search the right half (larger values)
        // move left pointer past mid
        l = mid + 1;
      } else if (numbers[mid] > difference) {
        // search the left half (smaller values)
        // move right pointer before mid
        r = mid - 1;
      }
    }
    // If binary search completes without finding a match,
    // continue to next iteration (try next value of i)
  }
  // If we've checked all elements and found no pair,
};
