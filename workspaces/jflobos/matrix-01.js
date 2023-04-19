/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const result = [];
    for (let i = 0; i < m; i++) {
        result.push(new Array(n).fill(Number.POSITIVE_INFINITY));
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                result[i][j] = 0;
            } else {
                if (i === 0 && j > 0) {
                    result[i][j] = Math.min(result[i][j], result[i][j - 1] + 1);
                } else if (i > 0 && j > 0) {
                    result[i][j] = Math.min(
                        Math.min(result[i][j], result[i][j - 1] + 1),
                        result[i - 1][j] + 1
                    );
                } else if (i > 0 && j === 0) {
                    result[i][j] = Math.min(result[i][j], result[i - 1][j] + 1);
                }
            }
        }
    }
    
    for (let i = m-1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (mat[i][j] === 0) {
                result[i][j] = 0;
            } else {
                if (i === m - 1 && j < n - 1) {
                    result[i][j] = Math.min(result[i][j], result[i][j + 1] + 1);
                } else if (i < m -1 && j < n - 1) {
                    result[i][j] = Math.min(
                        Math.min(result[i][j], result[i][j + 1] + 1),
                        result[i + 1][j] + 1
                    );
                } else if (j === n -1 && i < m - 1) {
                    result[i][j] = Math.min(result[i][j], result[i + 1][j] + 1);
                }
            }
        }
    }

    return result;
};
