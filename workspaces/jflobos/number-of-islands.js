/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    function exploreIsland(row, col) {
        let queue = [[row, col]];
        let x,y;
        const visited = new Set();
        while (queue.length > 0) {
            [[x, y], ...queue] = queue;
            grid[x][y] = 0;
            if (visited.has(`${x},${y}`)) {
                continue;
            }
            visited.add(`${x},${y}`);
            if (x > 0 && grid[x -1][y] == 1) {
                queue.push([x-1, y]);
            }
            if (x < grid.length -1 && grid[x + 1][y] == 1) {
                queue.push([x + 1, y]);
            }
            if (y > 0 && grid[x][y - 1] == 1) {
                queue.push([x, y - 1]);
            }
            if (y < grid[x].length - 1 && grid[x][y + 1] == 1) {
                queue.push([x, y + 1]);
            }
        }
    }

    const m = grid.length;
    const n = grid[0].length;
    let counter = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                exploreIsland(i,j);
                counter++;
            }
        }
    }
    return counter;
};
