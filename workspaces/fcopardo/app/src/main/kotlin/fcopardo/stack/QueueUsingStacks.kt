package app.src.main.kotlin.fcopardo.stack

class QueueUsingStacks : MyQueue() {
}

open class MyQueue() {

    private var elements = mutableListOf<Int>()

    fun push(x: Int) {
        elements.add(x)
    }

    fun pop(): Int {
        var top = elements.get(0)
        elements.removeAt(0)
        return top
    }

    fun peek(): Int {
        return elements.get(0)
    }

    fun empty(): Boolean {
        return elements.size ==0
    }

}