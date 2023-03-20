package app.src.main.kotlin.fcopardo.array

class MoveZeroes {
    //O (time) : N. Space: N.
    companion object{
        fun moveZeroes(nums: IntArray): Unit {
            var c = 0
            var limit = nums.size
            var done = false

            while(c < limit && !done){
                if(nums[c] == 0){
                    movetoEnd(c, nums)
                    done = true
                }
                c++
            }
        }

        fun movetoEnd(index : Int, nums : IntArray) : Int {
            var c = index
            var limit = nums.size
            var swap = 0
            var done = false
            while(c < limit && !done){
                if(c+1 < limit){
                    if(nums[c+1]==0){
                        limit = movetoEnd(c+1, nums)
                    }
                    swap = nums[c+1]
                    nums[c+1] = nums[c]
                    nums[c] = swap
                } else {
                    done = true
                }
                c++
            }
            return c -1
        }
    }
}