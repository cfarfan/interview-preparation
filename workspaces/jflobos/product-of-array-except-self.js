/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let runningProduct = 1;
    let result = [...Array(nums.length)].map(_ => 0);
    // going to left
    for (let i = 0; i < nums.length; i++) {
        result[i] = runningProduct;
        runningProduct = runningProduct * nums[i];
    }

    // going to right
    runningProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = runningProduct * result[i];
        runningProduct *= nums[i];
    }
    return result;
};
