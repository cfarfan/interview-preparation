package app.src.main.kotlin.fcopardo.strings;

import java.util.Arrays;

public class ValidAnagram {
    public boolean isAnagram(String s, String t) {

        if(s.length() != t.length()){
            return false;
        }
        char[] one = s.toCharArray();
        char[] two = t.toCharArray();

        Arrays.sort(one);
        Arrays.sort(two);

        for(int c = 0; c< one.length;c++){
            if(Character.compare(one[c], two[c]) != 0){
                return false;
            }
        }
        return true;
    }
}
