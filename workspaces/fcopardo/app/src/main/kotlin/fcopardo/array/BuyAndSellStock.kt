package app.src.main.kotlin.fcopardo.array

class BuyAndSellStock {
    companion object{
        fun maxProfit(prices: IntArray): Int {

            var profit = 0
            var buy = prices[0]
            var attempt = 0

            for (c in 1 until prices.size) {
                if(buy > prices[c]){
                    buy = prices[c]
                } else {
                    if(prices[c] - buy > profit){
                        profit = prices[c] - buy
                    }
                }
            }

            return profit
        }

        fun maxProfit2(prices: IntArray): Int {

            var profit = 0
            var i: Int
            var last = prices.lastIndex
            var attempt = 0

            for (c in 0 until prices.lastIndex) {
                i = c + 1
                last = prices.lastIndex

                while (i <= last) {
                    attempt = prices[i] - prices[c]

                    if (attempt > 0 && attempt > profit) {
                        profit = attempt
                    }

                    attempt = prices[last] - prices[c]
                    if (attempt > 0 && attempt > profit) {
                        profit = attempt
                    }

                    last--
                    i++
                }
            }

            return profit
        }
    }
}