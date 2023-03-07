package app.src.main.kotlin.fcopardo.array

class MajorityElement {

    //O (time): N log N + N (cost of sorting plus an entire iteration)
    companion object{
        fun majorityElement(nums: IntArray): Int {
            var sorted = nums.sortedArray()

            var current = 0

            var currentSum = 0
            var limit = nums.lastIndex

            sorted.forEachIndexed { i, e ->
                if(current == e){
                    currentSum +=1
                } else {
                    if( (currentSum) > (limit / 2) ){
                        return current
                    } else {
                        current = e
                        currentSum = 1
                    }
                }
            }
            return if( (currentSum) > (limit / 2) ){
                current
            } else {
                0
            }
        }
    }
}