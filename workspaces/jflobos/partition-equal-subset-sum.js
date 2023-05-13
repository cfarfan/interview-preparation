/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if (nums.length == 1) {
        return false;
    }
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) {
        return false;
    }
    const sortedNums = nums.sort((a,b) => b - a);
    const numbers = new Map();
    nums.forEach((num) => {
        if (!numbers.has(num)) {
            numbers.set(num, 0);
        }
        numbers.set(num, numbers.get(num) + 1);
    });
    const missingTargets = new Set();
    function findNumber(target) {
        if (missingTargets.has(target)) {
            return false;
        }
        missingTargets.add(target);
        for (let i = 0; i < sortedNums.length; i++) {
            if (numbers.has(sortedNums[i])) {
                const value = sortedNums[i];
                if (target === value) {
                    return true;
                } else if (target > value) {
                    if (numbers.get(value) === 1) {
                        numbers.delete(value);
                    } else {
                        numbers.set(value, numbers.get(value) - 1);
                    }
                    if (findNumber(target - value)) {
                        return true
                    }
                    if (!numbers.has(value)) {
                        numbers.set(value, 0);
                    }
                    numbers.set(value, numbers.get(value) + 1);
                }
            }
        }
        return false;
    }

    return findNumber(parseInt(sum/2));
};
