package app.src.main.kotlin.fcopardo.array;

public class SquaresOfASortedArray {
    public int[] sortedSquares(int[] nums) {

        if(nums.length == 1){
            nums[0] = nums[0]*nums[0];
            return nums;
        }

        if(nums.length == 0){
            return nums;
        }

        int c = 0;
        int[] copy = new int[nums.length];

        while(c<nums.length && nums[c]<0){
            nums[c] = nums[c]*-1;
            c++;
        }


        if(c == 0){
            for(int q = 0;q<nums.length;q++){
                nums[q] = nums[q]*nums[q];
            }
            return nums;
        }

        int k = 0;
        int toLeft = c-1;
        int toRight = c;

        Integer tl = 0;
        Integer tr = 0;

        while(k<nums.length){

            if(toLeft>=0){
                tl = nums[toLeft]*nums[toLeft];
            } else {
                tl = null;
            }
            if(toRight<nums.length){
                tr = nums[toRight]*nums[toRight];
            } else {
                tr = null;
            }


            if(tl == null && tr == null){
                break;
            }

            if(tl !=null && tr !=null && tl.equals(tr)){
                copy[k] = tl;
                k++;
                toLeft = toLeft-1;
                copy[k] = tr;
                k++;
                toRight++;
                continue;
            }

            if(tr == null && tl !=null){
                copy[k] = tl;
                k++;
                toLeft = toLeft-1;
                continue;
            }

            if(tl == null && tr !=null){
                copy[k] = tr;
                k++;
                toRight++;
                continue;
            }

            if(tl != null && tr !=null){
                if(tl<tr){
                    while(tl<tr){
                        copy[k] = tl;
                        k++;
                        toLeft = toLeft -1;
                        if(toLeft>=0){
                            tl = nums[toLeft]*nums[toLeft];
                        } else {
                            tl = null;
                            break;
                        }
                    }

                    copy[k] = tr;
                    k++;
                    toRight++;
                    continue;
                }
                if(tr<tl){
                    while(tr<tl){
                        copy[k] = tr;
                        k++;
                        toRight++;
                        if(toRight<nums.length){
                            tr = nums[toRight]*nums[toRight];
                        } else {
                            tr = null;
                            break;
                        }
                    }

                    copy[k] = tl;
                    k++;
                    toLeft = toLeft -1;
                    continue;
                }
            }
        }
        return copy;
    }
}
