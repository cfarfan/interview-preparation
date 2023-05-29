package app.src.main.kotlin.fcopardo.strings

class LongestCommonPrefix {
    companion object{
        fun longestCommonPrefix(strs: Array<String>): String {

            if(strs.isEmpty()) return ""
            if(strs.size == 1) return strs[0]

            var min = strs[0].length
            var c = 0

            while(c<=strs.lastIndex){
                if(strs[c].length <= min) {
                    min = strs[c].length
                }
                c++
            }

            c = 0
            var k = 0
            var prefix = ""

            var currentLetter = ""
            var coincidences = 0
            while(k<min){
                while(c<=strs.lastIndex){
                    if(c == 0){
                        currentLetter = strs[c].get(k).toString()
                    } else {
                        if(currentLetter != strs[c].get(k).toString()){
                            c = strs.lastIndex + 1
                        } else {
                            coincidences++
                        }
                    }
                    c++
                }
                if(coincidences == strs.lastIndex){
                    prefix = prefix+currentLetter
                } else {
                    return prefix
                }
                c = 0
                coincidences = 0
                k++
            }

            return prefix

        }
    }
}