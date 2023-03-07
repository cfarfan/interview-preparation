package app.src.main.kotlin.fcopardo.array

class ContainsDuplicate {

    companion object{

        //O (time) : N Log N + N
        fun containsDuplicate(nums: IntArray): Boolean {
            var sorted = nums.sortedArray()
            var previous = 0
            var i = 0
            var found = false

            while(i < nums.size && !false){
                if(i ==0 ){
                    previous = sorted[i]
                } else {
                    if(previous == sorted[i]){
                        found = true
                    } else {
                        previous = sorted[i]
                    }
                }
                i++
            }
            return found
        }

        //O (time) : N
        fun containsDuplicateNoSort(nums: IntArray): Boolean {

            var previous = mutableMapOf<Int, Int>()
            var i = 0
            var found = false

            while(i < nums.size && !false){
                if(previous.containsKey(nums[i])){
                    found = true
                } else {
                    previous[nums[i]] = 1
                }
                i++
            }
            return found
        }
    }
}