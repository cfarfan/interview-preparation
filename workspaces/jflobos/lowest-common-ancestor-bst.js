/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let min, max;
    if (p.val > q.val) {
        min = q.val;
        max = p.val;
    } else {
        min = p.val;
        max = q.val;
    }
    let queue = [root];
    while(queue.length > 0) {
        const node = queue.pop();
        if (node.val <= max && node.val >= min) {
            return node;
        } else if (node.val < min) {
            queue.push(node.right);
        } else {
            queue.push(node.left);
        }
    }
    return null;
};
