/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n,memo={}) {
    
    //base caase
    if(n===0){
        return 1
    }
       if(n<0){
        return 0
    }
//recursive case
    if(memo[n]=== undefined){
        memo[n] = climbStairs(n-1,memo) + climbStairs(n-2,memo)
    }
    return memo[n]
};