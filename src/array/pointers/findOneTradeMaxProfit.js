/**
 * Given an array of prices where each element denotes price of stock on
 * given day, find maximum profit that can be made by buying and selling
 * stock once.
 * 
 * Example 1:
 * Input: [310,315,275,295,260,270, 290, 230, 255,250]
 * Output: 30
 * @param {Array} prices 
 * @returns {number}
 */
const findOneTradeMaxProfit = (prices) => {
  let maxProfit = 0, minPrice = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};

module.exports = findOneTradeMaxProfit;
