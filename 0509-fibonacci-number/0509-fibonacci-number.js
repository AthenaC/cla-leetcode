/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = {}) {
    // define base case
    if (n < 2) {
        return n;
    }

    if (!memo[n]) {
        // recursive case
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    }

    return memo[n];
};