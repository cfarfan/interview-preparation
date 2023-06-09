package app.src.main.kotlin.fcopardo.hashTable;

import java.util.HashMap;
import java.util.Map;

public class RandomNote {
    public boolean canConstruct(String ransomNote, String magazine) {
        if(ransomNote.length() > magazine.length()) return false;

        Map total = new HashMap<Character, Integer>();
        char candidate;
        int amount = 0;

        for(int c = 0; c<magazine.length();c++){
            candidate = magazine.charAt(c);
            if(total.containsKey(candidate)){
                amount = (Integer) total.get(candidate);
            } else {
                amount = 0;
            }
            amount++;
            total.put(candidate, amount);
        }

        for(int c = 0; c<ransomNote.length();c++){
            candidate = ransomNote.charAt(c);
            if(total.containsKey(candidate)){
                amount = (Integer) total.get(candidate);
            } else {
                return false;
            }
            amount--;
            if(amount < 0) return false;
            total.put(candidate, amount);
        }
        return true;

    }
}
