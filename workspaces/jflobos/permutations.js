/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let current;
    let values;
    let queue = [[[], nums]];
    const results = [];
    while(queue.length > 0) {
        [current, values] = queue.shift();
        if (values.length === 0) {
            results.push(current);
        }
        for (let i = 0; i < values.length; i++) {
            queue.push([[...current, values[i]], [...values.slice(0, i), ...values.slice(i+1, values.length)]]);
        }
    }
    return results;
};
