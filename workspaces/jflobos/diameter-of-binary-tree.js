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
var diameterOfBinaryTree = function(root) {
    let maxGlobalDiameter = 0;
    function getMaxDiameter(node) {
        let longestRoute = 0;
        if (node) {
            const leftDiameter = node.left? getMaxDiameter(node.left): 0;
            const rightDiameter = node.right? getMaxDiameter(node.right): 0;
            maxGlobalDiameter = Math.max(maxGlobalDiameter, leftDiameter + rightDiameter);
            longestRoute = Math.max(leftDiameter, rightDiameter) + 1;
        }
        return longestRoute;
    }
    getMaxDiameter(root);
    return maxGlobalDiameter;
};
