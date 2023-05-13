package app.src.main.kotlin.fcopardo.math;

public class RomanToInteger {
    public int romanToInt(String s) {
        char current;
        char previous = s.toUpperCase().charAt(0);

        int base = 0;
        int nextBase = getGroup(previous);
        int candidate = 0;

        for(int c = 1;c<s.length();c++){
            previous = s.toUpperCase().charAt(c-1);
            current = s.toUpperCase().charAt(c);
            candidate = getGroup(current);
            if(current != previous){
                if(candidate > getGroup(previous)){
                    nextBase = candidate - getGroup(previous);
                } else {
                    base = base + nextBase;
                    nextBase = candidate;
                }
            } else {
                nextBase = nextBase + candidate;
            }
        }
        if(nextBase != 0){
            base = base + nextBase;
        }
        return base;
    }

    public int getGroup(char c){
        String string = Character.toString(c);
        int base = 0;
        switch(string){
            case "M":
                base = 1000;
                break;
            case "D":
                base = 500;
                break;
            case "C":
                base = 100;
                break;
            case "L":
                base = 50;
                break;
            case "X":
                base = 10;
                break;
            case "V":
                base = 5;
                break;
            case "I":
                base = 1 ;
                break;
        }
        return base;
    }
}
