/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const stackElems = [];
    while (head !== null) {
        stackElems.push(head.val);
        head = head.next;
    }
    let headReversed = new ListNode();
    let reversed = headReversed;
    while (stackElems.length > 0) {
        reversed.next = new ListNode(stackElems.pop(), null);
        reversed = reversed.next;
    }
    return headReversed.next;

};