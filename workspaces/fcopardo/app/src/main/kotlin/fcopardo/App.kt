/*
 * This Kotlin source file was generated by the Gradle 'init' task.
 */
package app.src.main.kotlin.fcopardo

import app.src.main.kotlin.fcopardo.array.TwoSum

class App {
    val greeting: String
        get() {
            return "Hello World!"
        }
}

fun main() {
    println(App().greeting)
    TwoSum.twoSum(intArrayOf(2, 7, 5, 16, 8), 9).forEach {
        print("$it,")
    }
}
