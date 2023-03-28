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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const solution = [];
    let queue = [[root, 0]];
    let node, level;
    while(queue.length > 0) {
        [[node, level], ...queue] = queue;
        if (!solution[level]) {
            solution[level] = [];
        }
        solution[level].push(node.val);
        if (node.left) {
            queue.push([node.left, level + 1]);
        }
        if (node.right) {
            queue.push([node.right, level +1]);
        }
    }
    return solution;
};
