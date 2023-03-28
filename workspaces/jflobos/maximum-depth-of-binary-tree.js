/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let globalMaxDepth = 0;
    let queue = [];
    if (root) {
        queue.push([root, 1]);
    }
    while (queue.length > 0) {
        const [node, depth] = queue[0];
        globalMaxDepth = Math.max(globalMaxDepth, depth);
        if (node.left) {
            queue.push([node.left, depth + 1]);
        } 
        if (node.right) {
            queue.push([node.right, depth + 1]);
        }
        queue = queue.slice(1);
    }
    return globalMaxDepth;
};
