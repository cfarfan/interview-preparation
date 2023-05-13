package app.src.main.kotlin.fcopardo.math;

public class PalindromeNumber {
    public boolean isPalindrome(int x) {
        if(x < 0){
            return false;
        }

        String num = String.valueOf(x);

        int left = 0;
        int right = 0;
        if(num.length()>0){
            right = num.length() -1;
        }
        while(left<=right){
            if(Character.compare(num.charAt(left), num.charAt(right)) != 0){
                return false;
            }
            left++;
            right--;
        }
        return true;

    }
}
