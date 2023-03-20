package app.src.main.kotlin.fcopardo.array

class ThreeSum {
    companion object{
        fun threeSum(nums: IntArray): List<List<Int>> {

            nums.sort()
            var mapped = mutableMapOf<Int, MutableList<Int>>()
            var indexed = mutableMapOf<String,Int>()
            var c = 0
            var limit = if(nums.size > 0){
                nums.size -1
            } else {
                0
            }

            var mappedPositions = mutableListOf<Int>()
            nums.forEachIndexed { i, e ->
                if(mapped.containsKey(e)){
                    mappedPositions = mapped[e]!!
                } else {
                    mappedPositions = mutableListOf<Int>()
                }
                mappedPositions.add(i)
                mapped[e] = mappedPositions
            }

            var curr = 0
            var target = 0
            var next = 0
            var key = ""
            var triplets = mutableListOf<List<Int>>()
            while(c<limit){
                curr = nums[c]

                var k = c+1
                var keepOn = true
                while(k<limit){
                    next = nums[k]
                    target = (curr + next)*-1
                    if(mapped.containsKey(target)){
                        if(target == curr){
                            keepOn = mapped[curr]!!.size > 1
                        }
                        if(target == next){
                            keepOn = mapped[next]!!.size > 1
                        }
                        if(curr == next){
                            keepOn = mapped[next]!!.size > 1
                        }
                        if(curr == next && next == target){
                            keepOn = mapped[next]!!.size > 2
                        }
                        if(keepOn){
                            val difference = mutableListOf<Int>()
                            difference.add(curr)
                            difference.add(next)
                            difference.add(target)
                            difference.sort()
                            key = difference.joinToString()
                            if(!indexed.containsKey(key)){
                                indexed[key] = 1
                                triplets.add(difference)
                            }
                        }
                    }
                    k++
                }

                c++
            }

            return triplets
        }
    }
}