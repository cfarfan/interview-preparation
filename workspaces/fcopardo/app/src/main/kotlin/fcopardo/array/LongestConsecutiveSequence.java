package app.src.main.kotlin.fcopardo.array;

import java.util.Arrays;

public class LongestConsecutiveSequence {
    public int longestConsecutive(int[] nums) {

        if(nums.length==0) return 0;
        if(nums.length==1) return 1;

        int c = 0;
        Arrays.sort(nums);
        int count = 1;
        int previousCount = 0;
        c = 1;
        int previous = nums[0];
        while(c<nums.length){
            if(previous+1 == nums[c]){
                count++;
            } else {
                if(previous!=nums[c]){
                    if(previousCount < count){
                        previousCount = count;
                    }
                    count = 1;
                }
            }
            previous = nums[c];
            c++;
        }
        if(previousCount > count) return previousCount;
        return count;
    }
}
