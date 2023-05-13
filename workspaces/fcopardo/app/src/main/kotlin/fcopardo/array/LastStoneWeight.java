package app.src.main.kotlin.fcopardo.array;

import java.util.Arrays;
public class LastStoneWeight {

    public int lastStoneWeight(int[] stones) {

        int[] result = smash(stones);

        while(result.length > 1){
            result = smash(result);
            if(result.length == 0) return 0;
        }

        return result[0];

    }

    public int[] smash(int[] stones){

        if(stones.length <= 1) return stones;

        Arrays.sort(stones);

        int diff = stones[stones.length -1] - stones[stones.length -2];
        int[] result = new int[stones.length - 1];

        for(int c = 0; c<stones.length -2;c++){
            result[c] = stones[c];
        }
        result[stones.length - 2] = diff;
        return result;
    }
}
