/**
 * @param {string} s
 * @return {boolean}
 */
 const open = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
 ])
var isValid = function(s) {
    const stack = [];
    for (const c of s) {
        if (open.has(c)) {
            stack.push(c);
        } else {
            const opening = stack.pop();
            const closing = open.get(opening);
            if (closing !== c) {
                return false;
            }
        }
    }

    return stack.length === 0;
};