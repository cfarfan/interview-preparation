package app.src.main.kotlin.fcopardo.linkedList;

public class LinkedListCycle {
    public boolean hasCycle(ListNode head) {

        ListNode one = head;
        ListNode two = head;
        while(two != null && two.next !=null){
            one = one.next;
            two = two.next.next;
            if(two == one) return true;
        }
        return false;
    }
}
