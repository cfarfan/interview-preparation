package app.src.main.kotlin.fcopardo.binary

class ReverseBits {

    companion object{
        fun reverseBits(n:Int):Int {
            var result = toBinary(n)
            var r1 = fromBinary(result)
            return r1
        }

        fun toBinary(num : Int) : String {
            var rest = num.toUInt()
            var builder = StringBuilder()
            var digit = 0U
            while(rest > 0U){
                digit = (rest % 2U)
                builder.append(digit.toString())
                rest = rest/2U
            }
            var c = builder.toString().length
            if(c<31){
                while(c < 31){
                    builder.append("0")
                    c++
                }
                if(num > 0){
                    builder.insert(0, "1")
                } else {
                    builder.insert(0, "0")
                }
            }
            return builder.toString()
        }

        fun fromBinary(num : String) : Int {
            var limit = num.lastIndex
            var c = 0
            var total = 0
            var curr = 0
            while(limit > 0){
                curr = curr + (power(2, c) * num.get(limit).toString().toInt())
                limit--
                c++
            }
            return curr.toInt()
        }

        fun power(base : Int, power : Int) : Int{
            var c = 0
            var result = base
            while(c<power){
                result = result*base
                c++
            }
            return result
        }
    }

}