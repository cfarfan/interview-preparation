/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    const sorted = nums.sort((a,b) => a - b);
    const solution = [];
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
                    solution.push([sorted[left], sorted[pivot], sorted[right]]);
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
            } else {
                right--;
            }
        }
    }

    return solution;
};
