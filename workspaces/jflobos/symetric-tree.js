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
var isSymmetric = function(root) {
    function rotateTree(node) {
        if (!node) {
            return null;
        }
        if (node.left === null && node.right === null) {
            return node;
        } else if (node.left !== null && node.right !== null) {
            const aux = rotateTree(node.left);
            node.left = rotateTree(node.right);
            node.right = aux;
        } else if (node.right) {
            node.left = rotateTree(node.right);
            node.right = null;
        } else {
            node.right = rotateTree(node.left);
            node.left = null;
        }
        return node;
    }

    function compareTrees(nodeA, nodeB) {
        if (nodeA === null && nodeB === null) {
            return true;
        } else if (nodeA === null || nodeB === null) {
            return false;
        }
        if (nodeA.val !== nodeB.val) {
            return false;
        }
        const leftComparison = compareTrees(nodeA.left, nodeB.left);
        const rightComparison = compareTrees(nodeA.right, nodeB.right);
        return leftComparison && rightComparison;
    }

    if (!root) {
        return true;
    } else if (!root.left && !root.right) {
        return true;
    } else if (!root.left || !root.right) {
        return false;
    }
    const left = rotateTree(root.left);
    return compareTrees(left, root.right);
};