/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return null;
    }
    const map = new Map();
    const visited = new Set();
    const entry = node;
    visited.add(node.val);
    let queue = [node];
    let vortex;
    while(queue.length > 0) {
        [vortex, ...queue] = queue;
        const elem = map.has(vortex.val) ? map.get(vortex.val): new Node(vortex.val);
        for(neighbor of vortex.neighbors) {
            if (!visited.has(neighbor.val)) {
                queue.push(neighbor);
                visited.add(neighbor.val);
            }
            const clonedNeighbor = map.has(neighbor.val) ? map.get(neighbor.val): new Node(neighbor.val);
            elem.neighbors.push(clonedNeighbor);
            map.set(clonedNeighbor.val, clonedNeighbor);
        }
        map.set(elem.val, elem);
    }
    return map.get(entry.val);
};
