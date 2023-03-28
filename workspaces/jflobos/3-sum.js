/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    const sorted = nums.sort((a,b) => a - b);
    const solution = new Set();
    for (let pivot = 0; pivot < sorted.length; pivot++) {
        if (pivot > 0 && sorted[pivot] === sorted[pivot-1]) {
            continue;
        }
        left = pivot + 1;
        right = sorted.length - 1;
        while (left < right) {
            const sum = sorted[left] + sorted[right] + sorted[pivot];
            if (sum === 0) {
                if (left !== pivot && right !== pivot) {
                    const triplet = [sorted[left], sorted[pivot], sorted[right]].sort().join(',');
                    if (!solution.has(triplet)) {
                        solution.add(triplet);
                    }
                }
                left++
                while (sorted[left] === sorted[left-1]) {
                    left++;
                }
                right--;
                while (sorted[right] === sorted[right+1]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
                if (left === pivot) {
                    left++;
                }
            } else {
                right--;
                if (right === pivot) {
                    right--;
                }
            }
        }
    }

    return [...solution.keys()].map(key => key.split(',').map(x => parseInt(x)));
};
