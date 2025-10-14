var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    let diff = prices[i] - min;
    profit = Math.max(profit, diff);
  }
  return profit;
};
