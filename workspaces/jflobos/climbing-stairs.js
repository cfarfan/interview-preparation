/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const stairs = new Array(n).fill(0);
    stairs[0] = 1;
    stairs[1] = 1;
    for (let i = 0; i < n; i++) {
        if (i + 1 < n) {
            stairs[i+1] = stairs[i+1] + stairs[i];
        }
        if(i + 2 < n) {
            stairs[i+2] = stairs[i+2] + stairs[i];
        }
    }
    return stairs[n-1];
};