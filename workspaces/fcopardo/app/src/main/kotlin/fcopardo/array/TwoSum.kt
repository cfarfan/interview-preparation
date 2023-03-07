package app.src.main.kotlin.fcopardo.array

class TwoSum {

    //O (time) : N
    companion object {
        fun twoSum(nums: IntArray, target: Int): IntArray {

            var indexedValues = mutableMapOf<Int, MutableList<Int>>()

            nums.forEachIndexed{ index, value ->
                var values = mutableListOf<Int>()
                if(indexedValues.containsKey(value)){
                    values = indexedValues[value]!!
                }
                values.add(index)
                indexedValues[value] = values
            }

            var difference = 0
            nums.forEachIndexed{ index, value ->
                difference = target - value
                if(indexedValues.containsKey(difference)){
                    var indexes = indexedValues[difference]
                    indexes!!.forEach{ aIndex ->
                        if(aIndex != index){
                            return intArrayOf(index, aIndex)
                        }
                    }
                }
            }
            return intArrayOf(0)

        }
    }
}