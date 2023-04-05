package app.src.main.kotlin.fcopardo.binary

class FirstBadVersion {
    companion object {

        var badVersion = 0

        fun isBadVersion(i : Int): Boolean {
            return i >= badVersion
        }

        fun firstBadVersion(n: Int) : Int {
            return searchFrom(1, n, n/2, n, -1)
        }

        fun checkVersions(n : Int, startIndex : Int) : Int {

            var limit = n
            var c = startIndex

            var isDirection = isBadVersion(startIndex)
            var result = c
            if(!isDirection){
                while(!isDirection && c <= n){
                    isDirection = isBadVersion(c)
                    if(!isDirection){
                        c++
                    } else {
                        result = c
                    }
                }
            } else {
                while(isDirection && c > 0){
                    isDirection = isBadVersion(c)
                    if(isDirection){
                        result = c
                        c--
                    }
                }
            }
            return result
        }

        fun searchFrom(start : Int, end: Int, pivot : Int, nums : Int, previousBad : Int ) : Int{

            if(pivot > nums || pivot < 0) return -1
            var check = if(start > end){
                start - end
            } else {
                end - start
            }
            if(check < 2){
                var c = start
                while(c <= end){
                    if(isBadVersion(c)) return c
                    c++
                }
                return if(previousBad > -1){
                    previousBad
                } else {
                    -1
                }
            }

            var pivot2 = end/2
            var start2 = start
            var end2 = end
            var previousBad2 = previousBad
            if(isBadVersion(pivot)){
                previousBad2 = pivot
                end2 = pivot-1
            }
            if(!isBadVersion(pivot)){
                start2 = pivot + 1
            }
            pivot2 = (end2 - start2)/2+start2
            return searchFrom(start2, end2, pivot2, nums, previousBad2)
        }
    }
}