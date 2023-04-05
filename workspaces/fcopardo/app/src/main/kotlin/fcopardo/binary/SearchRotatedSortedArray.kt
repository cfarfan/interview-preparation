package app.src.main.kotlin.fcopardo.binary

class SearchRotatedSortedArray {
    fun search(nums: IntArray, target: Int): Int {
        return searchFrom(0, nums.lastIndex, nums.lastIndex/2, target, nums)
    }

    fun searchFrom(start : Int, end: Int, pivot : Int, target : Int, nums : IntArray) : Int{

        if(pivot > nums.lastIndex || pivot < 0) return -1
        if(start - end < 2){
            var c = start
            while(c <= end){
                if(nums[c] == target) return c
                c++
            }
            return -1
        }

        var pivot2 = end/2
        var start2 = start
        var end2 = end
        if(nums[pivot] == target) return pivot
        if(nums[pivot] > target ){
            end2 = pivot -1
        }
        if(nums[pivot] < target ){
            start2 = pivot + 1
        }
        pivot2 = (end2 - start2)/2+start2
        return searchFrom(start2, end2, pivot2, target, nums)

    }
}