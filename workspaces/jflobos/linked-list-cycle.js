/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) {
        return false;
    }
    let turtleHead = head.next;
    let rabbitHead;
    if (head.next !== null) {
        rabbitHead = head.next.next;
    } else {
        rabbitHead = null;
    }

    while (turtleHead !== null && rabbitHead !== null) {
        if (turtleHead === rabbitHead) {
            return true;
        }
        turtleHead = turtleHead.next;
        if (rabbitHead.next === null) {
            rabbitHead = null;
        } else {
            rabbitHead = rabbitHead.next.next;
        }
    }
    return false;
};
