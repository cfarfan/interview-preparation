/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    function closerRotten(row, col) {
        let queue = [[row,col,0]];
        let visited = new Set([`${row},${col}`]);
        let x, y;
        while (queue.length > 0) {
            [x, y, counter] = queue.shift();
            if (grid[x][y] == 2) {
                return counter;
            }
            if (x > 0 && !visited.has(`${x-1},${y}`) && grid[x-1][y] != 0) {
                visited.add(`${x-1},${y}`);
                queue.push([x-1, y, counter + 1]);
            }
            if (x < grid.length - 1 && !visited.has(`${x+1},${y}`) && grid[x+1][y] != 0) {
                visited.add(`${x+1},${y}`);
                queue.push([x+1, y, counter + 1]);
            }
            if (y > 0 && !visited.has(`${x},${y-1}`) && grid[x][y-1] != 0) {
                visited.add(`${x},${y-1}`);
                queue.push([x, y-1, counter + 1]);
            }
            if (y < grid[0].length - 1 && !visited.has(`${x},${y+1}`) && grid[x][y+1] != 0) {
                visited.add(`${x},${y+1}`);
                queue.push([x, y+1, counter + 1]);
            }
        }
        return -1;
    }

    let minRotten = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] != 0) {
                const closer = closerRotten(i,j);
                if (closer < 0) {
                    return -1;
                }
                minRotten = Math.max(closer, minRotten);
            }
        }
    }
    return minRotten;
};
