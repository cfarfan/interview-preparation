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
                copy[c] = multiply(nums, c)
                c++
            }
            return copy

        }

        fun create(nums:IntArray){
            var c = 0
            var k = nums.lastIndex

            var result = 1
            var aux = 1

            var result2 = 1

            while(c<=nums.lastIndex){
                result = result*nums[c]
                if(c!=0){
                    aux = aux*nums[c]
                }
                if(!calculated.containsKey(c)){
                    calculated[c] = result
                }
                c++
            }

            while(k>=0){
                result2 = result2*nums[k]
                if(!calculatedTop.containsKey(k)){
                    calculatedTop[k] = result2
                }
                k--
            }

            calculated[nums.lastIndex+1] = aux
        }

        fun multiply(nums:IntArray, excluded: Int) : Int {
            var c = 0
            var result = 1

            if(excluded == 0) {
                return calculated[nums.lastIndex+1]!!
            }

            if( (calculated.containsKey(excluded-1)) ){
                result = calculated[excluded-1]!!
                c = excluded+1
                if(calculatedTop.containsKey(c)){
                    return result*calculatedTop[c]!!
                }
            }

            while(c<=nums.lastIndex){
                result = result*nums[c]
                c++
            }

            return result
        }
    }
}