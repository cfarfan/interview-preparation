package app.src.main.kotlin.fcopardo.strings

class LongestPalindrome {
    companion object{
        fun longestPalindrome(s: String): Int {

            if(s.length == 1) return 1;

            var letters = mutableMapOf<String, Int>()
            var first = "";
            var allEqual = true
            var c = 0

            while(c < s.length){
                if(c == 0) {
                    first = s.get(c).toString()
                } else {
                    if(s.get(c).toString() != first) allEqual = false
                }
                var amount = 0
                if(letters.containsKey(s.get(c).toString())){
                    amount = letters[s.get(c).toString()]!!
                }
                letters[s.get(c).toString()] = amount+1
                c++
            }

            if(allEqual) {
                return s.length
            } else {
                if(s.length == 2){
                    return 1
                }
            }

            var max = 0
            var extra = 0

            letters.forEach { entry ->
                if(entry.value %2 == 0){
                    max = max+entry.value
                } else{
                    if(entry.value > 1){
                        max = max+entry.value-1
                    }
                    extra = 1
                }
            }

            if(extra > 0 && max >=2 && max % 2 ==0) max++

            return max
        }
    }
}