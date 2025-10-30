/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const arr = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === 'C') {
            arr.pop();
        } else if (operations[i] === 'D') {
            arr.push(arr[arr.length - 1] * 2);
        } else if (operations[i] === '+') {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        } else if (typeof Number(operations[i]) === 'number') {
            arr.push(Number(operations[i]));
        }
    }
    return arr.reduce((a, b) => a + b, 0);
};