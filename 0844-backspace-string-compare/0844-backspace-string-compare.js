/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 function getStack(s) {
    const stack = [];
    for (const c of s) {
        if (c === "#") {
            stack.pop();
        } else {
            stack.push(c)
        }
    }
    return stack;
 }
 
var backspaceCompare = function(s, t) {
    const sStack = getStack(s);
    const tStack = getStack(t);
    return sStack.join('') === tStack.join('');

    // if (sStack.length !== tStack.length) {
    //     return false;
    // }
    // while (sStack.length > 0) {
    //     if (sStack.pop() !== tStack.pop()) {
    //         return false;
    //     }
    // }
    // return true;
};