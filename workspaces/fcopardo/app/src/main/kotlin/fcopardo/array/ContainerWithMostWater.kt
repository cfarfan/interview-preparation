package app.src.main.kotlin.fcopardo.array

class ContainerWithMostWater {
    companion object{
        fun maxArea(height: IntArray): Int {

            var max = 0
            var left = 0
            var right= 0
            var min = 0
            var candidate = 0

            var c = 0
            var k = if(height.size<1){
                0
            } else {
                height.size - 1
            }

            while(c<k){

                left = height[c]
                right = height[k]

                min = if(left>right){
                    right
                } else {
                    left
                }

                candidate = (k-c) * min

                if(max<candidate){
                    max = candidate
                }
                if(left>right){
                    k--
                } else {
                    c++
                }
            }

            return max

        }
    }
}