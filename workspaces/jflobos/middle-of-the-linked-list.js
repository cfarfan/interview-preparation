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
var middleNode = function(head) {
    let current = head;
    let counter = 0;
    while (current !== null) {
        counter++;
        current = current.next;
    }
    let middle = head;
    let half = parseInt(counter/2);
    while (half > 0) {
        middle = middle.next;
        half--;
    }
    return middle;
};