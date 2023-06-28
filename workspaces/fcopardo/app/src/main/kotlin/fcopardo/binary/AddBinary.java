package app.src.main.kotlin.fcopardo.binary;

import java.math.BigInteger;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class AddBinary {
    public String addBinary(String a, String b) {
        return binaryToBigInteger(a).add(binaryToBigInteger(b)).toString(2);
    }

    public Double binaryToLong(String a){
        if(a.equals("0")) return 0.0;
        int limit = a.length() -1;
        Double exp = 0.0;
        Double current = 0.0;
        Double total = 0.0;
        Double base = 0.0;

        for(int c = limit; c>=0;c--){
            current = Double.parseDouble(String.valueOf(a.charAt(c)));
            base = Math.pow(2L, exp);
            total = total + (base*current);
            exp++;
        }
        return total;
    }

    public BigInteger binaryToBigInteger(String a){
        if(a.equals("0")) return BigInteger.ZERO;
        int limit = a.length() -1;
        Integer exp = 0;
        Integer current = 0;
        BigInteger total = BigInteger.valueOf(0);
        BigInteger base = BigInteger.valueOf(2);

        for(int c = limit; c>=0;c--){
            current = Integer.valueOf(String.valueOf(a.charAt(c)));
            base = BigInteger.valueOf(2).pow(exp);
            total = total.add(base.multiply(BigInteger.valueOf(current)));
            exp++;
        }
        return total;
    }

    public String toBinaryString(Double number){
        if(number == 0.0) return "0";
        List<Integer> rem = new LinkedList<>();
        Double copy = number;
        Double current = 0.0;

        while(copy >= 1){
            current = copy % 2;
            rem.add(0, current.intValue());
            copy = copy / 2;
        }

        Iterator i = rem.iterator();
        String result = "";
        while(i.hasNext()){
            result = result + String.valueOf(i.next());
        }

        return result;

    }
}
