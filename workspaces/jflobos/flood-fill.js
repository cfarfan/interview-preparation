/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    const genKey = (row, col) => `${row},${col}`;

    const include = (pending, nodeSets, row, col) => {
        if (!nodeSets.has(genKey(row, col))) {
            pending.push([row, col]);
            nodeSets.add(genKey(row, col));
        }
    }

    const original = image[sr][sc];
    let queue = [];
    const visited = new Set();
    queue.push([sr, sc]);
    visited.add(genKey(sr, sc));
    while(queue.length > 0) {
        const [r, c] = queue[0];
        queue = queue.slice(1);
        if (image[r][c] === original) {
            image[r][c] = color;
        }
        if (r <= image.length - 2 && image[r + 1][c] === original) {
            include(queue, visited, r + 1, c);
        }
        if (r > 0 && image[r - 1][c] === original) {
            include(queue, visited, r - 1, c);
        }
        if (c <= image[0].length - 2 && image[r][c + 1] === original) {
            include(queue, visited, r, c + 1);
        }
        if (c > 0 && image[r][c - 1] === original) {
            include(queue, visited, r, c - 1);
        }
    }
    return image;

};