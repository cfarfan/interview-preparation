/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const merged = [];
    const sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
    for (let i = 0; i < sortedIntervals.length; i++) {
        let [left, right] = sortedIntervals[i];
        while(i < sortedIntervals.length - 1 && sortedIntervals[i+1][0] <= right) {
            i++;
            right = Math.max(sortedIntervals[i][1], right);
        }
        merged.push([left, right]);
    }
    return merged;
};
