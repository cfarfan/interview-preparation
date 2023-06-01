package app.src.main.kotlin.fcopardo.linkedList;

public class MergeTwoLists {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode merged = null;
        ListNode copied = null;

        if(list1 !=null && list2 !=null){
            merged = list1;
            copied = list2;
        } else if(list1 != null){
            return list1;
        } else if(list2 !=null){
            return list2;
        }

        while(copied !=null){
            merged = insert(copied.val, merged);
            copied = copied.next;
        }

        return merged;
    }

    public ListNode insert(int value, ListNode list){
        if(list == null) return new ListNode(value);

        ListNode tail = list;
        if(tail.val> value){
            ListNode newNode = new ListNode(value);
            newNode.next = tail;
            return newNode;
        }

        while(tail.next !=null && tail.next.val <= value){
            tail = tail.next;
        }
        ListNode copy = tail.next;
        ListNode newNode = new ListNode(value);
        newNode.next = copy;
        tail.next = newNode;
        return list;
    }
}
