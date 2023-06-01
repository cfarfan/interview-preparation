package app.src.main.kotlin.fcopardo.strings;

public class ValidPalindrome {
    public boolean isPalindrome(String s) {

        String str = s.trim().toLowerCase();
        str = str.replaceAll("[^\\w]", "").replaceAll("_", "");

        int c = 0;
        int k = str.length() - 1;
        if(k<0){
            k = 0;
        }

        while(c<k){
            if(str.charAt(c)!=str.charAt(k)){
                return false;
            }
            c++;
            k--;
        }
        return true;
    }
}
