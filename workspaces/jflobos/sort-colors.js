/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // Holland flag algorith

    function swap (i, j) {
        const aux = nums[i];
        nums[i] = nums[j];
        nums[j] = aux;
    }

    let first = 0;
    let second = 0;
    let third = nums.length - 1;

    while (second <= third) {
        switch (nums[second]) {
            case 0:
                swap(first, second)
                first++;
                second++;
                break;
            case 1:
                second++;
                break;
            case 2:
                swap(second, third);
                third--;
                break;
        }
    }
};
