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
    // search problem
    // we could say that we need to found the closest root that contains p and q.
    // DFS makes sense in order to find out if we are going to find one or another one.
    let result = null;
    function findNode(node, p, q) {
        let left = node.left ? findNode(node.left, p, q) : 0;
        let right = node.right ? findNode(node.right, p, q): 0;
        let mid = node.val == q.val || node.val == p.val ? 1: 0;
        const sum = left + right + mid;
        if (result === null && sum > 1) {
            result = node;
        }
        return sum;
    }
    findNode(root, p, q);
    return result;
};
