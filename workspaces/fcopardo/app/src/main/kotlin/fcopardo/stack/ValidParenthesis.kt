package app.src.main.kotlin.fcopardo.stack

class ValidParenthesis {
    companion object{
        fun isValid(s: String): Boolean {

            var c = 0
            var k = if(s.length -1 >= 0){
                s.length -1
            } else {
                0
            }

            var right = ""
            var stack = ArrayDeque<String>()

            while(c<=k){
                right = s.get(c).toString()
                stack.firstOrNull()?.let {
                    if(check(it, right)){
                        stack.removeFirst()
                    } else {
                        stack.addFirst(right)
                    }
                } ?: run{
                    stack.addFirst(right)
                }
                c++
            }
            return stack.isEmpty()

        }

        fun check(l : String, r : String) : Boolean {
            if(l == "("){
                return r == ")"
            }
            if(l == "{"){
                return r == "}"
            }
            if(l == "["){
                return r == "]"
            }
            return false
        }
    }
}