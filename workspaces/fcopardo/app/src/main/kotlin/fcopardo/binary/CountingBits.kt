package app.src.main.kotlin.fcopardo.binary

class CountingBits {
    companion object{
        fun countBits(n: Int): IntArray {
            var c = 0
            var myArray = IntArray(n+1)
            while(c<=n){
                myArray[c] = onesInBinary(c)
                c++
            }
            return myArray
        }

        fun onesInBinary(num : Int) : Int {
            var rest = num
            var total = ""
            var digit = 0
            var accumulated = 0
            while(rest > 0){
                digit = (rest % 2)
                if(digit == 1){
                    accumulated++
                }
                total = total + digit.toString()
                rest = rest/2
            }
            return accumulated
        }
    }
}