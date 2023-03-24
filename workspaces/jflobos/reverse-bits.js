/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let bits = "";
    while(n > 0) {
        if (n%2 === 0) {
            bits += "0";
        } else {
            bits += "1";
        }
        n = Math.floor(n/2);
    }
    let result = 0;
    
    while (bits.length < 32) {
        bits += "0";
    }

    for (let i = bits.length-1, j = 0; i >= 0; i--, j++) {
        if (bits[i] === "1") {
            result += 2**j;
        }
    }
    return result;
};
