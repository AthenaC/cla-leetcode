/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // add validation to handle negatives, non-integers, and non-numbers

    // define base case
    if (n === 0 || n === 1) {
        return n;
    }

    // recursive case
    return fib(n - 1) + fib(n - 2);
};