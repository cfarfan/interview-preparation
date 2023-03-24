 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let local = nums[0];
    for (let i = 1; i < nums.length; i++) {
        local = Math.max(nums[i], local + nums[i]);
        maxSum = Math.max(local, maxSum);
    }
    return maxSum;
};
