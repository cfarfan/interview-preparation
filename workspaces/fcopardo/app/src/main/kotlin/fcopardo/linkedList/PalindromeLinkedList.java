package app.src.main.kotlin.fcopardo.linkedList;

public class PalindromeLinkedList {
    public boolean isPalindrome(ListNode head) {
        ListNode copy = head;
        StringBuilder word = new StringBuilder();

        while(copy !=null){
            word = word.append(String.valueOf(copy.val));
            copy = copy.next;

        }

        return word.toString().equals(word.reverse().toString());
    }
}
