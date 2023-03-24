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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    function compareTrees(treeA, treeB) {
        if (treeA === null && treeB === null) {
            return true;
        } else if (treeA === null || treeB === null) {
            return false;
        } else {
            if (treeA.val !== treeB.val) {
                return false;
            }
            return compareTrees(treeA.left, treeB.left) && compareTrees(treeA.right, treeB.right);
        }
    }

    let queue = [root];
    let node;
    while(queue.length > 0) {
        [node, ...queue] = queue;
        if (node.val === subRoot.val) {
            if (compareTrees(node, subRoot)) {
                return true;
            }
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return false;
};
