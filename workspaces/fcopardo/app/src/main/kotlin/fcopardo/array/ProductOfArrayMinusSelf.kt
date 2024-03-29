package app.src.main.kotlin.fcopardo.array

class ProductOfArrayMinusSelf {
    companion object{
        var calculated = mutableMapOf<Int, Int>()
        var calculatedTop = mutableMapOf<Int, Int>()

        fun productExceptSelf(nums: IntArray): IntArray {
            var c = 0
            var copy = IntArray(nums.size)
            create(nums)
            while(c<=nums.lastIndex){
                copy[c] = multiply(c)
                c++
            }
            return copy

        }

        fun create(nums:IntArray){

            var i = 0
            var z = nums.lastIndex
            var bottom = 1
            var top = 1
            var keepGoing = true

            while(keepGoing){
                if(z>=0){
                    top = top*nums[z]
                    calculatedTop[z] = top
                    z--
                } else {
                    keepGoing = false
                }
                if(i<=nums.lastIndex){
                    bottom = bottom*nums[i]
                    calculated[i] = bottom
                    i++
                } else {
                    keepGoing = false
                }
            }

        }

        fun multiply(excluded: Int) : Int {

            if(excluded == 0) {
                return calculatedTop[excluded+1]!!
            }
            var top = if(calculatedTop.containsKey(excluded+1)){
                calculatedTop[excluded+1]!!
            } else {
                1
            }

            return calculated[excluded-1]!!*top
        }
    }
}