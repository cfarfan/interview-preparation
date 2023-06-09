package app.src.main.kotlin.fcopardo.linkedList;

public class ReverseLinkedList {
    public ListNode reverseList(ListNode head) {
        ListNode copy = head;
        ListNode reversed = null;
        ListNode swap = null;

        while(copy!=null){
            swap = copy.next;
            copy.next = reversed;
            reversed = copy;
            copy = swap;
        }

        return reversed;
    }
}
