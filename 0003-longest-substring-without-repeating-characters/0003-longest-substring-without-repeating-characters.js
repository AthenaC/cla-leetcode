/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let max = 0;
    const charIndexMap = new Map();
    
    for (let right = 0; right < s.length; right++) {
        const curr = s[right];
        if (charIndexMap.has(curr) && charIndexMap.get(curr) >= left) {
            left = charIndexMap.get(curr) + 1;
        } 
        charIndexMap.set(curr, right);
        max = Math.max(max, right - left + 1)
    }
    return max;
};