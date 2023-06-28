package app.src.main.kotlin.fcopardo.linkedList

class MiddleOfTheLinkedList {
    companion object{
        fun middleNode(head: ListNode?): ListNode? {
            var bkp = head
            var copy = head
            var c = 0

            while(copy !=null){
                copy = copy.next
                c++
            }

            var k = 0
            while(k<(c/2)){
                bkp = bkp!!.next
                k++
            }
            return bkp
        }
    }
}