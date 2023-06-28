package app.src.main.kotlin.fcopardo.binary;

import java.util.Arrays;

public class MissingNumber {
    public int missingNumber(int[] nums) {

        Arrays.sort(nums);

        for(int c = 0;c<nums.length;c++){
            if(nums[c]!=c) return c;
        }

        return nums.length;
    }
}
