/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length -1;
    const result = new Array(nums.length).fill(0);
    let index = nums.length - 1;
    while(left <= right) {
        const lsqr = nums[left]**2;
        const rsqr = nums[right]**2;
        if (rsqr >= lsqr) {
            result[index] = rsqr;
            right--;
        } else {
            result[index] = lsqr;
            left++;
        }
        index--;
    }
    return result;
};
