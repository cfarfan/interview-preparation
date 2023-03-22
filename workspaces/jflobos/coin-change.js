/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) {
        return 0;
    }
    const minCoins = new Array(amount+1).fill(Number.POSITIVE_INFINITY);
    for (let coin of coins) {
        if (amount >= coin) {
            minCoins[coin] = 1;
        }
    }

    for (let i = 0; i < minCoins.length; i++) {
        for (let coin of coins) {
            if (i > coin) {
                minCoins[i] = Math.min(minCoins[i], minCoins[i-coin] + 1);
            }
        }
    }
    const min = minCoins.pop();
    return min !== Number.POSITIVE_INFINITY ? min: -1;
};
