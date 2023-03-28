/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counter = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!counter.has(nums[i])) {
            counter.set(nums[i], 0);
        }
        counter.set(nums[i], counter.get(nums[i]) + 1);
    }
    let max;
    let maxCounter = Number.NEGATIVE_INFINITY;
    counter.forEach((value, key) => {
        if (value > maxCounter) {
            maxCounter = value;
            max = key;
        }
    });
    return max;
};