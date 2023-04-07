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
var isValidBST = function(root) {
    // we are going to use DFS strategy to check if all the subtrees
    // are valid BST then check for the same one.

    // We need to check if the minor node of the right tree is greater than the node val
    // the same for the left tree, the greater son cannot be bigger than the right tree
    
    // Option a) -> return a triplet in the function in order to get [valid, min, max]

    function evaluateNode(node) {
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        let leftValid, rightValid;
        if (node.left) {
            [leftValid, min, leftMax] = evaluateNode(node.left);
            if (!leftValid) {
                return [false, -1, -1];
            }
            if (node.left.val >= node.val) {
                return [false, -1, -1];
            }
            if (leftMax >= node.val) {
                return [false, -1, -1];
            }
        }
        if (node.right) {
            [rightValid, rightMin, max] = evaluateNode(node.right);
            if (!rightValid) {
                return [false, -1, -1];
            }
            if (node.right.val <= node.val) {
                return [false, -1, -1];
            }
            if (rightMin <= node.val) {
                return [false, -1, -1];
            }
        }
        min = Math.min(node.val, min);
        max = Math.max(node.val, max);
        return [true, min, max];    
    }
    
    return evaluateNode(root)[0]
    
};
