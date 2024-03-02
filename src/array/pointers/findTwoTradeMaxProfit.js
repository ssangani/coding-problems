/**
 * Given an array of prices where each element denotes price of stock on
 * given day, find maximum profit that can be made by buying and selling
 * stock twice. The second buy can only be made after first sell.
 * 
 * Example 1:
 * Input: [12,11,13,9,12,8,14,13,15]
 * Output: 10
 * @param {Array} prices 
 * @returns {number}
 */
const findTwoTradeMaxProfit = (prices) => {
  let maxProfit = 0, minPrice = Number.MAX_VALUE;
  let oneDayProfits = [];
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    oneDayProfits[i] = Math.max(maxProfit, prices[i] - minPrice);
  }

  let maxPrice = Number.MIN_VALUE;
  for (let i = prices.length - 1; i > 0; i--) {
    maxPrice = Math.max(maxPrice, prices[i]);
    maxProfit = Math.max(maxProfit, oneDayProfits[i - 1] + maxPrice - prices[i]);
  }
  return maxProfit;
};

module.exports = findTwoTradeMaxProfit;
