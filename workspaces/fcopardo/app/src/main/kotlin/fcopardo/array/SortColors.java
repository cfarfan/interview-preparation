package app.src.main.kotlin.fcopardo.array;

public class SortColors {
    public void sortColors(int[] nums) {
        int c = 0;
        int limit = nums.length -1;
        while(c<nums.length){
            limit = sortMe(0, limit, nums);
            c++;
        }
    }

    public Integer sortMe(Integer start, Integer end, int[] nums){

        int limit = end;
        int c = 0;
        int current = 0;
        while(c<limit && c+1<=limit){
            if(nums[c]>=nums[c+1]){
                current = nums[c];
                nums[c] = nums[c+1];
                nums[c+1] = current;
            }
            c++;
        }
        return c -1;
    }
}
