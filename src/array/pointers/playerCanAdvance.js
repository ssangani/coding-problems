/**
 * Given an array boardgame, where each element indicates maximum
 * number of positions a player can advance from that position,
 * return whether player can advance from start to end of the
 * boardgame or not.
 * 
 * Example 1:
 * Input: [3,3,1,0,2,0,1]
 * Output: true
 * 
 * Example 2:
 * Input: [3,2,0,0,2,0,1]
 * Output: false
 * @param {*} boardgame
 * @returns {boolean}
 */
const playerCanAdvance = (boardgame) => {
  let furthestSoFar = 0;
  const lastIndex = boardgame.length - 1;
  for (let i = 0; i <= furthestSoFar && furthestSoFar < lastIndex; i++) {
    furthestSoFar = Math.max(furthestSoFar, i + boardgame[i]);
  }
  return furthestSoFar >= lastIndex;
};

module.exports = playerCanAdvance;
