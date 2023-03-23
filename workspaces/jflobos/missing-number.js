/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numbers = new Set([...Array(nums.length+1).keys()]);
    nums.forEach(num => numbers.delete(num));
    return numbers.keys().next().value;
};
