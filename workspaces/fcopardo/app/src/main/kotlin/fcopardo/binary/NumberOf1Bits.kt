package app.src.main.kotlin.fcopardo.binary

class NumberOf1Bits {
    companion object{
        fun hammingWeight(n:Int):Int {
            return onesInBinary(n.toUInt())
        }

        fun onesInBinary(num : UInt) : Int {
            var rest = num
            var digit = 0U
            var accumulated = 0
            while(rest > 0U){
                digit = (rest % 2U)
                if(digit == 1U){
                    accumulated++
                }
                rest = rest/2U
            }
            return accumulated
        }
    }
}