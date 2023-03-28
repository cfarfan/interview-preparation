/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const distanceToOrigin = ([x, y]) => x**2 + y**2;

    const sorted = points.sort((a,b) => distanceToOrigin(a) - distanceToOrigin(b));
    return sorted.slice(0, k);
};
