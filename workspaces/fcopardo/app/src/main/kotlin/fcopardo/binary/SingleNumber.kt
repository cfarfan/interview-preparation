package app.src.main.kotlin.fcopardo.binary

class SingleNumber {
    companion object{
        fun singleNumber(nums: IntArray): Int {
            if(nums.size == 1) return nums[0]

            nums.sortDescending()
            var previous = nums[0]
            var times = 1
            var c = 1

            while(c<=nums.lastIndex){
                if(nums[c]!=previous){
                    if(times == 1){
                        return previous
                    } else {
                        previous = nums[c]
                        times = 1
                    }
                } else {
                    times++
                }
                c++
            }
            return previous
        }
    }
}