package app.src.main.kotlin.fcopardo.stack;

public class BackspaceStringCompare {
    public boolean backspaceCompare(String s, String t) {
        String one = clean(s);
        String two = clean(t);

        return one.equals(two);
    }

    public String clean(String s){
        Character[] one = new Character[s.length()];
        char candidate;
        int position = 0;
        for(int c = 0; c<s.length();c++){
            candidate = s.charAt(c);
            if(String.valueOf(candidate).equals("#")){
                if(c > 0){
                    position = position -1;
                    if(position < 0) position = 0;
                }
                one[position] = null;
            } else {
                one[position] = new Character(candidate);
                position++;
            }
        }

        String result = "";
        for(int c = 0; c<s.length();c++){
            if(one[c]!=null) result = result+one[c].toString();
        }

        return result;
    }
}
