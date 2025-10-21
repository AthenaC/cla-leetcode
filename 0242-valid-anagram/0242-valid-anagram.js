/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const freq = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!freq[s[i]]) {
            freq[s[i]] = 1;
        } else {
            freq[s[i]]++;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!freq[t[i]]) {
            return false;
        } else {
            freq[t[i]]--;
        }
    }
    return true;
    // return Object.values(freq).filter((n) => n % 2 !== 0).length === 0 ? true : false;
}