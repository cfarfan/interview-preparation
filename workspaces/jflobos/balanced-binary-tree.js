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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // get height for each branch
    function getHeight(node) {
        const [leftHeight, leftBalanced] = node.left? getHeight(node.left) : [0, true];
        const [rightHeight, rightBalanced] = node.right? getHeight(node.right): [0, true];
        if (!leftBalanced || !rightBalanced) {
            return [0, false];
        }
        const balanced = Math.abs(rightHeight - leftHeight) <= 1;
        const height = Math.max(rightHeight, leftHeight) + 1;
        return [height, balanced];
    }
    return root? getHeight(root)[1] : true;
};
