/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const numbers = new Set();
    const targetLength = nums.length;
    
    function getPermutations(val) {
        if (val.length === targetLength) {
            result.push(val);
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (!numbers.has(nums[i])) {
                    numbers.add(nums[i]);
                    getPermutations([...val, nums[i]]);
                    numbers.delete(nums[i]);
                }
            }
        }
    }

    getPermutations([]);
    return result;
};
