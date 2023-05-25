package app.src.main.kotlin.fcopardo.array

class GasStation {
    companion object{
        fun canCompleteCircuit(gas: IntArray, cost: IntArray): Int {
            var result = -1
            var c = 0
            while(c<=gas.lastIndex && result == -1){
                result = checkCircuit(gas, cost, c)
                c++
            }
            return result
        }

        fun checkCircuit(gas: IntArray, cost: IntArray, start: Int): Int {

            var tank = 0
            var c = start
            var isSecondTime = false
            var done = false
            var round = -1
            var success = false

            while(!done){
                tank = loadForTrip(gas, cost, 0, c)
                if(tank >= 0) {
                    done = true
                    round = c
                }
                c++
                if(c>=gas.lastIndex && !done){
                    done = true
                }
            }

            if(round == -1) return -1

            done = false
            if(c>gas.lastIndex){
                c = 0
                isSecondTime = true
            }

            while(!done){
                if(c == round && isSecondTime) {
                    success = true
                    done = true
                } else {
                    tank = loadForTrip(gas, cost, tank, c)
                    if(tank > 0){
                        c++
                    } else {
                        if(tank == 0){
                            if((c+1) == round && isSecondTime){
                                success = true
                            }
                            if(round == 0 && c >=gas.lastIndex) success = true
                        }
                        done = true
                    }
                    if(c>gas.lastIndex){
                        if(!isSecondTime){
                            isSecondTime = true
                            c = 0
                        } else {
                            done = true
                        }
                    }
                }
            }



            if(success) return round
            return -1
        }

        fun loadForTrip(gas: IntArray, cost: IntArray, tank : Int, index : Int): Int {
            return gas[index]+tank - cost[index]
        }
    }
}